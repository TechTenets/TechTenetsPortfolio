import React, { useState } from "react";
import "./NewHome.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "../Grid";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";

const NewHome = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
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
  const wallets = [
    {
      id: "1",
      title: "HTML5",
      img: "/img/languages_icon/htmL_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Coinbase is a global digital wallet functioning as a web browser
            extension. With Coinbase, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "2",
      title: "CSS3",
      img: "/img/languages_icon/css_icon.webp",
      body: (
        <div className="wallets_body">
          <span>
            Metamask is a global digital wallet functioning as a web browser
            extension. With Metamask, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "3",
      title: "JavaScript",
      img: "/img/languages_icon/js_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Trust Wallet is a global digital wallet functioning as a web browser
            extension. With Trust Wallet, you can safely and seamlessly manage
            the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "4",
      title: "React",
      img: "/img/languages_icon/react_icon.svg",
      body: (
        <div className="wallets_body">
          <span>
            Kaikas is a global digital wallet functioning as a web browser
            extension. With Kaikas, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "5",
      title: "Git and GitHub",
      img: "/img/languages_icon/git_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            SafePal is a global digital wallet functioning as a web browser
            extension. With SafePal, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "6",
      title: "API",
      img: "/img/languages_icon/api_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Coin98 is a global digital wallet functioning as a web browser
            extension. With Coin98, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "7",
      title: "Tailwind.css",
      img: "/img/languages_icon/tailwind_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Huobi Wallet is a global digital wallet functioning as a web browser
            extension. With Huobi Wallet, you can safely and seamlessly manage
            the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "8",
      title: "NodeJs",
      img: "/img/languages_icon/node_js_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            D'Cent is a global digital wallet functioning as a web browser
            extension. With D'Cent, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "9",
      title: "Webpack",
      img: "/img/languages_icon/webpack_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Exodus Wallet is a global digital wallet functioning as a web
            browser extension. With Exodus Wallet, you can safely and seamlessly
            manage the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "10",
      title: "C++ ",
      img: "/img/languages_icon/c++_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Exodus Wallet is a global digital wallet functioning as a web
            browser extension. With Exodus Wallet, you can safely and seamlessly
            manage the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "11",
      title: "VueJs 2.X ",
      img: "/img/languages_icon/vuejs_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Exodus Wallet is a global digital wallet functioning as a web
            browser extension. With Exodus Wallet, you can safely and seamlessly
            manage the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "12",
      title: "Strongly OOP PHP Script ",
      img: "/img/languages_icon/php_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Exodus Wallet is a global digital wallet functioning as a web
            browser extension. With Exodus Wallet, you can safely and seamlessly
            manage the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
  ];
  const handleSlideChange = (swiper) => {
    setSwiperIndex(swiper.realIndex);
  };
  return (
    <div className="NewHomeDiv">
      <section className="NeewHomeSection1">
        <div className="NeewHomeSection1_area">
          <div className="NeewHomeSection1_area_cont1">
            <div className="NeewHomeSection1_area_cont1_cont"></div>
            <div className="NeewHomeSection1_area_cont1_title">
              Boost Your Business
              <br /> With Our Customized
              <br /> Tech {"  "}
              <span className="NeewHomeSection1_area_cont1_title_span">
                Solutions.
              </span>{" "}
            </div>
            <div className="NeewHomeSection1_area_cont1_para">
              Scale up your business to a minimum of 70% and maximum of infinity
              with our bespoke tech tools that drives customer satisfaction and
              timely service delivery.
            </div>
            <a
              href="/contact_us"
              className="NeewHomeSection1_area_cont1_btns_div"
            >
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
              src="/img/hero_new_img.png"
              alt=""
              className="NeewHomeSection1_area_cont2_new_img"
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

        <div className="new_section_trust_div">
          <div className="new_section_trust_div_title">
            Trusted By 1000+ Businesses
          </div>
          <div className="new_section_trust_div_body">
            <Marquee className="Partners_div_body">
              {partners.map((data) => (
                <div className="Home_div_section2_area2_txt">{data.name}</div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      <section className="NeewHomeSection2">
        <div className="NeewHomeSection2_area">
          <div className="NeewHomeSection2_area_1">
            <img
              src="/img/about_us_img.jpeg"
              alt=""
              className="NeewHomeSection2_area_1_cont1_img"
            />
            <div className="NeewHomeSection2_area_1_cont2">
              <div className="NeewHomeSection2_area_1_cont1_tag">
                TechTenets
              </div>
              <div className="NeewHomeSection2_area_1_cont2_title">
                The
                <br />
                Journey
              </div>
              In my opinion, the most beautiful part of life is the processes we
              steered to get where we are now, not the  accolades and glamour of
              the finish line   we celebrate in the open.
              <br />
              <br />
              {/* <br /> */}
              Our pursuit is to become a foremost digital innovation
              and creative business development hub, specializing in building,
              launching and scaling successful audio-technical  and web
              development for both retail and big tech companies in Africa and
              across the globe with a goal to inspire and spearhead new tech
              trends, propel business growth and develop tech-preneurs with
              global competitive influence.
              <div className="NeewHomeSection2_area_1_cont2_btn_div">
                <button className="Home_div_section1_area_1_btn">
                  <span className="Home_div_section1_area_1_btn_span">
                    Discover Us{" "}
                  </span>
                  <div className="Home_div_section1_area_1_btn_icon_div">
                    <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="review_area">
            <div className="review_area_1">
              <div className="review_area_1_titleb">
                {/* <span className="review_area_1_title_spanb">Riviewed On</span> */}
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
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
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
            <div className="NeewHomeSection2_area_2_top_bg">
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
            </div>
            <div className="home_div_section3_area_body">
              <div className="home_div_section3_area_body_cont1">
                <div className="home_div_section3_area_body_cont1_title">
                  Secure Network
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Powered by EGAX's Secure Network
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Node validators actively safeguard the EGOCHAIN by securing
                    consensus, earning EGAX tokens as their well-deserved
                    reward.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </div>

              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              <div className="home_div_section3_area_body_cont1">
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  Unleashing
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Unleashing Interoperability
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Powered by the robust Cosmos SDK, Egochain seamlessly
                    connects to the vibrant Cosmos ecosystem (20+ chains, $40B+)
                    through the IBC protocol.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </div>

              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <div className="home_div_section3_area_body_cont1">
                <div className="home_div_section3_area_body_cont1_title">
                  Unleash
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Unleash the Full Potential of Solidity
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Egochain's EVM compatibility empowers developers to leverage
                    the familiar Solidity language and existing dApps, while
                    reaping the benefits of Egochain's superior scalability and
                    security.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </div>

              {/* ======== */}
              {/* ======== */}
              {/* ======== */}
              <div className="home_div_section3_area_body_cont1">
                <div className="home_div_section3_area_body_cont1_title">
                  Transactions
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Transactions by the Millions
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Tendermint Consensus delivers single-block finality and
                    unmatched scalability, ensuring Egochain can handle the
                    demands of thousands of protocols and millions of users –
                    effortlessly.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <img
                    src="/img/sound_3d_icon.svg"
                    alt=""
                    className="ourservice_section_area_body_cont1_icon_img"
                  />
                </div>
              </div>
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
      <section className="home_div_section5">
        <div className="custom_container">
          <div className="home_div_section5_area">
            <div className="home_div_section5_area_title">
              Want to transition
              <br /> into the tech space?
              <div className="home_div_section5_area_title_para">
                Let's get you trained from beginners to advance.
                <br /> We offer courses such as
              </div>
            </div>
            <div className="home_div_section5_area_body_cont">
              {wallets.map((data) => (
                <div
                  id={data.id}
                  className="home_div_section5_area_body_cont_div1"
                >
                  <div className="home_div_section5_area_body_cont_div1_img_div">
                    <img
                      src={data.img}
                      alt=""
                      className="home_div_section5_area_body_cont_div1_img_div_img"
                    />
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_title">
                    {data.title}
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_title_para">
                    {data.body}
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_last_txt">
                    COURSE
                  </div>
                </div>
              ))}
            </div>
            <div className="home_div_section5_area_btn_div">
              <button className="Home_div_section1_area_1_btn">
                <span className="Home_div_section1_area_1_btn_span">
                  Get Started
                </span>
                <div className="Home_div_section1_area_1_btn_icon_div">
                  <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        <div className="hero_line_div2">
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
        </div>
      </section>
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      <section className="NeewHomeSection3">
        <div className="NeewHomeSection3_area">
          <div className="NeewHomeSection3_area1">
            <div className="NeewHomeSection3_area1_tag">Projects</div>
            <div className="NeewHomeSection3_area1_title">Feautured Works</div>
            <div className="NeewHomeSection3_area1_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              totam odio voluptatum nostrum culpa illum. Odit impedit earum
              praesentium, molestiae maxime.
            </div>
            {/* <div className="NeewHomeSection3_area1_tabs">
              <div className="NeewHomeSection3_area1_tab1">All</div>
              <div className="NeewHomeSection3_area1_tab1">Sound Eng</div>
              <div className="NeewHomeSection3_area1_tab1">I.T Dev</div>
              <div className="NeewHomeSection3_area1_tab1">Media Mngmt</div>
              <div className="NeewHomeSection3_area1_tab1">Product Mngmt</div>
            </div> */}
          </div>
          <div className="NeewHomeSection3_area2">
            <div className="NeewHomeSection3_area2_div1">
              <img
                src="/img/works_bg1.jpeg"
                alt=""
                className="NeewHomeSection3_area2_div1_img"
              />
            </div>
            <div className="NeewHomeSection3_area2_div1">
              <img
                src="/img/works_bg2.webp"
                alt=""
                className="NeewHomeSection3_area2_div1_img"
              />
            </div>
            <div className="NeewHomeSection3_area2_div1">
              <img
                src="/img/works_bg3.webp"
                alt=""
                className="NeewHomeSection3_area2_div1_img"
              />
            </div>
          </div>
          <div className="NeewHomeSection2_area_1_cont2_btn_div">
            <button className="Home_div_section1_area_1_btn">
              <span className="Home_div_section1_area_1_btn_span">
                View All
              </span>
              <div className="Home_div_section1_area_1_btn_icon_div">
                <ArrowForwardIcon className="Home_div_section1_area_1_btn_icon" />
              </div>
            </button>
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
      <section className="NeewHomeSection4">
        <div className="NeewHomeSection4_area">
          <div className="NeewHomeSection4_area_1">
            <div className="NeewHomeSection4_area_1_title">The Team</div>
            <div className="NeewHomeSection4_area_1_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              natus quaerat laborum corrupti! Autem, molestias delectus itaque
              quasi sit quisquam, repellendus tempore vero voluptas nesciunt
              natus dolorum fugiat veritatis cum.
            </div>
          </div>
          <div className="NeewHomeSection4_area_2">
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
      <section className="NeewHomeSection5">
        <div className="NeewHomeSection5_cont">
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
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
    </div>
  );
};

export default NewHome;
