import { IoMdTime } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useAuth } from "../store/token";

import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectMembershipData = location.state;

  const { setMemberShip } = useAuth();

  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + selectMembershipData.days);
  const formattedDate = futureDate.toLocaleDateString("en-GB");

  const handleFormDetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/membership-data/`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(selectMembershipData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMemberShip(selectMembershipData);
        navigate("/personal-details");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <section className="container">
        <div className="payment-section">
          <div className="payment-data">
            <div className="payment-header">
              <h1>You're Almost There!</h1>
              <p>Review your making detils before making payment</p>
            </div>

            <div className="payment-main-details">
              <div className="plan">
                <div className="icon">
                  <span>
                    <FaRegCircleCheck style={{ color: "green" }} />
                  </span>
                </div>
                <div className="text">
                  <p>Selected Plan</p>
                  <p>{selectMembershipData.month}</p>
                </div>
              </div>
              <div className="plan">
                <div className="icon">
                  <span>
                    <IoMdTime style={{ color: "#c1c100f5" }} />
                  </span>
                </div>
                <div className="text">
                  <p>Valid Till</p>
                  <p>{formattedDate} </p>
                </div>
              </div>
              <div className="plan">
                <div className="icon">
                  <span>
                    <MdPayment style={{ color: "purple" }} />
                  </span>
                </div>
                <div className="text">
                  <p>Total Amount</p>
                  <p>₹{selectMembershipData.price}</p>
                </div>
              </div>
            </div>

            <div className="payment-more-details">
              <p>
                Need to modify your selection?{" "}
                <NavLink to={-1}>Go Back</NavLink>
              </p>
              <p>
                By contuning, you agree to our Terms, Privacy Policy, and
                recurring billing policy
              </p>
            </div>

            <div className="payment-buttons">
              <button onClick={() => navigate("/")}>Cancel</button>

              <button onClick={() => handleFormDetails()}>
                Confirm & Processed to Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
