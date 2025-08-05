import { and, eq, gt, gte, lt, lte, sql } from "drizzle-orm";
import crypto from "crypto";
import { db } from "../config/db.js";
import {
  contactTable,
  membershipTable,
  oauthAccountsTable,
  passwordResetTokenTables,
  paymentTable,
  personalDetailsTable,
  sessionTable,
  subscriptionTable,
  usersTable,
} from "../drizzle/schema.js";
import argon from "argon2";
import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_EXPIRY,
  MILLISECONDS_PER_SECOND,
  REFRESH_TOKEN_EXPIRY,
} from "../config/constant.js";

//*  getuserbyEmail
export const verifyUserbyEmail = async (email) => {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  return user;
};

//*   hashedPassword
export const hashedPassword = async (password) => {
  return await argon.hash(password);
};

// * createUser
export const createUser = async ({ userName, email, password }) => {
  return db
    .insert(usersTable)
    .values({ userName, email, password })
    .$returningId();
};

// * comparePassword
export const comparePassword = async (hashPassword, password) => {
  return argon.verify(hashPassword, password);
};

// export const generateToken = ({ id, userName, email }) => {
//   return jwt.sign({ id, userName, email }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });
// };

//* createSession
export const createSession = async (userId, { ip, userAgent }) => {
  if (!userId) throw new Error("Missing userId in createSession");

  const [session] = await db
    .insert(sessionTable)
    .values({ userId, ip, userAgent })
    .$returningId();

  return session;
};

// * createAccessToken
export const createAccessToken = ({
  id,
  userName,
  email,
  isEmailValid,
  sessionId,
}) => {
  const payload = { id, userName, email, isEmailValid, sessionId };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND,
  });
};

// * cerateRefreshToken
export const cerateRefreshToken = (sessionId) => {
  return jwt.sign({ sessionId }, process.env.JWT_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY / MILLISECONDS_PER_SECOND,
  });
};

//*  authenticationUser
export const authenticationUser = async ({
  user,
  userName,
  email,
  req,
  res,
}) => {
  const session = await createSession(user.id, {
    ip: req.clientIp,
    userAgent: req.headers["user-agent"],
  });

  const accessToken = createAccessToken({
    id: user.id,
    userName: user.userName || userName,
    email: user.email || email,
    isEmailValid: false,
    sessionId: session.id,
  });

  const refreshToken = cerateRefreshToken(session.id);

  const baseConfig = { httpOnly: true, secure: true };

  res.cookie("access_token", accessToken, {
    ...baseConfig,
    maxAge: ACCESS_TOKEN_EXPIRY,
  });

  res.cookie("refresh_token", refreshToken, {
    ...baseConfig,
    maxAge: REFRESH_TOKEN_EXPIRY,
  });

  return { accessToken };
};

// * verifyJWTToken
export const verifyJWTToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

// * createSession
export const findSessionById = async (sessionId) => {
  const [session] = await db
    .select()
    .from(sessionTable)
    .where(eq(sessionTable.id, sessionId));
  return session;
};

// * findUserBysessionId
export const findUserBysessionId = async (sessionId) => {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, sessionId));

  return user;
};

// * verifyRefreshToken
export const verifyRefreshToken = async (refreshToken) => {
  try {
    const decodToken = verifyJWTToken(refreshToken);
    const currentSesion = await findSessionById(decodToken.sessionId);

    if (!currentSesion && !currentSesion.valid) {
      throw new Error("invaid creadentials");
    }

    const user = await findUserBysessionId(currentSesion.userId);

    const userInfo = {
      id: user.id,
      userName: user.userName,
      email: user.email,
      isEmailValid: false,
      sessionId: currentSesion.id,
    };

    const newAccessToken = createAccessToken(userInfo);
    const newRefreshToken = cerateRefreshToken(currentSesion.id);

    return {
      user,
      newAccessToken,
      newRefreshToken,
    };
  } catch (error) {
    console.log(error.message);
  }
};

// * insertContactData
export const insertContactData = async ({ userId, name, email, message }) => {
  return db
    .insert(contactTable)
    .values({ userId, name, email, message })
    .$returningId();
};

// * clearUserSession
export const clearUserSession = async (sessionId) => {
  return await db.delete(sessionTable).where(eq(sessionTable.id, sessionId));
};

// * getSubscriptionData
export const SubscriptionData = async () => {
  const data = await db.select().from(subscriptionTable);
  return data;
};

export const memberExists = async ({ userId }) => {
  const [data] = await db
    .select()
    .from(membershipTable)
    .where(eq(membershipTable.userId, userId));

  return data;
};

export const createMembershipData = async ({
  userId,
  month,
  days,
  startDate,
  expiryDate,
  price,
}) => {
  return await db
    .insert(membershipTable)
    .values({ userId, month, days, startDate, expiryDate, price })
    .$returningId();
};

// *personalDetailsExist
export const personalDetailsExist = async ({ userId }) => {
  const [data] = await db
    .select()
    .from(personalDetailsTable)
    .where(eq(personalDetailsTable.userId, userId));
  return data;
};

