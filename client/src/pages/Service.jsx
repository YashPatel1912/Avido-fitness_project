import { AiOutlineCheck } from "react-icons/ai";
import service1 from "../../public/imagess/service1.png";
import service2 from "../../public/imagess/service2.png";
import service3 from "../../public/imagess/service3.png";
import service4 from "../../public/imagess/service4.png";
import service5 from "../../public/imagess/service5.png";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Service = () => {
  return (
    <>
      <section>
        <div className="service-section">
          <div className="service-header">
            <div className="header-data">
              <div className="header-title">
                <h1>
                  Train Smarter, Get Stronger Personalized Fitness Solutions!
                </h1>
                <div className="header-training">
                  <li>
                    <span>
                      <AiOutlineCheck className="correct-icon" />
                    </span>
                    FUNCTIONAL TRAINING
                  </li>
                  <li>
                    <span>
                      <AiOutlineCheck className="correct-icon" />
                    </span>
                    GROUP CYCLING
                  </li>
                  <li>
                    <span>
                      <AiOutlineCheck className="correct-icon" />
                    </span>
                    PERSONAL TRAINING
                  </li>
                  <li>
                    <span>
                      <AiOutlineCheck className="correct-icon" />
                    </span>
                    STRENGTH TRAINING
                  </li>
                  <li>
                    <span>
                      <AiOutlineCheck className="correct-icon" />
                    </span>
                    CARDIO / HIIT TRAINING
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="service-main">
              <div className="main-title">
                <h1>TRANSFORM LIFE WITH OUR ELITE FITNESS </h1>
                <p>
                  Unlock your full potential with expert training,
                  science-backed programs, and a results-driven approach. Our
                  elite fitness system is designed to build strength, endurance,
                  and confidence—helping you achieve a healthier, stronger, and
                  more resilient version of yourself. Join us today and start
                  your transformation!
                </p>
              </div>
              <div className="main-services">
                <div className="main-data part-1">
                  <div className="main-img">
                    <img src={service1} alt="avido fitness" />
                  </div>
                  <div className="main-details">
                    <div className="main-head">
                      <h1>Personal Training</h1>
                    </div>
                    <div className="main-para">
                      <p>
                        The scope of practice for a personal trainer has a
                        primary focus on prevention and involves enhancing
                        components of health and fitness for the general,
                        healthy population or those cleared for exercise.
                      </p>
                      <p>
                        Proper exercise prescription may result in improved body
                        composition, physical performance, heart condition, and
                        health outcomes. The decision to hire a personal trainer
                        may be related to a perceived health threat, a lack of
                        knowledge, a personal belief in one's ability to begin
                        and adhere to an exercise program, or some sort of
                        psychological effect. Often clients will seek the
                        guidance of a personal trainer for factors related to
                        motivation and adherence. A personal trainer pays close
                        attention to the client's exercise technique, workout
                        routine, goals, values, and nutrition. Personal training
                        in men and women has been shown to improve the
                        benefit-to-concern ratio for exercise (decisional
                        balance), and increase confidence to choose exercise in
                        the face of other time demands (scheduling
                        self-efficacy). Personal training results in higher
                        strength, higher workout intensities, and higher
                        perceived exertion during exercise.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="main-data part-2">
                  <div className="main-img">
                    <img src={service2} alt="avido fitness" />
                  </div>
                  <div className="main-details">
                    <div className="main-head">
                      <h1>Strength Training</h1>
                    </div>
                    <div className="main-para">
                      <p>
                        Strength training, also known as weight training or
                        resistance training, is exercise designed to improve
                        physical strength. It is often associated with the
                        lifting of weights. It can also incorporate techniques
                        such as bodyweight exercises (e.g., push-ups, pull-ups,
                        and squats), isometrics (holding a position under
                        tension, like planks), and plyometrics (explosive
                        movements like jump squats and box jumps).
                      </p>
                      <p>
                        Training works by progressively increasing the force
                        output of the muscles and uses a variety of exercises
                        and types of equipment. Strength training is primarily
                        an anaerobic activity, although circuit training also is
                        a form of aerobic exercise.
                      </p>
                      <p>
                        Strength training can increase muscle, tendon, and
                        ligament strength as well as bone density, metabolism,
                        and the lactate threshold; improve joint and cardiac
                        function; and reduce the risk of injury in athletes and
                        the elderly. For many sports and physical activities,
                        strength training is central or is used as part of their
                        training regimen. This article will cover many topics
                        including principles and training methods, comparisons
                        of different exercises, nutrition, history, and safety
                        concerns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="main-data part-3">
                  <div className="main-img">
                    <img src={service3} alt="avido fitness" />
                  </div>
                  <div className="main-details">
                    <div className="main-head">
                      <h1>Functional Training</h1>
                    </div>
                    <div className="main-para">
                      <p>
                        Functional Strength Training is a fitness approach
                        designed to enhance the body's ability to perform
                        everyday movements with ease and efficiency. Unlike
                        traditional strength training that isolates specific
                        muscle groups, functional training focuses on exercises
                        that mimic real-life activities, such as lifting,
                        squatting, and climbing. By engaging multiple muscles
                        and joints simultaneously, functional strength training
                        aims to improve overall body coordination, stability,
                        and strength. Core exercises like squats, lunges,
                        push-ups, and planks are commonly used, as well as tools
                        like kettlebells, resistance bands, and medicine balls.
                      </p>
                      <p>
                        Functional strength training is highly beneficial for
                        improving daily life performance, reducing the risk of
                        injury, and increasing flexibility and balance. It also
                        provides a time-efficient workout by targeting multiple
                        muscle groups at once, making it ideal for individuals
                        seeking practical fitness solutions. This form of
                        training is accessible to all fitness levels, from
                        beginners to athletes, and can be adapted with
                        bodyweight or added resistance, offering a comprehensive
                        way to enhance functional fitness and overall health.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="main-data part-4">
                  <div className="main-img">
                    <img src={service4} alt="avido fitness" />
                  </div>
                  <div className="main-details">
                    <div className="main-head">
                      <h1>CARDIO / HIIT TRAINING</h1>
                    </div>
                    <div className="main-para">
                      <p>
                        Some form of cardiovascular (cardio) or aerobic exercise
                        is necessary to condition your heart and lungs and
                        build-up stamina for long days on the route. If you
                        already enjoy swimming, cycling, running, or rowing,
                        then increasing your time or intensity in these
                        activities will be worthwhile training. Nevertheless,
                        the most appropriate cardio preparation is to head
                        outdoors on your bike as often as possible,
                        progressively extending the time and distance. It is
                        important to vary your training rides as the terrain on
                        your trip can also change, especially on adventures with
                        high Activity Level gradings, so incorporate interval
                        training (see Fitness Plans) and include some hills in
                        your routes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="main-data part-5">
                  <div className="main-img">
                    <img src={service5} alt="avido fitness" />
                  </div>
                  <div className="main-details">
                    <div className="main-head">
                      <h1>GROUP CYCLING</h1>
                    </div>
                    <div className="main-para">
                      <p>
                        Strength exercises will help to prepare the main muscles
                        used during cycling. On a bike, your core, legs and
                        glutes (buttock muscles) work the hardest but with just
                        a few, simple bodyweight exercises you can condition
                        these muscle groups so they help you to maintain a
                        better riding position, thereby keeping you comfortable
                        on the ride for longer. Each Fitness Plan's strength
                        exercises progress in difficulty, but if you find that
                        your training plan's strength exercises are too
                        challenging, try the options to make them easier
                        (alternatively, try the progressions to make them
                        harder) or simply follow the exercises on an easier
                        plan. Slow and steady. Try to keep exercise movements
                        controlled and steady, aiming to complete the
                        recommended number of repetitions followed by a one to
                        two-minute rest before moving onto the next set of
                        repetitions of the same or different exercise. For all
                        exercises, please take care not to flex the spine or
                        round the shoulders. Maintain a good posture by focusing
                        on the horizon, keeping shoulders back and chin and
                        chest proud. Many of the exercises specifically work on
                        strengthening core muscles; however, hold your core
                        strong to help maintain your posture during other
                        exercises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-services">
              <div className="services-title">
                <h1>UNLEASH YOUR POTENTIAL OUR ADVANCED GYM CENTER</h1>
                <p>
                  Tailored workouts, nutritional guidance, and motivational
                  support - everything you need to excel in your fitness goals.
                  Join ou gym today and transform your body and mind with our
                  professional trainers.
                </p>
              </div>

              <div className="services-parts">
                <div className="parts">
                  <div className="squre-service-design"></div>
                  <h2>Group exercise classes</h2>
                  <p>
                    Experience a fitness journey like no other at o gym. With
                    cutting-edge equipment, diverse classes, and a supportive
                    community, we help you push yi limits and reach new heights
                    in your fijourney.Experience a fitness journey like no other
                    at our gym
                  </p>
                  <ul>
                    <li>Cardiovascular Training</li>
                    <li>Flexibility and Balance</li>
                    <li>Mind-Body Practices</li>
                    <li>Strength Training</li>
                  </ul>
                  <NavLink to={"/innerServices"} className="react-icon">
                    Learn more <FaLongArrowAltRight />
                  </NavLink>
                </div>

                <div className="parts">
                  <div className="squre-service-design"></div>
                  <h2>Personal fitness gear</h2>
                  <p>
                    Experience a fitness journey like no other at o gym. With
                    cutting-edge equipment, diverse classes, and a supportive
                    community, we help you push yi limits and reach new heights
                    in your fijourney.Experience a fitness journey like no other
                    at our gym
                  </p>
                  <ul>
                    <li>Personal Training</li>
                    <li>Weight Management Programs</li>
                    <li>High-Intensity Interval Training (HIIT)</li>
                    <li>Fitness Challenges and Events</li>
                  </ul>
                  <NavLink to={"/innerServices"} className="react-icon">
                    Learn more <FaLongArrowAltRight />
                  </NavLink>
                </div>

                <div className="parts">
                  <div className="squre-service-design"></div>
                  <h2>Wellness Program</h2>
                  <p>
                    Experience a fitness journey like no other at o gym. With
                    cutting-edge equipment, diverse classes, and a supportive
                    community, we help you push yi limits and reach new heights
                    in your fijourney.Experience a fitness journey like no other
                    at our gym
                  </p>
                  <ul>
                    <li>Physical Activity</li>
                    <li>Fitness Boot Camps</li>
                    <li>Health Education</li>
                    <li>Body Composition</li>
                  </ul>
                  <NavLink to={"/innerServices"} className="react-icon">
                    Learn more <FaLongArrowAltRight />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
