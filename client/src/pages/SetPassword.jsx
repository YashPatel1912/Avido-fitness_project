import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../store/token";
import { toast } from "react-toastify";

export const SetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state;

  const { setIsLoggedIn } = useAuth();

  const [Password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/set-password/", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: Password, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          toast.error("Server error:", data);
          setErrors(data.message);
        }
      } else {
        setIsLoggedIn(true);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error);
    }

    setPassword("");
  };

  return (
    <>
      <section className="container">
        <div className="set-password">
          <div className="set-password-title">
            <h2>Set Password </h2>
          </div>
          <div className="line"></div>
          <div className="set-password-data">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="input-wrapper">
                  <label>
                    <span className="icon">
                      <MdLockOutline />
                    </span>
                    <input
                      id="Password"
                      name="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your  password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="toggle"
                      onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <IoEye /> : <IoEyeOff />}
                    </span>
                  </label>
                </div>
                {errors.newPassword && (
                  <span style={{ color: "red", marginTop: "10" }}>
                    {errors.newPassword}
                  </span>
                )}
              </div>
              <div>
                <button type="submit" className="btn-primary">
                  set password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
