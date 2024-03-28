import React from "react";
import Grid from "../../Grid";
import "./sevicepage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

export const fadeIn = (direction) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};
export const opacity = () => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };
};
export const fadeHorizontal = (direction) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};

export const reveal = () => {
  return {
    hidden: {
      left: 0,
    },
    visible: { left: "100%" },
  };
};

export const scale = () => {
  return {
    hidden: {
      scale: 1.5,
      opacity: 0.2,
    },
    visible: { scale: 1.2, opacity: 0.8 },
  };
};

export const transition = () => {
  return {
    duration: 0.75,
    delay: 0.3,
    ease: "easeIn",
  };
};
export const transition2 = () => {
  return {
    duration: 1.5,
    delay: 0.3,
    ease: "easeIn",
  };
};
const ServicePage = () => {
  return (
    <div className="servicePage_div">
      <section className="NeewHomeSection1">
        <div className="NeewHomeSection1_area">
          <div className="NeewHomeSection1_area_cont1">
            <div className="NeewHomeSection1_area_cont1_title">
              Sound{" "}
              <span className="NeewHomeSection1_area_cont1_title_span">
                Engineering.
              </span>{" "}
            </div>
            <div className="NeewHomeSection1_area_cont1_para">
              Sound Engineering involves recording, manipulating, and producing
              audio to create desired effects or music, employing technical and
              creative skills.
            </div>
            <a href="/contact_us" className="NeewHomeSection1_area_cont1_link1">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  Contact Us{" "}
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </a>
          </div>
          <div className="NeewHomeSection1_area_cont2">
            <img
              src="/img/sound_setup.jpeg"
              alt=""
              className="servicePage_div_section1_area_2_img"
            />
          </div>
        </div>
        <Grid />
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        <div className="hero_line_div">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1358 754">
            <defs></defs>
            <path
              class="path"
              fill="none"
              pathLength="1"
              stroke="#0569FF"
              stroke-width="65"
              stroke-linejoin="bevel"
              d="m60.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56"
            ></path>
          </svg>
        </div>
      </section>
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      <section className="NeewHomeSection2b">
        <div className="NeewHomeSection2_area">
          <div className="NeewHomeSection2_area_2">
            <motion.div
              variants={opacity()}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="NeewHomeSection2_area_2_top_bg"
            >
              <img
                src="/img/3d_abstract_img.png"
                alt=""
                className="NeewHomeSection2_area_2_top_bg_img"
              />
              <div className="NeewHomeSection2_area_2_top_bg_txt_div">
                <div className="NeewHomeSection2_area_2_top_bg_txt_div_tag">
                  WHAT WE DO
                </div>
                <div className="NeewHomeSection2_area_2_top_bg_txt_div_title">
                  Simplifying IT
                  <br /> for a complex world.
                </div>
              </div>
            </motion.div>
            <div className="home_div_section3_area_body">
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Sound
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Sound Engineering
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Sound Engineering involves recording, manipulating, and
                    producing audio to create desired effects or music,
                    employing technical and creative skills.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </motion.div>

              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  I.T
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    I.T Development
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    I.T. Development involves creating, enhancing, and
                    maintaining software applications or systems to meet
                    specific needs using coding and technological expertise.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </motion.div>

              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Media
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Media Management
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Media Management involves organizing, distributing, and
                    optimizing content across various platforms to effectively
                    communicate messages and engage audiences, utilizing
                    strategic planning and analysis.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </motion.div>

              {/* ======== */}
              {/* ======== */}
              {/* ======== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Product
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Product Management
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Product Management entails overseeing the development,
                    launch, and improvement of a product, aligning customer
                    needs with business goals through strategic planning and
                    execution.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      <section className="NeewHomeSection5">
        <motion.div
          variants={fadeIn("Up")}
          transition={{ duration: 0.75, delay: 0.4, ease: "easeIn" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="NeewHomeSection5_cont"
        >
          <div className="NeewHomeSection5_cont_1">
            <div className="NeewHomeSection5_cont_1_title">
              Have a project in mind?
            </div>
            <div className="NeewHomeSection5_cont_1_para">
              Let's see through the invisible in you.
              <br />
              Book your consultation session.
            </div>
            <a href="/contact_us" className="NeewHomeSection5_cont_1_btn_div">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  Contact Us{" "}
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </a>
          </div>
          <div className="NeewHomeSection5_cont_2">
            {/* <div className="hero_line_div2"> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1358 754">
              <defs></defs>
              <path
                class="path"
                fill="none"
                pathLength="1"
                stroke="#64ed80"
                stroke-width="65"
                stroke-linejoin="bevel"
                d="m60.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56"
              ></path>
            </svg>
            {/* </div> */}
          </div>
          {/* <div className="hero_line_div2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1358 754">
              <defs></defs>
              <path
                class="path"
                fill="none"
                pathLength="1"
                stroke="#64ed80"
                stroke-width="65"
                stroke-linejoin="bevel"
                d="m60.21,195.98l785.74-113.71s-318.14,468.95-217.16,470.99,356.52-201.54,421.77-148.69c65.25,52.86-26.19,291.81-29.52,304.62,0,0,210.18-104.18,244.9-151.56"
              ></path>
            </svg>
          </div> */}
          <Grid />
        </motion.div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
    </div>
  );
};

export default ServicePage;
