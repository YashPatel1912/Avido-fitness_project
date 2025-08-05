import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/token";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const Membership = () => {
  const navigate = useNavigate();
  const { setMemberShip } = useAuth();
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [selectMembershipData, setSelectMembershipData] = useState([]);

  useEffect(() => {
    const subscriptionDetails = async () => {
      const res = await fetch("http://localhost:3000/subscription-data", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      if (res.ok) {
        setSubscriptionData(data.data);
      }
    };

    subscriptionDetails();
  }, [setSubscriptionData, setSelectMembershipData]);

  const handleSubmit = async () => {
    try {
      setMemberShip(selectMembershipData);
      navigate("/payment", { state: selectMembershipData });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <section className="container">
        <div className="membership-section ">
          <div className="memebership-header">
            <h1>Select Membership</h1>
          </div>
          <div className="memebership-details">
            <ul>
              {subscriptionData.map((curElem, index) => {
                const { month, days, price } = curElem;

                return (
                  <li key={index}>
                    <div
                      className="membership-parts"
                      onClick={() => setSelectMembershipData(curElem)}>
                      <div>
                        <p>{month}</p>
                        <p>{days} Days</p>
                      </div>
                      <div className="membership-price">
                        <p>₹{price}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="membership-total">
            <div className="total-data">
              <div className="total">
                <p>Month : </p>
                <p>{selectMembershipData.month}</p>
              </div>
              <div className="total">
                <p>Days : </p>
                <p>{selectMembershipData.days}</p>
              </div>
            </div>

            <div className="total-price">
              <div className="amount total">
                <p>Total Amount :</p>
                <p> ₹{selectMembershipData.price}</p>
              </div>
            </div>
          </div>

          <div className="memebership-btn">
            <NavLink to={-1}>
              <button className="back-btn btn">Back</button>
            </NavLink>
            <button onClick={handleSubmit} className="success-btn btn">
              Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
