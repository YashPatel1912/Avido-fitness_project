import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <section className="">
        <footer>
          <div className="footer">
            <div className="footer-head">
              <div className="footer-1">
                <div className="footer-title">
                  <h1>Stay in the loop with our newsletter!</h1>
                </div>
                <div className="footer-email">
                  <h3>Stay in the loop with our newsletter!</h3>
                  <input type="email" placeholder="Email Address" />
                  <p>
                    Subscribe to our newsletter and unlock a world of exclusive
                    benefits. Be the first to know about our latest products,
                    special promotions, and exciting updates. Join our community
                    of like-minded individuals who share a passion for Flexi
                    Fitness and Gym
                  </p>
                </div>
              </div>

              <div className="footer-2">
                <div className="part-1 links">
                  <h1>Product</h1>
                  <div className="footer-data">
                    <ul>
                      <NavLink>Employee database</NavLink>
                      <NavLink>Payroll</NavLink>
                      <NavLink>Absences</NavLink>
                      <NavLink>Time tracking</NavLink>
                      <NavLink>Shift planner</NavLink>
                      <NavLink>Recruiting</NavLink>
                    </ul>
                  </div>
                </div>

                <div className="part-2 links ">
                  <h1>Information</h1>
                  <div className="footer-data">
                    <ul>
                      <NavLink>FAQ</NavLink>
                      <NavLink>Blog</NavLink>
                      <NavLink>Support</NavLink>
                    </ul>
                  </div>
                </div>

                <div className="part-3 links">
                  <h1>Company</h1>
                  <div className="footer-data">
                    <ul>
                      <NavLink>About us</NavLink>
                      <NavLink>Careers</NavLink>
                      <NavLink>Contact us</NavLink>
                      <NavLink>Lift Media</NavLink>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="bottom-1">
                <p>© 2045 All rights reserved By Enative</p>
              </div>
              <div className="bottom-2">
                <div className="securety-part">
                  <ul>
                    <NavLink>Terms</NavLink>
                    <NavLink>Privacy</NavLink>
                    <NavLink>Cookies</NavLink>
                  </ul>
                </div>
              </div>
              <div className="bottom-3">
                <div className="app-icon">
                  <NavLink>
                    <FaInstagram />
                  </NavLink>
                  <NavLink>
                    <FaFacebook />
                  </NavLink>
                  <NavLink>
                    <FaTwitter />
                  </NavLink>
                  <NavLink>
                    <FaYoutube />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