// * createMemberDetails
export const createMemberDetails = async ({
  userId,
  fullName,
  email,
  phone,
  address,
  city,
  pinCode,
  state,
}) => {
  return await db
    .insert(personalDetailsTable)
    .values({ userId, fullName, email, phone, address, city, pinCode, state })
    .$returningId();
};

export const userExists = async ({ id }) => {
  const [data] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id));
  return data;
};

// * getUsersAllData
export const getUsersAllData = async ({ userId }) => {
  const [data] = await db
    .select({
      fullName: personalDetailsTable.fullName,
      email: personalDetailsTable.email,
      phone: personalDetailsTable.phone,
      address: personalDetailsTable.address,
      city: personalDetailsTable.city,
      state: personalDetailsTable.state,
      pinCode: personalDetailsTable.pinCode,
      plan: membershipTable.month,
      price: membershipTable.price,
      days: membershipTable.days,
      startDate: membershipTable.startDate,
      expiryDate: membershipTable.expiryDate,
    })
    .from(personalDetailsTable)
    .where(eq(personalDetailsTable.userId, userId))
    .leftJoin(
      membershipTable,
      eq(membershipTable.userId, personalDetailsTable.userId)
    );
  return data;
};

// *getPaymentData
export const getPaymentData = async ({ userId }) => {
  const [data] = await db
    .select()
    .from(paymentTable)
    .where(eq(paymentTable.userId, userId));

  return data;
};

// * checkMemberShipPlan - middleware
export const getMembershipData = async ({ userId }) => {
  const [data] = await db
    .select()
    .from(membershipTable)
    .where(
      and(
        lte(membershipTable.expiryDate, sql`CURRENT_DATE`),
        eq(membershipTable.userId, userId)
      )
    );

  return data;
};

// * checkMemberShipData - middleware
export const checkMemberShipData = async ({ userId }) => {
  return await db
    .delete(membershipTable)
    .where(eq(membershipTable.userId, userId));
};

// * deletepersonaldetails - middleware
export const deletepersonaldetails = async ({ userId }) => {
  return await db
    .delete(personalDetailsTable)
    .where(eq(personalDetailsTable.userId, userId));
};

// * insertPaymentId
export const insertPaymentId = async ({ paymentId, fullName, userId }) => {
  const data = await db
    .insert(paymentTable)
    .values({ paymentId, fullName, userId });
  return data;
};

// * updatePersonaldetails
export const updatePersonaldetails = async ({
  fullName,
  email,
  phone,
  address,
  city,
  pinCode,
  state,
  userId,
}) => {
  return await db
    .update(personalDetailsTable)
    .set({
      fullName,
      email,
      email,
      phone,
      address,
      city,
      pinCode,
      state,
    })
    .where(eq(personalDetailsTable.userId, userId));
};

export const findUserById = async (userId) => {
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, userId));
  return user;
};

// * updateNewPassword
export const updateNewPassword = async ({ userId, newPassword }) => {
  const hashPassword = await hashedPassword(newPassword);

  return await db
    .update(usersTable)
    .set({ password: hashPassword })
    .where(eq(usersTable.id, userId));
};

// * ceratePasswordLink
// export const createResetPaswordLink = async ({ userId }) => {
//   const randomToken = crypto.randomBytes(32).toString("hex");

//   const hashToken = crypto
//     .createHash("sha256")
//     .update(randomToken)
//     .digest("hex");

//   await db
//     .delete(passwordResetTokenTables)
//     .where(eq(passwordResetTokenTables.userId, userId));

//   await db
//     .insert(passwordResetTokenTables)
//     .values({ userId, tokenHash: hashToken });

//   return `${process.env.FRONTEND_URL}/reset-password/${randomToken}`;
// };

// * getUserWithOuthId
export const getUserWithOuthId = async ({ provider, email }) => {
  const [user] = await db
    .select({
      id: usersTable.id,
      name: usersTable.userName,
      email: usersTable.email,
      isEmailValid: usersTable.isEmailValid,
      provider: oauthAccountsTable.provider,
      providerAccountId: oauthAccountsTable.providerAccountId,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .leftJoin(
      oauthAccountsTable,
      and(
        eq(oauthAccountsTable.provider, provider),
        eq(oauthAccountsTable.userId, usersTable.id)
      )
    );

  return user;
};

export const linkUserwithAuth = async ({
  userId,
  provider,
  providerAccountId,
}) => {
  await db
    .insert(oauthAccountsTable)
    .values({ userId, provider, providerAccountId });
};

export const createUserWithOuth = async ({
  userName,
  email,
  provider,
  providerAccountId,
}) => {
  const user = await db.transaction(async (trx) => {
    const [user] = await trx
      .insert(usersTable)
      .values({
        userName,
        email,
        isEmailValid: true,
      })
      .$returningId();

    await trx
      .insert(oauthAccountsTable)
      .values({ provider, providerAccountId, userId: user.id });

    return {
      id: user.id,
      userName,
      email,
      isEmailValid: true,
      provider,
      providerAccountId,
    };
  });

  return user;
};


// * addPassword
export const addPassword = async({password , email }) => {
  await db.insert(usersTable).values
}