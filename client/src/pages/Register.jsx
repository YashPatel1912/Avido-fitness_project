import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../store/token";

import { toast } from "react-toastify";

export const Register = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useAuth();

  const [registerData, setRegiseterData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [messages, setMesages] = useState({});

  const handleOnChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setRegiseterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleGoogleLogin = async () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/google/`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMesages({});

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userName: registerData.userName,
          email: registerData.email,
          password: registerData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setMesages(data.errors);
        } else {
          toast.error("Server error:", data);
          setMesages(data.message);
        }
      } else {
        toast.success(data.message);
        setIsLoggedIn(true);
        setUser(registerData.userName);
        navigate("/");
      }
    } catch (err) {
      toast.error(err);
    }

    setRegiseterData({ userName: "", email: "", password: "" });
  };

  return (
    <>
      <section>
        <div className="login-page">
          <div className="login-details">
            <div className="login-title">
              <h1>Create an account</h1>
            </div>
            <div className="login-auth">
              <form action="" onSubmit={handleSubmit}>
                <div className="userName">
                  {messages[0] && (
                    <span style={{ color: "red" }}>{messages[0]}</span>
                  )}
                  <label htmlFor="userName">Name</label>
                  <input
                    className="auth"
                    type="userName"
                    id="userName"
                    name="userName"
                    placeholder="Full name"
                    value={registerData.userName}
                    onChange={(e) => handleOnChangeData(e)}
                  />
                  {messages.userName && (
                    <span style={{ color: "red" }}>{messages.userName}</span>
                  )}
                </div>

                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    className="auth"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={registerData.email}
                    onChange={(e) => handleOnChangeData(e)}
                  />
                  {messages.email && (
                    <span style={{ color: "red" }}>{messages.email}</span>
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
                    value={registerData.password}
                    onChange={(e) => handleOnChangeData(e)}
                  />
                  {messages.password && (
                    <span style={{ color: "red" }}>{messages.password}</span>
                  )}
                </div>

                <div className="submit-btn">
                  <button>Create An Account</button>
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
              <p>Already Have an Account ?</p>
              <NavLink to={"/login"}>sign in</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
