import React, { useLayoutEffect, useRef } from "react";
import "./home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "./Grid";
import Spline from "@splinetool/react-spline";
import Grid2 from "./Grid2";
import Marquee from "react-fast-marquee";

const Home = () => {
  const partners = [
    { id: "1", name: "Service Experts" },
    { id: "2", name: "Vital Skills Development Academy" },
    { id: "3", name: "Transformation Hour" },
    { id: "4", name: "Heaven World Church" },
    { id: "5", name: "Torqtech Offshore" },
    { id: "6", name: "Mayfair Brooks" },
    { id: "7", name: "Stereoma Limited" },
    { id: "8", name: "Onequity," },
    { id: "9", name: "Mega Sound Enterprise" },
    { id: "10", name: "ISCHUS Tech" },
    { id: "11", name: "Pleroma Network" },
    { id: "12", name: "Basa Capital" },
    { id: "13", name: "Pearldrift," },
    { id: "14", name: "Orion Management" },
  ];
  const skills = [
    { id: "1", name: "HTML" },
    { id: "2", name: "CSS" },
    { id: "3", name: "Javascript" },
    { id: "4", name: "React" },
    { id: "5", name: "Git & Github" },
    { id: "6", name: "API Integraation" },
    { id: "7", name: "Tailwind.css" },
    { id: "8", name: "Webpack" },
    { id: "9", name: "Node.js" },
    { id: "10", name: "C++ " },
    { id: "11", name: "VueJs 2.X" },
    { id: "12", name: "Strongly OOP PHP Script" },
  ];
  return (
    <div className="Home_div">
      {/* <section className="Home_div_section1">
        <div className="Home_div_section1_area">
          <div className="Home_div_section1_area_1">
            <div className="Home_div_section1_area_1_heading">
              Designing Experiences.
            </div>
            <div className="Home_div_section1_area_1_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam, quis nostrud.
            </div>
            <div className="Home_div_section1_area_1_btn_div">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  Contact Us{" "}
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </div>
          </div>
          <div className="Home_div_section1_area_2">
            <img
              src="/img/hero_imgs_bg.png"
              alt=""
              className="Home_div_section1_area_2_img"
            />
          </div>
        </div>

        <Spline
          scene="https://prod.spline.design/D3TSE1VYF8dPYV54/scene.splinecode"
          className="home_div_section1_area_2_spline_scene"
        />
        <Grid />
        <img
          src="/img/dummy_png_hero.png"
          alt=""
          className="Home_div_section1_area_2_img_bg"
        />
        <img
          src="/img/dummy_png_hero2.png"
          alt=""
          className="Home_div_section1_area_2_img_bg2"
        />
      </section> */}
      <section className="section1_new">
        <div className="section1_new_area">
          <div className="section1_new_area_1">
            <div className="section1_new_area_1_title">
              Immerse Yourself In The Refracted Elengance.
            </div>
            <div className="section1_new_area_1_para">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam, quis nostrud.
            </div>
            <div className="section1_new_area_1_btn_div">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  Contact Us{" "}
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </div>
          </div>

          {/* <div className="section1_new_area_2"> */}
          <Spline
            scene="https://prod.spline.design/jyCEdX7VcLQ89LgC/scene.splinecode"
            className="home_div_section1_area_2_spline_scene"
          />

          {/* <Spline
            scene="https://prod.spline.design/jyCEdX7VcLQ89LgC/scene.splinecode"
            className="home_div_section1_area_2_spline_scene"
          /> */}

          {/* <Spline
            scene="https://prod.spline.design/nloodoKZb5VCGux0/scene.splinecode"
            className="home_div_section1_area_2_spline_scene"
          /> */}

          {/* </div> */}
        </div>
        <div className="Partners_div">
          <div className="review_area">
            <div className="review_area_1">
              <div className="review_area_1_titleb">
                <span className="review_area_1_title_spanb">Riviewed On</span>
                Trust Pilot
              </div>
              <div
                role="img"
                aria-label="Rating 4.7 of out 5 stars."
                class="r3dhu86"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M18.0002 0H9.00537V18.0001H18.0002V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00524 0H0V18.0001H9.00524V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
                    fill="#fff"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M18.0002 0H9.00537V18.0001H18.0002V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00524 0H0V18.0001H9.00524V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
                    fill="#fff"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M18.0002 0H9.00537V18.0001H18.0002V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00524 0H0V18.0001H9.00524V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
                    fill="#fff"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M18.0002 0H9.00537V18.0001H18.0002V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00524 0H0V18.0001H9.00524V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
                    fill="#fff"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M18.0002 0H9.00537V18.0001H18.0002V0Z"
                    fill="#DCDCE6"
                  ></path>
                  <path
                    d="M9.00524 0H0V18.0001H9.00524V0Z"
                    fill="#00B67B"
                  ></path>
                  <path
                    d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z"
                    fill="#fff"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="review_area_1">
              <div className="review_area_1_title">
                6 <span className="review_area_1_title_span2">Years</span>
              </div>
              <div className="review_area_1_body">Proven Track Record</div>
            </div>
            <div className="review_area_1">
              <div className="review_area_1_title">
                98 <span className="review_area_1_title_span2">%</span>
              </div>
              <div className="review_area_1_body">Customer Satisfaction</div>
            </div>
            <div className="review_area_1">
              <div className="review_area_1_title">
                100+ <span className="review_area_1_title_span2">Projects</span>
              </div>
              <div className="review_area_1_body">We Have Completed</div>
            </div>
          </div>
          {/* <div className="Partners_div_head">
            {" "}
            Trusted By The World's Leading Companies And Startups
          </div> */}
          {/* <Marquee className="Partners_div_body">
            {partners.map((data) => (
              <div className="Home_div_section2_area2_txt">{data.name}</div>
            ))}
          </Marquee> */}
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="ourservice_section">
        <div className="ourservice_section_area">
          <div className="ourservice_section_area_cont1">
            <div className="ourservice_section_area_cont1_title">
              Our Services
            </div>
            <div className="ourservice_section_area_cont1_para">
              Building a partnership on trust and quality.
            </div>
          </div>
          <div className="ourservice_section_area_body">
            <div className="ourservice_section_area_body_cont1_line_first"></div>
            <div className="ourservice_section_area_body_cont1">
              <div className="ourservice_section_area_body_cont1_icon">
                <img
                  src="/img/sound_3d_icon.svg"
                  alt=""
                  className="ourservice_section_area_body_cont1_icon_img"
                />
              </div>
              <div className="ourservice_section_area_body_cont1_title">
                Sound Engineering
              </div>
              <div className="ourservice_section_area_body_cont1_para">
                Scale that drives exceptional revenue growth and economies
                across the business.
              </div>
            </div>
            <div className="ourservice_section_area_body_cont1_line_center"></div>
            <div className="ourservice_section_area_body_cont1">
              <div className="ourservice_section_area_body_cont1_icon">
                <img
                  src="/img/sound_3d_icon.svg"
                  alt=""
                  className="ourservice_section_area_body_cont1_icon_img"
                />
              </div>
              <div className="ourservice_section_area_body_cont1_title">
                Sound Engineering
              </div>
              <div className="ourservice_section_area_body_cont1_para">
                Scale that drives exceptional revenue growth and economies
                across the business.
              </div>
            </div>
            <div className="ourservice_section_area_body_cont1_line_center"></div>
            <div className="ourservice_section_area_body_cont1">
              <div className="ourservice_section_area_body_cont1_icon">
                <img
                  src="/img/sound_3d_icon.svg"
                  alt=""
                  className="ourservice_section_area_body_cont1_icon_img"
                />
              </div>
              <div className="ourservice_section_area_body_cont1_title">
                Sound Engineering
              </div>
              <div className="ourservice_section_area_body_cont1_para">
                Scale that drives exceptional revenue growth and economies
                across the business.
              </div>
            </div>
            <div className="ourservice_section_area_body_cont1_line_center"></div>
            <div className="ourservice_section_area_body_cont1">
              <div className="ourservice_section_area_body_cont1_icon">
                <img
                  src="/img/sound_3d_icon.svg"
                  alt=""
                  className="ourservice_section_area_body_cont1_icon_img"
                />
              </div>
              <div className="ourservice_section_area_body_cont1_title">
                Sound Engineering
              </div>
              <div className="ourservice_section_area_body_cont1_para">
                Scale that drives exceptional revenue growth and economies
                across the business.
              </div>
            </div>
            <div className="ourservice_section_area_body_cont1_line_last"></div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="ourservice_section">
        <div className="works_section_area">
          <div className="works_section_area_heading">Works We've Done</div>
          <div className="works_section_area_para">
            We give you the expertise and tools to access unique liquidity and
            manage risk across your operations.
          </div>
          <div className="works_section_area_tab">
            Selected Works{" "}
            <div className="works_section_area_tab_view_div">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  View More{" "}
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </div>
          </div>
          <div className="works_section_area_body">
            <div className="works_section_area_body1">
              <img
                src="/img/works_bg1.jpeg"
                alt=""
                className="works_section_area_body1_img"
              />
            </div>
            <div className="works_section_area_body1">
              <img
                src="/img/works_bg2.webp"
                alt=""
                className="works_section_area_body1_img"
              />
            </div>
            <div className="works_section_area_body1">
              <img
                src="/img/works_bg3.webp"
                alt=""
                className="works_section_area_body1_img"
              />
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* <section className="Home_div_section2">
        <div className="container">
          <div className="Home_div_section2_area">
            <div className="Home_div_section2_area1">
              Trusted By The World's Leading Companies And Startups
            </div>
            <div className="Home_div_section2_area2">
              <Marquee>
                {partners.map((data) => (
                  <div className="Home_div_section2_area2_txt">{data.name}</div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section> */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* <section className="Home_div_section3">
        <div className="Home_div_section3_area">
          <div className="Home_div_section3_area1">
            About Tech
            <span className="Home_div_section3_area1_span">Tenets</span>
          </div>
          <div className="Home_div_section3_area2">
            We're your go-to experts in a diverse range of creative domains,
            encompassing UI/UX Design, brand identity, 2D&3D Illustration, pitch
            deck creation, and the craft of designing compelling advertising
            posters.{" "}
            <div className="Home_div_section3_area2_btn_div">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  View More{" "}
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* <section className="Home_div_section4">
        <div className="Home_div_section4_area">
          <div className="Home_div_section4_area_1">
            <div className="Home_div_section4_area_1_title">WHAT WE DO</div>
            <div className="Home_div_section4_area_1_services">
              <div className="home_div_section3_area_body_cont1">
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  SOUND
                </div>
                <div>
                  <div className="Home_div_section4_area_1_services_div_txt">
                    {" "}
                    SOUND ENGINEERING
                  </div>

                  <div className="home_div_section3_area_body_cont1_icon">
                    <svg
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="4.08823"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="27.9115"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="16.0003"
                        cy="4.97105"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M14.0242 8.49609L5.62305 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M17.9756 8.49609L26.3767 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M8.05859 27.0273H23.9409"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="home_div_section3_area_body_cont1">
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  I.T
                </div>
                <div>
                  <div className="Home_div_section4_area_1_services_div_txt">
                    {" "}
                    I.T DEVELOPMENT
                  </div>

                  <div className="home_div_section3_area_body_cont1_icon">
                    <svg
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="4.08823"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="27.9115"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="16.0003"
                        cy="4.97105"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M14.0242 8.49609L5.62305 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M17.9756 8.49609L26.3767 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M8.05859 27.0273H23.9409"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="home_div_section3_area_body_cont1">
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  MEDIA
                </div>
                <div>
                  <div className="Home_div_section4_area_1_services_div_txt">
                    {" "}
                    MEDIA DEVELOPMENT
                  </div>

                  <div className="home_div_section3_area_body_cont1_icon">
                    <svg
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="4.08823"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="27.9115"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="16.0003"
                        cy="4.97105"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M14.0242 8.49609L5.62305 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M17.9756 8.49609L26.3767 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M8.05859 27.0273H23.9409"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="home_div_section3_area_body_cont1">
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  PRODUCT
                </div>
                <div>
                  <div className="Home_div_section4_area_1_services_div_txt">
                    {" "}
                    PRODUCT MANAGEMENT
                  </div>

                  <div className="home_div_section3_area_body_cont1_icon">
                    <svg
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="4.08823"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="27.9115"
                        cy="27.0335"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <circle
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        cx="16.0003"
                        cy="4.97105"
                        r="3.08824"
                        stroke="white"
                        stroke-width="1.5"
                      ></circle>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M14.0242 8.49609L5.62305 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M17.9756 8.49609L26.3767 23.4981"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>{" "}
                      <path
                        data-v-25ecef37=""
                        data-v-706ceafa=""
                        d="M8.05859 27.0273H23.9409"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Home_div_section4_area_2">
            <div className="Home_div_section4_area_2_txt">Selected Works</div>
            <Marquee className="Home_div_section4_area_2_marquee">
              <img
                src="/img/works_bg1.jpeg"
                alt=""
                className="Home_div_section4_area_2_img"
              />
              <img
                src="/img/works_bg2.webp"
                alt=""
                className="Home_div_section4_area_2_img"
              />
              <img
                src="/img/works_bg3.webp"
                alt=""
                className="Home_div_section4_area_2_img"
              />
            </Marquee>
          </div>
        </div>
        <div className="svg_div">
          <img
            src="/img/dummy_svg.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section> */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="Home_div_section5">
        <div className="Home_div_section5_area">
          <div className="Home_div_section5_area_cont1">
            <div className="Home_div_section5_area_cont1_title">
              Build Something Great With Our Experts
            </div>
            <div className="Home_div_section5_area_cont1_para">
              A team of dreamers and doers like you, ready to bring your ideas
              to life.
            </div>
          </div>
          <div className="Home_div_section6_area_2">
            <div className="Home_div_section6_area_2_cont1">
              <img
                src="/img/team_member1.jpeg"
                alt=""
                className="Home_div_section6_area_2_cont1_img"
              />
              <div className="Home_div_section6_area_2_cont1_name">
                <div className="Home_div_section6_area_2_cont1_name_title">
                  Yomi Denzel
                </div>
                <div className="Home_div_section6_area_2_cont1_name_para">
                  Product Manager
                </div>
              </div>
              <div className="Home_div_section6_area_2_cont1_bg"></div>
              <div className="Home_div_section6_area_2_cont1_About">
                <div className="Home_div_section6_area_2_cont1_About_txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  consequuntur dolorum distinctio voluptatum hic ea quis quas
                  cum eligendi ipsa? Iste qui voluptatum itaque minus obcaecati
                  deserunt laudantium vitae eaque.
                </div>
              </div>
            </div>
            <div className="Home_div_section6_area_2_cont1">
              <img
                src="/img/team_member1.jpeg"
                alt=""
                className="Home_div_section6_area_2_cont1_img"
              />
              <div className="Home_div_section6_area_2_cont1_name">
                <div className="Home_div_section6_area_2_cont1_name_title">
                  Yomi Denzel
                </div>
                <div className="Home_div_section6_area_2_cont1_name_para">
                  Product Manager
                </div>
              </div>
              <div className="Home_div_section6_area_2_cont1_bg"></div>
              <div className="Home_div_section6_area_2_cont1_About">
                <div className="Home_div_section6_area_2_cont1_About_txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  consequuntur dolorum distinctio voluptatum hic ea quis quas
                  cum eligendi ipsa? Iste qui voluptatum itaque minus obcaecati
                  deserunt laudantium vitae eaque.
                </div>
              </div>
            </div>
            <div className="Home_div_section6_area_2_cont1">
              <img
                src="/img/team_member1.jpeg"
                alt=""
                className="Home_div_section6_area_2_cont1_img"
              />
              <div className="Home_div_section6_area_2_cont1_name">
                <div className="Home_div_section6_area_2_cont1_name_title">
                  Yomi Denzel
                </div>
                <div className="Home_div_section6_area_2_cont1_name_para">
                  Product Manager
                </div>
              </div>
              <div className="Home_div_section6_area_2_cont1_bg"></div>
              <div className="Home_div_section6_area_2_cont1_About">
                <div className="Home_div_section6_area_2_cont1_About_txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  consequuntur dolorum distinctio voluptatum hic ea quis quas
                  cum eligendi ipsa? Iste qui voluptatum itaque minus obcaecati
                  deserunt laudantium vitae eaque.
                </div>
              </div>
            </div>
            <div className="Home_div_section6_area_2_cont1">
              <img
                src="/img/team_member1.jpeg"
                alt=""
                className="Home_div_section6_area_2_cont1_img"
              />
              <div className="Home_div_section6_area_2_cont1_name">
                <div className="Home_div_section6_area_2_cont1_name_title">
                  Yomi Denzel
                </div>
                <div className="Home_div_section6_area_2_cont1_name_para">
                  Product Manager
                </div>
              </div>
              <div className="Home_div_section6_area_2_cont1_bg"></div>
              <div className="Home_div_section6_area_2_cont1_About">
                <div className="Home_div_section6_area_2_cont1_About_txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  consequuntur dolorum distinctio voluptatum hic ea quis quas
                  cum eligendi ipsa? Iste qui voluptatum itaque minus obcaecati
                  deserunt laudantium vitae eaque.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="Home_div_section5">
        <div className="Home_div_section5_area">
          <div className="Home_div_section5_area_cont1">
            <div className="Home_div_section5_area_cont1_title">
              Want to transition into tech space?
            </div>
            <div className="Home_div_section5_area_cont1_para">
              Let's get you trained from beginners to advance{" "}
              <span> We offer courses such as</span>
            </div>
          </div>
          <div className="Home_div_section5_area_cont2">
            <div className="Home_div_section5_area_cont2_body">
              {skills.slice(0, 5).map((data) => (
                <div className="Home_div_section5_area_cont2_body_cont_card">
                  {data.name}
                </div>
              ))}
            </div>
            <div className="Home_div_section5_area_cont2_body">
              {skills.slice(5, 8).map((data) => (
                <div className="Home_div_section5_area_cont2_body_cont_card">
                  {data.name}
                </div>
              ))}
            </div>
            <div className="Home_div_section5_area_cont2_body">
              {skills.slice(8, 12).map((data) => (
                <div className="Home_div_section5_area_cont2_body_cont_card">
                  {data.name}
                </div>
              ))}
            </div>
            {/* <div className="Home_div_section5_area_cont2_btn_div">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  Contact Us{" "}
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </div> */}
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* <section className="Home_div_section4">
        <div className="Home_div_section4_area">
          <div className="Home_div_section4_area_1">
            <div className="Home_div_section4_area_1_titleb">
              WORKS WE'VE DONE
            </div>
            <div className="Home_div_section4_area_tab_div">
              <div className="Home_div_section4_area_tab_div_1">Sound</div>
              <div className="Home_div_section4_area_tab_div_1">I.T</div>
              <div className="Home_div_section4_area_tab_div_1">MEDIA</div>
              <div className="Home_div_section4_area_tab_div_1">
                PRODUCT MANAGEMENT
              </div>
            </div>
          </div>
          <div className="Home_div_section4_area_2">
            <Marquee className="Home_div_section4_area_2_marquee">
              <img
                src="/img/works_bg1.jpeg"
                alt=""
                className="Home_div_section4_area_2_img"
              />
              <img
                src="/img/works_bg2.webp"
                alt=""
                className="Home_div_section4_area_2_img"
              />
              <img
                src="/img/works_bg3.webp"
                alt=""
                className="Home_div_section4_area_2_img"
              />
            </Marquee>
            <br />
            <br />
            <Marquee
              className="Home_div_section4_area_2_marquee"
              direction="right"
            >
              <img
                src="/img/works_bg1.jpeg"
                alt=""
                className="Home_div_section4_area_2_img"
              />
              <img
                src="/img/works_bg2.webp"
                alt=""
                className="Home_div_section4_area_2_img"
              />
              <img
                src="/img/works_bg3.webp"
                alt=""
                className="Home_div_section4_area_2_img"
              />
            </Marquee>
          </div>
        </div>
        <div className="svg_div">
          <img
            src="/img/dummy_svg.svg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section> */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
    </div>
  );
};

export default Home;
