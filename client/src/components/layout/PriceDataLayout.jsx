import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export const PriceDataLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="price-section-title">
          <h1>FIND THE PERFECT PLAN FOR YOUR FITNESS JOURNEY</h1>
          {/* <p>
            At our gym, we understand that everyone’s fitness needs and
            schedules are different. That’s why we offer a variety of membership
            plans to suit your lifestyle and help you achieve your heal goals.
            Explore our membership options and find the one that's right for
            you!At our gym, we understand that everyone’s fitness needs and
            schedules are different. That’s why we offer a variety of membership
            plans to suit your lifestyle and help you achieve your health goals.
            Explore our membership options and find the one that's right for
            you!
          </p> */}
        </div>
        <div className="home-price-data grid-3 grid-2 grid-1">
          <div className="price-part-1 price-box">
            <h2>Basic Membership</h2>
            <h1>₹1200/month</h1>
            <p>Perfect for Beginners and Casual Users</p>
            <div className="price-more-details">
              <ul>
                <li>Full use of all cardio and strength train </li>
                <li>Secure locker rooms and shower facilities</li>
                <li>Access during regular hours of olieration</li>
                <li>assessment with a liersonal trainer if fitness goals</li>
                <li>Basic Membershili Benefits</li>
                <li>Bring a friend to the gym once a month for free</li>
              </ul>
            </div>
            <div>
              <NavLink
                to={"/payment"}
                state={{
                  name: "Basic Membership",
                  month: "1 Month",
                  days: 30,
                  price: "1200",
                }}
                className="price-btn btn-1">
                subscribe now
              </NavLink>
            </div>
          </div>
          <div className="price-part-2 price-box">
            <h2>Premium Membership</h2>
            <h1>₹1800/month</h1>
            <p>For the Fitness Enthusiast</p>
            <div className="price-more-details">
              <ul>
                <li>All Standard Membership Benefits</li>
                <li>4 personal training sessions per certified trainers</li>
                <li>Monthly sessions with nutritionist to help achieve</li>
                <li>Early access to class reservations and personal</li>
                <li>Complimentary access to our sauna steam room</li>
                <li>Invitations to special member-only</li>
              </ul>
            </div>
            <div>
              <NavLink
                to={"/payment"}
                state={{
                  name: "Premium Membership",
                  month: "1 Month",
                  days: 30,
                  price: "1800",
                }}
                className="price-btn btn-2">
                subscribe now
              </NavLink>
            </div>
          </div>
          <div className="price-part-3 price-box">
            <h2>Family Membership</h2>
            <h1>₹2400/month</h1>
            <p>Perfect for Beginners and Casual Users</p>
            <div className="price-more-details">
              <ul>
                <li>perfect for students with changing schedules</li>
                <li>Special pricing personal training wellness services</li>
                <li>Access to low-impact fitness classes seniors</li>
                <li>Specialized programs focusing on mobility</li>
                <li>Reduced rates for employees</li>
                <li>itness classes and wellness workshops</li>
              </ul>
            </div>
            <div>
              <NavLink
                to={"/payment"}
                state={{
                  name: "Family Membership",
                  month: "1 Month",
                  days: 30,
                  price: "2400",
                }}
                className="price-btn btn-3">
                subscribe now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
