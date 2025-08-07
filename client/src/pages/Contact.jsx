import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

export const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact/`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          message: contactData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          toast.error("Server error:", data);
        }
      } else {
        toast.success(data.message);
      }
    } catch (err) {
      toast.error(err);
    }

    setContactData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section>
        <div className="contact-page">
          <div className="contact-title">
            <h1>Contact Us</h1>
          </div>

          <div className="container">
            <div className="contact-more-details">
              <div className="more-boxes">
                <div className="location ">
                  <div className="part-1">
                    <span>
                      <FaLocationDot />
                    </span>
                  </div>
                  <div className="part-2">
                    <h3>Location</h3>
                    <p>Mehsana, Gujarat - 384002, India</p>
                  </div>
                </div>
              </div>

              <div className="line"></div>

              <div className="more-boxes">
                <div className="location ">
                  <div className="part-1">
                    <span>
                      <IoCall />
                    </span>
                  </div>
                  <div>
                    <h3>call</h3>
                    <p>+91 12345678910</p>
                  </div>
                </div>
              </div>

              <div className="line"></div>

              <div className="more-boxes">
                <div className="location ">
                  <div className="part-1">
                    <span>
                      <MdEmail />
                    </span>
                  </div>
                  <div>
                    <h3>Gmail</h3>
                    <p> yash01912@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-data">
              <div className="data-title">
                <h3>Let's Contact US</h3>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="more-data">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      name="name"
                      value={contactData.name}
                      onChange={(e) => handleChangeData(e)}
                    />
                    {errors.name && (
                      <span style={{ color: "red" }}>{errors.name}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      value={contactData.email}
                      onChange={(e) => handleChangeData(e)}
                    />
                    {errors.email && (
                      <span style={{ color: "red" }}>{errors.email}</span>
                    )}
                  </div>
                  <div>
                    <textarea
                      placeholder="Description"
                      name="message"
                      id="message"
                      rows="10"
                      value={contactData.message}
                      onChange={(e) => handleChangeData(e)}></textarea>
                    {errors.message && (
                      <span style={{ color: "red" }}>{errors.message}</span>
                    )}
                  </div>

                  <div>
                    <button className="submit-btn">submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
