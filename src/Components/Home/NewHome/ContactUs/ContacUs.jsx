import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "../../Grid";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
const ContacUs = () => {
  return (
    <div className="contact_us_comp_div">
      <section className="NeewHomeSection1">
        <div className="NeewHomeSection1_area">
          <div className="NeewHomeSection1_area_cont1">
            <div className="NeewHomeSection1_area_cont1_cont">Contact Us</div>
            <div className="NeewHomeSection1_area_cont1_title">
              Here to give you all the{" "}
              <span className="NeewHomeSection1_area_cont1_title_span">
                support
              </span>{" "}
              you need.
            </div>
            <div className="NeewHomeSection1_area_cont1_para">
              Scale up your business to a minimum of 70% and maximum of infinity
              with our bespoke tech tools that drives customer satisfaction and
              timely service delivery.
            </div>
            <div className="NeewHomeSection1_area_cont1_btns_div">
              <div className="contact_us_divs">
                <div className="contact_us_divs_cont1">
                  <AttachEmailIcon className="contact_us_divs_cont1_icon" />
                  <a
                    href="mailto:Hello@ediaudiotech.com"
                    className="contact_us_divs_cont1_link"
                    target="_blank"
                  >
                    Hello@ediaudiotech.com
                  </a>
                </div>
                <div className="contact_us_divs_cont1">
                  <AddIcCallIcon className="contact_us_divs_cont1_icon" />
                  <a
                    href="mailto:Hello@ediaudiotech.com"
                    className="contact_us_divs_cont1_link"
                    target="_blank"
                  >
                    +2348125045781
                  </a>
                </div>
                <div className="contact_us_divs_cont1">
                  <AddIcCallIcon className="contact_us_divs_cont1_icon" />
                  <a
                    href="mailto:Hello@ediaudiotech.com"
                    className="contact_us_divs_cont1_link"
                    target="_blank"
                  >
                    +2348035415473
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="NeewHomeSection1_area_cont2">
            <img
              src="/img/contact_img.svg"
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
      </section>
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
      {/*============== */}
    </div>
  );
};

export default ContacUs;
