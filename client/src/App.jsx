import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUS";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { WhyUs } from "./pages/WhyUs";
import { Navbar } from "./components/UI/Navbar";
import { Price } from "./pages/Price";
import { Login } from "./pages/Login";
import { Footer } from "./components/UI/Footer";
import { Innerservices } from "./pages/InnerServices";

import { useLocation } from "react-router-dom";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { Logout } from "./pages/Logout";
import { Membership } from "./pages/Membership";
import { PersonalDetails } from "./pages/PersonalDetails";
import { Payment } from "./pages/Payment";
import { Profile } from "./pages/Profile";
import { EditPersonalDetails } from "./pages/EditPersonalDetails";
import { ChangePassword } from "./pages/ChangePassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { GoogleCallBack } from "./pages/GoogleCallBack";
import { SetPassword } from "./pages/SetPassword";
import { Success } from "./pages/Success";



const Layout = () => {
  const location = useLocation();
  const hidePath = [
    "/login",
    "/register",
    "/innerServices",
    "/logout",
    "/membership",
    "/personal-details",
    "/payment",
    "/edit-profile",
    "/edit-personal-detail",
    "/change-password",
    "/forgot-password",
    "/reset-password",
    "/google/callback",
    "/set-password",
    "/success",
  ];
  const shouldHide = hidePath.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/innerServices" element={<Innerservices />} />
          <Route path="/whyUs" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/price" element={<Price />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route
            path="/edit-personal-detail"
            element={<EditPersonalDetails />}
          />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/google/callback" element={<GoogleCallBack />} />
      </Routes>
      {!shouldHide && <Footer />}
      
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
};

export default App;
