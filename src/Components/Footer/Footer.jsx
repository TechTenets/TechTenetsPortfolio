import React, { useState, useEffect } from "react";
import "./footer.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CallMadeIcon from "@mui/icons-material/CallMade";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "../Home/Grid";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update the year every second (you can adjust the interval as needed)

    // Clear the interval when the component unmounts    sss
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="footerDiv" id="footer">
      {/* <div className="container"> */}
      <div className="footerDivArea">
        <div className="footerDiv1">
          <div className="container">
            <div className="footerDiv1_area1">
              <div className="footerDiv1_area1_cont1">
                <img
                  src="/img/techtenets_dummy_logo.svg"
                  alt=""
                  className="footerDiv1_img2"
                />
                EdiAudio-Tech
              </div>
              <div className="footerDiv1_area1_cont2">
                <div className="footerDiv1_area1_cont2_links">
                  <a
                    href="https://twitter.com/egorasHQ?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <TwitterIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Twitter
                    </span> */}
                  </a>

                  <a
                    href="https://t.me/s/egorasmarket?before=480"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <TelegramIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Telegram
                    </span> */}
                  </a>
                  <a
                    href="https://github.com/EgorasMarket"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <GitHubIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Telegram
                    </span> */}
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <YouTubeIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Youtube
                    </span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer_hr" />
        <div className="container">
          <div className="footer_lastDiv">
            © {currentYear} EdiAudio-Tech. All rights reserved.
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <Grid /> */}
      <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
    </div>
  );
};

export default Footer;
