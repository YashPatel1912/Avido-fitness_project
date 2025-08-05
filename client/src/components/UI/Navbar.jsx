import { NavLink } from "react-router-dom";
import "../../App.css";
import FitnessLogo from "/public/imagess/fitness-logo.png";
import { useState } from "react";
import { FaUserCircle, FaSortDown, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../../store/token";

export const Navbar = () => {
  const { isLoggedIn, user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <section className="fitness-navbar navbar">
        <div className="fitness-logo">
          <li className="logo">
            <NavLink to={"/"}>
              <img
                src={FitnessLogo}
                alt="fitness-logo"
                height={60}
                width={200}
              />
            </NavLink>
          </li>
        </div>

        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={`fitness-page ${menuOpen ? "show" : ""}`}>
          <nav>
            <ul className="flex">
              <li>
                <NavLink
                  to={"/"}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}>
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/service"}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}>
                  service
                </NavLink>
              </li>
              <li onClick={toggleDropdown} className="dropdown">
                <NavLink to={"#"}>
                  Pages <FaSortDown />
                </NavLink>
                {isOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={"/whyUs"}
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}>
                        WhyUs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/price"}
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}>
                        price
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink
                        to={"/faq"}
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}>
                        faq
                      </NavLink>
                    </li> */}
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}>
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div>
            <ul>
              {isLoggedIn ? (
                <li className="navbar-profile">
                  <NavLink to={"/profile"} onClick={() => setMenuOpen(false)}>
                    {user.userName ? (
                      user?.userName
                    ) : (
                      <p style={{ color: "white" }}>Profile</p>
                    )}
                    <div
                      className="profile"
                      style={{
                        backgroundColor: user.userName ? "red" : "black",
                      }}>
                      {user.userName ? (
                        user?.userName?.charAt(0).toUpperCase()
                      ) : (
                        <FaUserCircle
                          style={{
                            width: "2.5rem",
                            height: "auto",
                          }}
                        />
                      )}
                    </div>
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};
