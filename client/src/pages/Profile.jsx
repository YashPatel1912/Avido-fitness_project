import { useEffect, useState } from "react";
import { useAuth } from "../store/token";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { toast } from "react-toastify";

export const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [userDetails, setuserdetails] = useState([]);
  const [personalDetails, setPersonalDetails] = useState([]);
  const [paymentData, setPaymentData] = useState([]);

  const [copy, setCopy] = useState(false);

  const copyFullId = (paymentId) => {
    navigator.clipboard
      .writeText(paymentId)
      .then(() => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
      })
      .catch((err) => {
        toast.error( err);
      });
  };
  const maskedKey =
    (paymentData?.paymentId || "").slice(0, 20) + "*".repeat(10);

  useEffect(() => {
    const profileData = async () => {
      const response = await fetch("http://localhost:3000/profile", {
        credentials: "include",
        method: "GET",
      });

      const data = await response.json();
      if (response.ok) {
        setuserdetails(data.data.userData);
        setPersonalDetails(data.data.profileData);
        setPaymentData(data.data.paymentData);
      }
    };

    profileData();
  }, []);

  return (
    <>
      <section className="container">
        <div className="profile-section">
          <div className="profile-authenticate">
            {isLoggedIn ? (
              <div className="authenticate authenticate-true">
                <p>
                  <IoCheckmarkDoneCircle />
                  You are logged in
                </p>
              </div>
            ) : (
              <div className="authenticate authenticate-false">
                <p>You are not logged in</p>
              </div>
            )}
          </div>

          <div className="profile-data">
            <div className="user-data">
              <div className="user-logo">
                {/* <img src={logo} alt="" /> */}
                <h1>{userDetails?.userName?.charAt(0).toUpperCase()}</h1>
              </div>

              <div className="profile-details">
                <div>
                  <h1>{userDetails.userName}</h1>
                  <p>{userDetails.email}</p>
                  <p>
                    Member since :{" "}
                    <span style={{ fontWeight: "500" }}>
                      {new Date(userDetails.createdAt).toLocaleDateString(
                        "en-GB"
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="user-edit">
              <button
                onClick={() =>
                  navigate("/edit-profile", { state: userDetails })
                }>
                Edit Profile
              </button>
            </div> */}
          </div>

          <div className="profile-mor-detials">
            {personalDetails ? (
              <div className="profile-extra-details">
                <div className="profile-personalDetails">
                  <div>
                    <h1>Personal Details :</h1>
                  </div>
                  <div className="personalDetails">
                    <p>
                      fullname : <span>{personalDetails.fullName}</span>
                    </p>
                    <p>
                      email : <span>{personalDetails.email}</span>
                    </p>
                    <p>
                      phone number : <span>{personalDetails.phone}</span>
                    </p>
                    <p>
                      address :{" "}
                      <span>
                        {personalDetails?.address?.split(/[\s, ]+/).join(", ")}
                      </span>
                    </p>
                    <p>
                      city : <span>{personalDetails.city}</span>
                    </p>
                    <p>
                      state : <span>{personalDetails.state}</span>
                    </p>
                    <p>
                      pin code : <span>{personalDetails.pinCode}</span>
                    </p>
                  </div>
                </div>

                <p className="line"></p>

                <div className="profile-membershipDetails">
                  <div>
                    <h1>MemberShip Details : </h1>
                  </div>
                  <div className="membership-details">
                    <p>
                      Fitness Plan : <span>{personalDetails.plan}</span>
                    </p>
                    <p>
                      Days : <span>{personalDetails.days}</span>
                    </p>
                    <p>
                      Start Plan :{" "}
                      <span>
                        {new Date(personalDetails.startDate).toLocaleDateString(
                          "en-GB"
                        )}
                      </span>
                    </p>
                    <p>
                      expire Plan :{" "}
                      <span>
                        {new Date(
                          personalDetails.expiryDate
                        ).toLocaleDateString("en-GB")}
                      </span>
                    </p>
                    <p>
                      Payment Id :{" "}
                      <span
                        onClick={() => copyFullId(paymentData.paymentId)}
                        style={{ cursor: "pointer" }}
                        title="Click to copy full ID">
                        {maskedKey}
                        {copy && (
                          <div
                            style={{
                              marginTop: "8px",
                              color: "green",
                              fontSize: "0.9rem",
                              textAlign: "start",
                              fontWeight: "bold",
                              animation: "fade 2s",
                            }}>
                            payment ID is copied
                          </div>
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <p className="line"></p>

            <div className="profile-buttons">
              <div>
                <button
                  onClick={
                    personalDetails
                      ? () =>
                          navigate("/edit-personal-detail", {
                            state: personalDetails,
                          })
                      : navigate("/profile")
                  }
                  style={{
                    cursor: personalDetails ? "cursor" : "not-allowed",
                  }}>
                  Edit personalDetails
                </button>
              </div>
              <div>
                <button onClick={() => navigate("/change-password")}>
                  Change Password
                </button>
              </div>
              <div>
                <NavLink to={"/logout"}>
                  <button>Logout</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
