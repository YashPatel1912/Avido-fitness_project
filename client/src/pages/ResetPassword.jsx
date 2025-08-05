import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { toast } from "react-toastify";

export const ResetPassword = () => {
  const location = useLocation();
  const email = location.state;

  const navigate = useNavigate();
  const [Password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
    email: email,
  });
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState({});

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPassword({
      ...Password,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/reset-password/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newPassword: Password.newPassword,
          confirmPassword: Password.confirmPassword,
          email: Password.email,
        }),
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
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <section className="container">
        <div className="reset-password change-password">
          <div className="card">
            <div className="password-header">
              <h2>Change Your Password</h2>
              <p className="line"></p>
            </div>

            {errors.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}
            <form action="" onSubmit={handleSubmit}>
              <div className="input-container">
                <div className="input-wrapper">
                  <label>
                    <span className="icon">
                      <MdLockOutline />
                    </span>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your new password"
                      value={Password.newPassword}
                      onChange={(e) => handleOnChange(e)}
                    />
                    <span
                      className="toggle"
                      onClick={() => togglePassword("newPassword")}>
                      {showPassword.newPassword ? <IoEye /> : <IoEyeOff />}
                    </span>
                  </label>
                </div>
                {errors.newPassword && (
                  <span style={{ color: "red", marginTop: "10" }}>
                    {errors.newPassword}
                  </span>
                )}

                <div className="requirements">
                  <p>
                    <strong>Password must:</strong>
                  </p>
                  <ul>
                    <li>Be at least 8 characters long</li>
                    <li>Contain a number</li>
                    <li>Include uppercase and lowercase letters</li>
                  </ul>
                </div>

                <div className="input-wrapper">
                  <label>
                    <span className="icon"></span>
                    <MdLockOutline />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your confirm password"
                      value={Password.confirmPassword}
                      onChange={(e) => handleOnChange(e)}
                    />
                    <span
                      className="toggle"
                      onClick={() => togglePassword("confirmPassword")}>
                      {showPassword.confirmPassword ? <IoEye /> : <IoEyeOff />}
                    </span>
                  </label>
                </div>
                {errors.confirmPassword && (
                  <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                )}
              </div>

              <button className="btn-primary">Change Password</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
