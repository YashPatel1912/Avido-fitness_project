import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY);

import { generateState, generateCodeVerifier, decodeIdToken } from "arctic";

import { OAUTH_EXCHANGE_EXPIRY } from "../config/constant.js";

import {
  authenticationUser,
  clearUserSession,
  comparePassword,
  createMemberDetails,
  createMembershipData,
  createUser,
  verifyUserbyEmail,
  hashedPassword,
  insertContactData,
  memberExists,
  personalDetailsExist,
  SubscriptionData,
  verifyJWTToken,
  userExists,
  getUsersAllData,
  insertPaymentId,
  getPaymentData,
  updatePersonaldetails,
  findUserById,
  updateNewPassword,
  getUserWithOuthId,
  linkUserwithAuth,
  createUserWithOuth,
} from "../services/authServices.js";
import {
  changePassword,
  contactSchema,
  forgotPasswordSchema,
  loginSchema,
  personalDetailsSchema,
  registerSchema,
  resetPasswordSchema,
  setPasswordSchema,
} from "../validators/authValidation.js";
import { google } from "../lib/oauth/google.js";

// todo postRegisterData
export const postRegisterData = async (req, res) => {
  const { data, error } = registerSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);
    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { userName, email, password } = data;

  const userExists = await verifyUserbyEmail({ email });

  if (userExists) {
    res.status(400).json({ message: ["User already exists."] });
    return;
  }

  const hashPassword = await hashedPassword(password);

  const [user] = await createUser({ userName, email, password: hashPassword });

  await authenticationUser({ user, userName, email, req, res });

  res.json({
    success: true,
    message: "registeration successfull..",
  });
};

// todo postLoginData
export const postLoginData = async (req, res) => {
  const { data, error } = loginSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);
    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { email, password } = data;

  const user = await verifyUserbyEmail(email);

  if (!user) {
    res.status(400).json({ message: ["Invalid Creadentials ."] });
    return;
  }

  const verifyPassword = await comparePassword(user.password, password);

  if (!verifyPassword) {
    res.status(400).json({ message: ["Invalid Creadentials."] });
    return;
  }

  const token = await authenticationUser({ user, req, res });

  res.json({ success: true, message: "Login SuccessFull.." });
};

// todo checkAuthData
export const checkAuthData = async (req, res) => {
  res.json({ message: "This is protected ", user: req.user });
};

// todo LogoutUser
export const logoutUser = async (req, res) => {
  await clearUserSession(req.user.sessionId);

  res.clearCookie("access_token");
  res.clearCookie("refresh_token");
  res.json({ success: true, message: "User is logout..." });
};

// todo postContactData
export const postContactData = async (req, res) => {
  const { data, error } = contactSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);
    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { name, email, message } = data;

  const user = await verifyUserbyEmail(email);

  console.log(user);

  if (!user) {
    res.status(400).json({ message: ["Invalid Creadentials ."] });
    return;
  }

  const [contactId] = await insertContactData({
    userId: user.id,
    name,
    email,
    message: message,
  });

  res.json({
    success: true,
    message: "your message send successfully.",
  });
};

// todo getSubscriptionData
export const getSubscriptionData = async (req, res) => {
  const data = await SubscriptionData();

  if (!data) {
    return res.status(400).json({ message: "no data response" });
  }

  return res.json({ sucess: true, message: "subscription data", data: data });
};

// todo postMembershipData
export const postMembershipData = async (req, res) => {
  const { month, days, price } = req.body;

  if (!req.body) {
    res.status(400).json({ error: "memebership data has submitted." });
  }

  const memberExist = await memberExists({ userId: req.user.id });

  if (memberExist) {
    return res.status(400).json({ error: "you have already plan get." });
  }

  const startdate = new Date();
  const expirydate = new Date();
  expirydate.setDate(startdate.getDate() + days);

  const membershipData = await createMembershipData({
    userId: req.user.id,
    month: month,
    days: days,
    startDate: startdate,
    expiryDate: expirydate,
    price: price,
  });

  res.json({
    success: true,
    message: "selected membership.",
    insertId: membershipData,
  });
};

// todo postPersonalDetails
export const postPersonalDetails = async (req, res) => {
  const { data, error } = personalDetailsSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);

    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { fullName, email, phone, address, city, pinCode, state } = data;

  const userExist = await personalDetailsExist({ userId: req.user.id });
  if (userExist) {
    return res
      .status(400)
      .json({ error: "you have already details fullfilled.." });
  }

  const emailExist = await verifyUserbyEmail(email);
  if (!emailExist) {
    return res
      .status(400)
      .json({ error: "This email is not login. Please use logged email id." });
  }

  const details = await createMemberDetails({
    userId: req.user.id,
    fullName,
    email,
    phone,
    address,
    city,
    pinCode,
    state,
  });

  res.json({
    success: true,
    message: "detail form submitted.",
    insertId: details,
  });
};

export const postCheckOut = async (req, res) => {
  const membership = req.body;

  const lineItems = [
    {
      price_data: {
        currency: "INR",
        product_data: {
          name: membership.month + "Plan", // valid string
          description: `${membership.days} days access`, // optional
        },
        unit_amount: membership.price * 100, // in cents
      },
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success/",
    cancel_url: "http://localhost:5173/failed/",
  });

  res.json({ id: session.id });
};

