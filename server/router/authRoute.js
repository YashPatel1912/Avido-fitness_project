import express from "express";
const router = express.Router();
import * as authControler from "../controller/authController.js";
import {
  membershipPlanCheck,
  verifyAuthentiocationUser,
} from "../middleware/authmiddleware.js";

router.route("/").get(authControler.getBackendPage)

router.route("/api/login").post(authControler.postLoginData);
router.route("/api/register").post(authControler.postRegisterData);
router.route("/api/check-auth").get(authControler.checkAuthData);

router.route("/logout").post(authControler.logoutUser);

router.route("/contact").post(authControler.postContactData);

router.route("/subscription-data").get(authControler.getSubscriptionData);

router
  .route("/membership-data")
  .post(membershipPlanCheck, authControler.postMembershipData);

router.route("/member-details").post(authControler.postPersonalDetails);

router.route("/payment").post(authControler.postPaymentData);

router.route("/check-out").post(authControler.postCheckOut);

router.route("/profile").get(membershipPlanCheck, authControler.GetProfilePage);

router.route("/edit-personal-details").post(authControler.editPersonalDetails);

router.route("/change-password").post(authControler.postChangePassword);

router.route("/forgot-password").post(authControler.postForgotPassword);

router.route("/reset-password").post(authControler.postResetPassword);

router.route("/google").get(authControler.getGooglePage);
router.route("/google/callback").post(authControler.PostGoogleCallBackPage);

router.route("/set-password").post(authControler.postSetPasword);

export const authRoute = router;
