import { NavLink } from "react-router-dom";
import price1 from "../../public/imagess/pricingImg.png";
import offerPrice from "../../public/imagess/offerImg.png";
import { PriceDataLayout } from "../components/layout/PriceDataLayout";
export const Price = () => {
  return (
    <>
      <section>
        <div className="price-page">
          <div className="head-title">
            <div className="banner-title">
              <h1>Choose the offer that best suits you</h1>
            </div>
          </div>

          <div className="container">
            <div className="fit-details">
              <div className="image">
                <img src={price1} alt="avido fitness" />
              </div>
              <div className="details">
                <h2>Get Strong, Stay Fit – Plans for Every Lifestyle</h2>
                <p>
                  At our gym, we understand that everyone’s fitness needs and
                  schedules are different. That’s why we offer a variety of
                  membership plans to suit your lifestyle and help you achieve
                  your heal goals. Explore our membership options and find the
                  one that's right for you!At our gym, we understand that
                  everyone’s fitness needs and schedules are different. That’s
                  why we offer a variety of membership plans to suit your
                  lifestyle and help you achieve your health goals. Explore our
                  membership options and find the one that's right for you!
                </p>
              </div>
            </div>

            <div className="membership-section">
              <PriceDataLayout />
            </div>

            <div className="membership-offer">
              <img src={offerPrice} alt="" />
              <div className="offer-text">
                <h2>Special offer</h2>
                <p>
                  Get 30% off when you buy an annual pass Buy an annual pass
                </p>
                <NavLink to={"/membership"}>Buy An Anual Pass</NavLink>
              </div>
            </div>

            {/* <div className="subscription-section">
              <div className="subscription-details">
                <div className="subscription-left">
                  <h2>Choose a suitable subscription</h2>
                  <p>
                    The best yoga and meditation practices, adapted at a high
                    level to the needs of the modern pace of life
                  </p>
                  <ul>
                    <li>lesson duration 90 minutes</li>
                    <li>subscription valid for 30 days</li>
                    <li>valid for all types of classes</li>
                  </ul>
                </div>
                <div className="subscription-right">
                  <div className="subscription-data">
                    <div>
                      <p>4 lessons</p>
                      <p>Valid for all types of classes</p>
                    </div>
                    <div>
                      <p>$40</p>
                      <p>$10 per class</p>
                    </div>
                    <div>
                      <NavLink to={"/membership"}>Buy</NavLink>
                    </div>
                  </div>

                  <div className="subscription-data">
                    <div>
                      <p>4 lessons</p>
                      <p>Valid for all types of classes</p>
                    </div>
                    <div>
                      <p>$40</p>
                      <p>$10 per class</p>
                    </div>
                    <div>
                      <NavLink to={"/membership"}>Buy</NavLink>
                    </div>
                  </div>

                  <div className="subscription-data">
                    <div>
                      <p>4 lessons</p>
                      <p>Valid for all types of classes</p>
                    </div>
                    <div>
                      <p>$40</p>
                      <p>$10 per class</p>
                    </div>
                    <div>
                      <NavLink to={"/membership"}>Buy</NavLink>
                    </div>
                  </div>

                  <div className="subscription-data">
                    <div>
                      <p>4 lessons</p>
                      <p>Valid for all types of classes</p>
                    </div>
                    <div>
                      <p>$40</p>
                      <p>$10 per class</p>
                    </div>
                    <div>
                      <NavLink to={"/membership"}>Buy</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
