import { FaAngleDoubleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import innerService1 from "../../public/imagess/inner-services1.png";
import innerService2 from "../../public/imagess/inner-services2.png";
import innerService3 from "../../public/imagess/service6.jpg";
import innerService4 from "../../public/imagess/relatedImg1.jpg";
import innerService5 from "../../public/imagess/relatedImg2.png";
import innerService6 from "../../public/imagess/relatedImg3.png";

export const Innerservices = () => {
  return (
    <>
      <section>
        <div className="inner-services-section">
          <div className="inner-services-banner">
            <div className="navigate">
              <NavLink to={"/service"}> services </NavLink>
              <span> / InnserServices</span>
            </div>

            <div className="banner-title">
              <h1>
                Smart Workouts, Real Results, Fitness Tailored Just for You!!
              </h1>
            </div>
          </div>
          <div className="container">
            <div className="inner-service-main">
              <div className="main-left-part">
                <div className="main-left-instuction">
                  <img src={innerService1} alt="avido fitness" />
                  <h2>Essential Equipment for Effective Individual Workouts</h2>
                  <p>
                    Engaging in individual workouts requires the right equipment
                    to ensure efficiency, safety, and effectiveness in achieving
                    fitness goals. Whether working out at home, in a gym, or
                    outdoors, having suitable tools can enhance strength,
                    endurance, flexibility, and overall physical health. Below
                    is a detailed breakdown of essential workout equipment
                    categorized based on different fitness needs, including
                    their benefits, uses, and key features.
                  </p>
                  <ul>
                    <li>Strength Training Equipment</li>
                    <li>Cardiovascular Fitness Equipment</li>
                    <li>Flexibility & Recovery Equipment</li>
                    <li>Smart Fitness Technology & Accessories</li>
                    <li>Functional & High-Intensity Training Equipment</li>
                  </ul>
                  <p>
                    Having the right workout equipment plays a significant role
                    in maintaining a consistent and effective fitness routine.
                    Whether aiming for strength building, cardiovascular
                    endurance, flexibility, or overall well-being, selecting
                    appropriate tools ensures progress and keeps workouts
                    engaging. Investing in quality fitness equipment tailored to
                    individual goals will enhance performance and contribute to
                    long-term health benefits.
                  </p>
                </div>
                <div className="sub-left-instuction">
                  <div className="sub-images">
                    <img src={innerService3} alt="avido fitness" />
                    <img src={innerService2} alt="avido fitness" />
                  </div>
                  <div className="sub-para">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </p>
                  </div>
                </div>
                <div className="other-left-instruction  ">
                  <div className="other-images-parts">
                    <div>
                      <img src={innerService4} alt="avido fitness" />
                    </div>
                    <div className="image-title">
                      <h2>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                      </h2>
                    </div>
                    <div className="image-para">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div className="other-images-parts">
                    <div className="image">
                      <img src={innerService5} alt="avido fitness" />
                    </div>
                    <div className="image-title">
                      <h2>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                      </h2>
                    </div>
                    <div className="image-para">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                  <div className="other-images-parts">
                    <div>
                      <img src={innerService6} alt="avido fitness" />
                    </div>
                    <div className="image-title">
                      <h2>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                      </h2>
                    </div>
                    <div className="image-para">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-right-part">
                <div className="right-title">
                  <h1>Special Services</h1>
                </div>
                <div className="main-right-instruction">
                  <div className="main-right-details">
                    <div className="details-title">
                      <h2>Yoga & Mindfulness Classes</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          Enhance your flexibility, strength, and inner peace
                          through guided yoga and meditation sessions. Perfect
                          for stress relief, balance, and overall wellness.
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>

                  <div className="main-right-details">
                    <div className="details-title">
                      <h2>HIIT & Bootcamp Programs</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          High-Intensity Interval Training and bootcamp workouts
                          designed to push your limits and torch calories. Ideal
                          for those looking to build endurance and lose fat
                          fast.
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>

                  <div className="main-right-details">
                    <div className="details-title">
                      <h2>Strength & Conditioning</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          Build lean muscle, improve performance, and boost
                          metabolism with structured weightlifting and strength
                          programs, suitable for all experience levels.
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>

                  <div className="main-right-details">
                    <div className="details-title">
                      <h2>Body Composition Analysis</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          Track your progress with in-depth body assessments,
                          including fat percentage, muscle mass, and metabolic
                          rate. Get a clear picture of your transformation
                          journey.
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>

                  <div className="main-right-details">
                    <div className="details-title">
                      <h2> Nutritional Coaching</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          Fuel your body right with customized meal plans and
                          nutrition advice from certified experts. Learn how to
                          eat for energy, recovery, and long-term health.
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>

                  <div className="main-right-details">
                    <div className="details-title">
                      <h2>Transformation Challenges</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          Join our 4, 6, or 12-week fitness challenges designed
                          to kickstart your journey and keep you motivated.
                          Includes group support, progress tracking, and prizes!
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>

                  <div className="main-right-details">
                    <div className="details-title">
                      <h2>Prenatal & Postnatal Fitness</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          Specially designed workouts to support moms before and
                          after pregnancy, focusing on mobility, strength, and
                          core recovery.
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>

                  <div className="main-right-details">
                    <div className="details-title">
                      <h2>Yoga & Mindfulness Classes</h2>
                    </div>
                    <div className="detils-data">
                      <div className="data-para">
                        <p>
                          Enhance your flexibility, strength, and inner peace
                          through guided yoga and meditation sessions. Perfect
                          for stress relief, balance, and overall wellness.
                        </p>
                      </div>
                      <div className="data-img">
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className="details-link">
                      {/* <NavLink className="react-icon">
                        Learn More <FaAngleDoubleRight />
                      </NavLink> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
