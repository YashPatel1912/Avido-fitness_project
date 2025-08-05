import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const EditPersonalDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const personalDetails = location?.state;

  const [updatePersonaldetails, setUpdatePersonalDetails] = useState({
    fullName: personalDetails?.fullName || "",
    phone: personalDetails?.phone || "",
    address: personalDetails?.address || "",
    city: personalDetails?.city || "",
    pinCode: personalDetails?.pinCode || "",
    state: personalDetails?.state || "",
  });

  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUpdatePersonalDetails({
      ...updatePersonaldetails,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/edit-personal-details/",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: updatePersonaldetails.fullName,
            email: personalDetails.email,
            phone: updatePersonaldetails.phone,
            address: updatePersonaldetails.address,
            city: updatePersonaldetails.city,
            pinCode: updatePersonaldetails.pinCode,
            state: updatePersonaldetails.state,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success("profile data updated.");
        navigate("/profile");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <section className="container">
        {personalDetails ? (
          <div className="details-from">
            <div className="personal-details">
              <div className="personal-details-header">
                <h1>Edit Personal Details</h1>
              </div>
              {errors.error && (
                <span
                  style={{ color: "red", padding: "1rem", lineHeight: "2rem" }}>
                  {errors.error}
                </span>
              )}
              <form onSubmit={handleFormSubmit}>
                <div className="details-from">
                  <div>
                    <label htmlFor="fullName">FullName :</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="full Name"
                      value={updatePersonaldetails.fullName}
                      onChange={(e) => handleOnChange(e)}
                    />
                    {errors.fullName && (
                      <span style={{ color: "red", paddingTop: "0.3rem" }}>
                        {errors.fullName}
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
                      value={updatePersonaldetails.phone}
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
                      value={updatePersonaldetails.address}
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
                      value={updatePersonaldetails.city}
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
                      value={updatePersonaldetails.pinCode}
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
                      value={updatePersonaldetails.state}
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

                  <button className="success-btn btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <p>first one time memebership plan get</p>
        )}
      </section>
    </>
  );
};
