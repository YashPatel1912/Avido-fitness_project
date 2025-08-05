import { NavLink, useNavigate } from "react-router-dom";
import HeroImage from "../../public/imagess/hero-section-img.avif";
import HomeGallary1 from "../../public/imagess/home-about-1.png";
import HomeGallary2 from "../../public/imagess/home-about-2.png";
import HomeGallary3 from "../../public/imagess/home-about-3.png";
import HomeService2 from "../../public/imagess/service6.jpg";
import HomeService1 from "../../public/imagess/service1.png";
import HomeService3 from "../../public/imagess/service3.png";
import HomeWhyUS1 from "../../public/imagess/us1.png";
import HomeWhyUS2 from "../../public/imagess/us2.png";
// import blog1 from "../../public/imagess/blog1.png";
// import blog2 from "../../public/imagess/blog2.png";
// import blog3 from "../../public/imagess/blog3.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PriceDataLayout } from "../components/layout/PriceDataLayout";
import "../app.css"

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <section className="">
          <div className="homepage">
            <div className="hero-section">
              <div className="hero-image">
                <img src={HeroImage} alt="" srcset="" />
              </div>
              <div className="hero-text">
                <h1>ACHIEVE PEAK PERFORMANCE WITH EXPERT TRAINING</h1>
                <p>
                  Tailored workouts, nutritional guidance, and motivational
                  support – everything you need to excel in your fitness goals.
                  Join ou gym today and transform your body and mind with our
                  professional trainers. Tailored workouts, nutritional
                  guidance, and motivational support – everything you need to
                  excel in your fitness goals. Join our gym today and transform
                  your body and mind
                </p>
                <div className="hero-button">
                  <button className="discover-btn">Dicover More</button>
                  <button className="gallary-btn">Gallery</button>
                </div>
              </div>
            </div>

            <div className="home-about-section container">
              <div className="home-about-title">
                <h3>
                  "More than a gym — we’re your second home for fitness, growth,
                  and community."
                </h3>
              </div>
              <div className="home-about-description">
                <p>
                  At Avido Fitness, we believe that fitness isn’t just about
                  lifting weights or breaking a sweat — it’s about building a
                  lifestyle you’re proud of. <br /> Our journey began with a
                  simple idea: make fitness accessible, motivating, and deeply
                  personal for everyone. Whether you're just starting out or
                  looking to push past your limits, Our team is here to guide,
                  challenge, and inspire you every step of the way. <br />{" "}
                  Founded by athletes, trainers, and wellness experts who were
                  once in your shoes, Avido Fitness was created as a safe,
                  empowering space where real transformations happen — not just
                  in body, but in mindset and spirit.... <span></span>
                  <span>
                    <NavLink
                      to={"/about"}
                      style={{ color: "red" }}
                      className=" react-icon about-learnData">
                      Learn more
                      <FaLongArrowAltRight />
                    </NavLink>
                  </span>
                </p>
              </div>
            </div>

            <div className="home-galary-section container">
              <div className="home-galary-title">
                <h1>OUR PORTFOLIO</h1>
              </div>

              <div className="home-gallary">
                <div className="home-galary-image ">
                  <img src={HomeGallary1} alt="" srcset="" />

                  <img src={HomeGallary2} alt="" srcset="" />

                  <img src={HomeGallary3} alt="" srcset="" />
                </div>
              </div>
            </div>

            <div className="home-service-section container ">
              <div className="home-service-title ">
                <h1>
                  TRANSFORM LIFE <br />
                  WITH OUR ELITE FITNESS{" "}
                </h1>
              </div>
              <div className="home-service-description">
                <p>
                  Discover a new you with our state-of-the-art fitness
                  facilities and personalil training plans Join us to achieve
                  your health goals, from weight loss to muscle gain, with the
                  guidance of experienced trainers Discover a new you with our
                  state-of-the-art fitness
                </p>
                {/* <button>Learn More</button> */}
              </div>
            </div>

            <div className="home-service-images container">
              <div className="image-part-1">
                <img src={HomeService1} alt="avidoFitness image" srcset="" />
              </div>
              <div className="image-part-2">
                <div className="service-btn">
                  <button onClick={() => navigate("/service")}>More</button>
                </div>
                <div className="service-img">
                  <img src={HomeService2} alt="avidoFitness image" srcset="" />
                  <img src={HomeService3} alt="avidoFitness image" srcset="" />
                </div>
              </div>
            </div>

            <div className="home-why-us container">
              <h1>SHAPE YOUR FUTURE COMPREHENSIVE WHETHER FITNESS PLAN </h1>
              <div className="home-why-us-data grid-3 grid-2 grid-1">
                <div className="home-why-us-data-1 ">
                  <div className="home-why-us-data-item">
                    <h2>Fitness technology and high-quality</h2>
                    <p>
                      Our gym is equipped with the latest fitness techn
                      high-quality equipment to ensure you have everything you
                      need effective workout. From cardio machines to free
                      weights
                    </p>
                    <NavLink to={"/whyUs"} className="react-icon">
                      Learn More <FaLongArrowAltRight />{" "}
                    </NavLink>
                  </div>
                  <div className="home-why-us-data-item">
                    <h2>Our certified personal trainers</h2>
                    <p>
                      Our certified personal trainers are here to guide you ever
                      step of the way. With years of experience and specializ
                      knowledge, they create personalized fitness plans tailored
                    </p>
                    <NavLink to={"/whyUs"} className="react-icon">
                      Lean More <FaLongArrowAltRight />{" "}
                    </NavLink>
                  </div>
                  <div className="home-why-us-data-item">
                    <h2>Selection of group fitness classes</h2>
                    <p>
                      We offer an extensive selection of group fitness clas
                      including yoga, pilates, HIIT, spinning, and more. Our
                      diverse c schedule ensures there's something for everyone
                    </p>
                    <NavLink to={"/whyUs"} className="react-icon">
                      Lean More
                      <FaLongArrowAltRight />
                    </NavLink>
                  </div>
                </div>
                <div className="part-2">
                  <div className="home-why-us-data-2">
                    <img src={HomeWhyUS1} alt="" />
                  </div>
                  <div className="home-why-us-data-3">
                    <img src={HomeWhyUS2} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="membership-section container">
              <PriceDataLayout />
            </div>

            {/* <div className="home-blogs-section">
              <div className="blog-tilte">
                <h1>Training Blogs</h1>
              </div>
              <div className="blog-data grid-3 grid-2 grid-1">
                <div className="blog-1 blogs">
                  <img src={blog1} alt="avido fitness" />
                  <h2>Training Secrets of Olympians to Help You Stay Fit</h2>
                  <p>
                    These training secrets of Olympians will help you stay fit,
                    from training quality over quantity and effective recovery
                    strategies to the importance of coaching. Use these tips to
                    become the best and most fit version of yourself.
                  </p>
                  <NavLink to={"/"}>Learn More »</NavLink>
                </div>

                <div className="blog-2 blogs">
                  <img src={blog2} alt="avido fitness" />
                  <h2>
                    A Woman’s Guide to Gaining Muscle with Weight Training
                  </h2>
                  <p>
                    This woman’s guide to gaining muscle begins by explaining
                    key principles and concludes with a sample muscle-building
                    workout. Look no further for everything you need to know
                    about how women can gain muscle.
                  </p>
                  <NavLink to={"/"}>Learn More »</NavLink>
                </div>

                <div className="blog-2 blogs">
                  <img src={blog3} alt="avido fitness" />
                  <h2>
                    Sticking to an Exercise Program: 25 Tips to Achieve Exercise
                    Success
                  </h2>
                  <p>
                    Sticking to an exercise routine is challenging for just
                    about everyone. The 25 tips and strategies provided are
                    proven effective in improving exercise adherence and
                    building long-term exercise habits.
                  </p>
                  <NavLink to={"/"}>Learn More »</NavLink>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </>
  );
};
