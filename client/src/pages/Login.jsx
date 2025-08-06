import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/token";

import { toast } from "react-toastify";

export const Login = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleOnChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleGoogleLogin = async () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/google/`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await fetch("http://localhost:3000/api/login/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors(data.message);
        }
      } else {
        toast.success(data.message);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (err) {
      toast.error(err);
    }

    setLoginData({ email: "", password: "" });
  };

  return (
    <>
      <section>
        <div className="login-page">
          <div className="login-details">
            <div className="login-title">
              <h1>Welcome Back!</h1>
            </div>
            <div className="login-auth">
              <form action="" onSubmit={handleFormSubmit}>
                {errors[0] && <span style={{ color: "red" }}>{errors[0]}</span>}
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    className="auth"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={loginData.email}
                    onChange={(e) => handleOnChangeData(e)}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>

                <div className="password ">
                  <label htmlFor="password">Password</label>
                  <input
                    className="auth"
                    type="password"
                    id="password "
                    name="password"
                    placeholder="********"
                    value={loginData.password}
                    onChange={(e) => handleOnChangeData(e)}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>{errors.password}</span>
                  )}
                </div>

                <div className="login-check">
                  <div className="rememeber">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </div>
                  <div
                    className="forgot-password"
                    onClick={() => navigate("/forgot-password")}>
                    forgot password?
                  </div>
                </div>

                <div className="submit-btn">
                  <button>Sign in</button>
                </div>
              </form>
            </div>
            <div className="login-middle-design">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>
            <div className="login-aplication">
              <button className="google app-auth" onClick={handleGoogleLogin}>
                <FcGoogle />
              </button>
              <button className="facebook app-auth">
                <BiLogoFacebookCircle style={{ color: "blue" }} />
              </button>
              {/* <button className="facebook app-auth">
                <BiLogoFacebookCircle style={{ color: "blue" }} />
              </button> */}
            </div>
            <div className="login-extra-details">
              <p>Don’t you Have Account ?</p>
              <NavLink to={"/register"}>Create an account.</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
