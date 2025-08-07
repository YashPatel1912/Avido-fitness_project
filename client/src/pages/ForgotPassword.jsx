import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdError, MdEmail } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/forgot-password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
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
        navigate("/reset-password", { state: email });
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <section className="container">
      <div className="forgot-password">
        <div className="forgot-password-section">
          <div className="back-btn" onClick={() => navigate(-1)}>
            <IoMdArrowRoundBack />
          </div>

          <div className="password-title">
            <h2>Enter Your Register Email</h2>
            <div className="line"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-wrapper">
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  placeholder="Enter your Register Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            {errors && <span style={{ color: "red" }}>{errors}</span>}

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
