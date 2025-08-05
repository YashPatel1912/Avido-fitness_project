import {
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
} from "../config/constant.js";
import {
  checkMemberShipData,
  deletepersonaldetails,
  getMembershipData,
  verifyJWTToken,
  verifyRefreshToken,
} from "../services/authServices.js";

export const verifyAuthentiocationUser = async (req, res, next) => {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;

  req.user = null;

  if (!accessToken && !refreshToken) {
    return next();
  }

  if (accessToken) {
    const decodToken = verifyJWTToken(accessToken);
    req.user = decodToken;
    return next();
  }

  if (refreshToken) {
    try {
      const { user, newAccessToken, newRefreshToken } =
        await verifyRefreshToken(refreshToken);

      req.user = user;

      const baseConfig = {
        httpOnly: true,
        secure: true,
      };

      res.cookie("access_token", newAccessToken, {
        ...baseConfig,
        maxAge: ACCESS_TOKEN_EXPIRY,
      });

      res.cookie("refresh_token", newRefreshToken, {
        ...baseConfig,
        maxAge: REFRESH_TOKEN_EXPIRY,
      });

      return next();
    } catch (error) {
      console.log(error.message);
    }
  }
  return next();
};

export const membershipPlanCheck = async (req, res, next) => {
  try {
    const data = await getMembershipData({ userId: req.user.id });

    if (!data) {
      return next();
    }

    if (data) {
      const deleteMemberShip = await checkMemberShipData({
        userId: data.userId,
      });
      const personaldetails = await deletepersonaldetails({
        userId: data.userId,
      });
    }

    return next();
  } catch (error) {
    console.log(error.message);
  }
  return next();
};
