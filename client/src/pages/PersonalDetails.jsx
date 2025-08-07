import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/token";
import { toast } from "react-toastify";

export const PersonalDetails = () => {
  const { checkoutPayment } = useAuth();
  const navigate = useNavigate();
  const [personalDetail, setPersonalDetail] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
  });
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPersonalDetail({
      ...personalDetail,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/member-details`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: personalDetail.fullName,
          email: personalDetail.email,
          phone: personalDetail.phone,
          address: personalDetail.address,
          city: personalDetail.city,
          pinCode: personalDetail.pinCode,
          state: personalDetail.state,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          toast.error("Server error:", data);
          setErrors(data);
        }
      } else {
        toast.success(data.message);
        checkoutPayment({ fullName: personalDetail.fullName });
      }
    } catch (error) {
      toast.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <div className="personal-details">
          <div className="personal-details-header">
            <h1>Personal Details</h1>
            <p>To become a member, Please fill out this form...</p>
          </div>
          {errors.error && (
            <span style={{ color: "red", padding: "1rem", lineHeight: "2rem" }}>
              {errors.error}
            </span>
          )}
          <form action="" onSubmit={handleSubmit}>
            <div className="details-from">
              <div>
                <label htmlFor="fullName">FullName :</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="full Name"
                  value={personalDetail.fullName}
                  onChange={(e) => handleOnChange(e)}
                />
                {errors.fullName && (
                  <span style={{ color: "red", paddingTop: "0.3rem" }}>
                    {errors.fullName}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email">E-Mail :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail Adderss"
                  value={personalDetail.email}
                  onChange={(e) => handleOnChange(e)}
                />
                {errors.email && (
                  <span style={{ color: "red", paddingTop: "0.3rem" }}>
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="phone">Phone No : :</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="(000) 000 0000"
                  value={personalDetail.phone}
                  onChange={(e) => handleOnChange(e)}
                />
                {errors.phone && (
                  <span style={{ color: "red", paddingTop: "0.3rem" }}>
                    {errors.phone}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="address">Address :</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={personalDetail.address}
                  onChange={(e) => handleOnChange(e)}
                />
                {errors.address && (
                  <span style={{ color: "red", paddingTop: "0.3rem" }}>
                    {errors.address}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="city">City :</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={personalDetail.city}
                  onChange={(e) => handleOnChange(e)}
                />
                {errors.city && (
                  <span style={{ color: "red", paddingTop: "0.3rem" }}>
                    {errors.city}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="pinCode">Pin Code :</label>
                <input
                  type="number"
                  id="pinCode"
                  name="pinCode"
                  value={personalDetail.pinCode}
                  onChange={(e) => handleOnChange(e)}
                />
                {errors.pinCode && (
                  <span style={{ color: "red", paddingTop: "0.3rem" }}>
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="state">State :</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={personalDetail.state}
                  onChange={(e) => handleOnChange(e)}
                />
                {errors.state && (
                  <span style={{ color: "red", paddingTop: "0.3rem" }}>
                    {errors.state}
                  </span>
                )}
              </div>
            </div>

            <div className="personal-details-btn">
              <button className="back-btn btn" onClick={() => navigate(-1)}>
                Back
              </button>

              <button className="success-btn btn">Continue</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