// todo GetProfilePage
export const GetProfilePage = async (req, res) => {
  const userData = await userExists({ id: req.user.id });

  if (!userData) {
    return res.json({ message: "user is not loggedIn" });
  }

  const profileData = await getUsersAllData({ userId: userData.id });

  const paymentData = await getPaymentData({ userId: userData.id });

  const data = {
    profileData: profileData,
    userData: userData,
    paymentData: paymentData,
  };

  res.json({
    success: true,
    message: "profileData updated",
    data: data,
  });
};

// todo postPaymentData
export const postPaymentData = async (req, res) => {
  const { paymentId, fullName } = req.body;

  const id = await insertPaymentId({
    paymentId,
    fullName,
    userId: req.user.id,
  });

  if (!id) {
    res.status(400).json({ message: "payment is failed" });
  }

  res.json({ success: true, message: "payment succcessFull.." });
};

//! edit data pages

// todo editPersonalDetails
export const editPersonalDetails = async (req, res) => {
  const { data, error } = personalDetailsSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);

    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { fullName, email, phone, address, city, pinCode, state } = data;

  const updatedData = await updatePersonaldetails({
    fullName,
    email,
    phone,
    address,
    city,
    state,
    pinCode,
    userId: req.user.id,
  });

  res.json({
    success: true,
    message: "your details updated",
    data: updatedData,
  });
};

// todo postChangePassword
export const postChangePassword = async (req, res) => {
  const { data, error } = changePassword.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);
    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { newPassword, confirmPassword, currentPassword } = data;

  const user = await findUserById(req.user.id);

  const isPassword = await comparePassword(user.password, currentPassword);

  if (!isPassword) {
    return res.status(400).json({ message: "currentPassword is wrong" });
  }

  const updatePassword = await updateNewPassword({
    userId: user.id,
    newPassword,
  });

  return res.json({ sucess: true, message: "your password updated" });
};

// todo postForgotPassword
export const postForgotPassword = async (req, res) => {
  const { data, error } = forgotPasswordSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);
    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { email } = data;

  const user = await verifyUserbyEmail(email);

  if (!user) {
    return res.status(400).json({ message: "Email is not Login" });
  }

  res.json({
    success: true,
    message: "password change successfully..",
    Data: user.email,
  });
};

// todo postResetPassword
export const postResetPassword = async (req, res) => {
  const { data, error } = resetPasswordSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);
    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { newPassword, confirmPassword, email } = data;

  const user = await verifyUserbyEmail(email);

  const isPassword = await comparePassword(user.password, newPassword);

  if (!isPassword) {
    return res.status(400).json({ message: "password is already" });
  }

  const updatePassword = await updateNewPassword({
    userId: user.id,
    newPassword,
  });

  res.json({ success: true, message: "password has updated.." });
};

// todo getGooglePage
export const getGooglePage = async (req, res) => {
  if (req.user) return res.redirect("/");

  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = google.createAuthorizationURL(state, codeVerifier, [
    "openid",
    "profile",
    "email",
  ]);

  const cookieConfig = {
    httpOnly: true,
    secure: true,
    maxAge: OAUTH_EXCHANGE_EXPIRY,
    sameSite: "lax",
  };

  res.cookie("google_outh_state", state, cookieConfig);
  res.cookie("google_code_verifier", codeVerifier, cookieConfig);

  res.redirect(url.toString());
};

// todo getGoogleCallBackPage
export const PostGoogleCallBackPage = async (req, res) => {
  const { code, state } = req.body;

  const { google_outh_state: storedState, google_code_verifier: codeVerifier } =
    req.cookies;

  if (
    !code ||
    !state ||
    !storedState ||
    !codeVerifier ||
    state !== storedState
  ) {
    return res.status(400).json({
      errors:
        "Couldn't login with Google because of invalid login attempt. please try agein!",
    });
  }

  let tokens;

  try {
    tokens = await google.validateAuthorizationCode(code, codeVerifier);
  } catch (error) {
    return res.status(400).json({
      errors:
        "Couldn't login with Google because of invalid login attempt. please try agein! cscsdc",
    });
  }
  const clims = decodeIdToken(tokens.idToken());
  const { sub: googleUserId, name, email } = clims;

  let user = await getUserWithOuthId({ provider: "google", email });

  if (user && !user.providerAccountId) {
    await linkUserwithAuth({
      userId: user.id,
      provider: "google",
      providerAccountId: googleUserId,
    });
  }

  // if user doesn't exists
  if (!user) {
    user = await createUserWithOuth({
      userName: name,
      email,
      provider: "google",
      providerAccountId: googleUserId,
    });
  }

  if (user) {
    await authenticationUser({ user, userName: name, email, req, res });
  }

  const data = await findUserById(user.id);

  if (data.password === null) {
    return res.status(400).json({
      redirect: "/set-password",
      error: "Set not password",
      data: data.email,
    });
  }

  res.json({ success: true, message: "user is login.." });
};

//todo postSetPasword
export const postSetPasword = async (req, res) => {
  const { data, error } = setPasswordSchema.safeParse(req.body);

  if (error) {
    const errorMessage = {};
    error.errors.map((err) => {
      errorMessage[err.path[0]] = err.message;
    });
    req.flash("errors", errorMessage);
    return res.status(400).json({ errors: req.flash("errors")[0] });
  }

  const { password, email } = data;

  const user = await verifyUserbyEmail(email);

  if (user) {
    const Password = await updateNewPassword({
      userId: user.id,
      newPassword: password,
    });
  }

  res.json({ success: true, message: "user loggedin.." });
};
