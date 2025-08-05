import about1 from "../../public/imagess/aboutvision.png";
import about2 from "../../public/imagess/aboutMision.png";
import about3 from "../../public/imagess/aboutImage.png";
import about4 from "../../public/imagess/aboutRelated1.png";
import about5 from "../../public/imagess/aboutRelated2.png";
import about6 from "../../public/imagess/aboutRelated3.png";
import about7 from "../../public/imagess/aboutRelated4.png";
import about8 from "../../public/imagess/aboutRelated5.png";
import about9 from "../../public/imagess/aboutRelated6.png";
import about10 from "../../public/imagess/aboutRelated7.png";

import { MdOutlineMessage } from "react-icons/md";

export const AboutUs = () => {
  return (
    <>
      <section>
        <div className="about-page">
          <div className="about-head">
            <div className="about-title">
              <h1>Unleash Your Potential - Train with the Best</h1>
            </div>
          </div>

          <div className="about-data container">
            <div className="about-story">
              <div className="story-title">
                <h2>Our Story</h2>
              </div>
              <div className="story-para">
                <p>“We Don't Just Train Bodies — We Fuel Ambition.”</p>
                <p>
                  At Avido Fitness, we believe that fitness isn't just about
                  lifting weights or breaking a sweat — it's about building a
                  lifestyle that empowers you inside and out. Every rep, every
                  drop of sweat, every moment of challenge brings you closer to
                  the strongest version of yourself — not just physically, but
                  mentally and emotionally.
                </p>
                <p>
                  Our journey began with a simple mission: make fitness
                  accessible, motivating, and deeply personal for everyone.
                  Whether you're stepping into a gym for the first time or
                  you're an experienced athlete aiming to level up, our expert
                  team is here to guide, challenge, and uplift you at every
                  stage.
                </p>
                <p>
                  Avido was built by athletes, trainers, and wellness leaders
                  who know the power of transformation. We've been where you are
                  — uncertain, driven, ready for change — and we created this
                  space to be the launchpad for your evolution. It's more than a
                  gym. It's a place where goals are realized, self-doubt is
                  conquered, and limits are shattered.
                </p>
                <p>
                  Inside our walls, you'll find more than equipment — you'll
                  find a community that lifts you up, motivates you daily, and
                  celebrates every victory with you. From world-class trainers
                  to customized programs, we personalize your fitness journey to
                  suit your goals, your pace, your life.
                </p>
                <p>
                  Whether you're here to lose weight, gain muscle, boost your
                  confidence, or just feel better day to day, you'll find
                  everything you need at Avido — state-of-the-art facilities,
                  dedicated professionals, and a culture of relentless support.
                  We've helped thousands reclaim their health, rediscover their
                  strength, and redefine what's possible.
                </p>
                <p>
                  Now it's your turn. Because at Avido, fitness isn't the end
                  goal — it's the beginning of everything.
                </p>
              </div>
            </div>

            <div className="about-fitness-data">
              <div className="fitnesss-detils fitnesss-vission">
                <div className="fitness-text">
                  <h1>Vision</h1>
                  <p>
                    At Avido Fitness, our vision is to redefine what fitness
                    means for every individual — creating a world where health,
                    confidence, and strength are accessible to all. We strive to
                    empower people of all backgrounds and fitness levels to live
                    healthier, more fulfilling lives — not just through physical
                    transformation, but by nurturing a strong, motivated, and
                    resilient mindset.
                  </p>
                  <p>
                    We envision a global fitness community where every
                    individual feels seen, supported, and unstoppable.
                  </p>
                </div>
                <div className="fitness-img">
                  <img src={about1} alt="avido fitness" />
                </div>
              </div>

              <div className="fitnesss-mission fitnesss-detils">
                <div className="fitness-img">
                  <img src={about2} alt="avido fitness" />
                </div>
                <div className="fitness-text">
                  <h1>Mission</h1>
                  <p>
                    To inspire and equip individuals to become the strongest
                    version of themselves:- physically, mentally, and
                    emotionally. We do this by:
                  </p>
                  <ul>
                    <li>
                      Offering personalized, science-based fitness programs
                      guided by elite trainers
                    </li>
                    <li>
                      Fostering a safe, inclusive, and motivating environment
                    </li>
                    <li>
                      Building a tight-knit community where support and
                      accountability thrive
                    </li>
                    <li>
                      Promoting holistic wellness through training, nutrition,
                      and mindset coaching
                    </li>
                    <li>
                      Helping members unlock their full potential and fuel their
                      ambition every step of the way
                    </li>
                  </ul>
                  <p>
                    At Avido , we don't just train bodies — we transform lives.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-rating">
              <div className="rating-img">
                <img src={about3} alt="avido fitness" />
              </div>
              <div className="rating-info">
                <div className="info">
                  <h1>
                    10<span style={{ color: "red" }}>+</span>{" "}
                  </h1>
                  <p>Trainers</p>
                </div>
                <div className="info info-member">
                  <h1>
                    200<span style={{ color: "red" }}>+</span>{" "}
                  </h1>
                  <p>members</p>
                </div>
                <div className="info">
                  <h1>
                    8<span style={{ color: "red" }}>+</span>{" "}
                  </h1>
                  <p>years</p>
                </div>
              </div>
            </div>

            <div className="about-images">
              <div className="image-part-1 images">
                <img src={about4} alt="avido fitness" />
                <img src={about5} alt="avido fitness" />
                <img src={about6} alt="avido fitness" />
              </div>
              <div className="image-part-2 images">
                <img src={about7} alt="avido fitness" />
                <img src={about8} alt="avido fitness" />
                <img src={about9} alt="avido fitness" />
                <img src={about10} alt="avido fitness" />
              </div>
            </div>

            <div className="about-lorem">
              <div className="lorem-title">
                <h1>LOrem Ipusm Has Been Text II</h1>
              </div>
              <div className="lorem-parts grid-2 grid-1">
                <div className="part-1 parts">
                  <h2>
                    Lorem Ipsum H
                    <span className="msg-icon">
                      <MdOutlineMessage />
                    </span>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <h3>
                    <h6 className="circle"></h6> Lorem Ha
                  </h3>
                </div>

                <div className="part-2 parts">
                  <h2>
                    Lorem Ipsum H
                    <span className="msg-icon">
                      <MdOutlineMessage />
                    </span>
                  </h2>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <h3>
                    <h6 className="circle"></h6> Lorem Ha
                  </h3>
                </div>

                <div className="part-3 parts">
                  <h2>
                    Lorem Ipsum H
                    <span className="msg-icon">
                      <MdOutlineMessage />
                    </span>
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <h3>
                    <h6 className="circle"></h6> Lorem Ha
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
