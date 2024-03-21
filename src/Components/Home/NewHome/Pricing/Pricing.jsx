import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./Pricing.css";
const Pricing = () => {
  return (
    <div className="pricing_page_div">
      <div className="pricing_page_div_section1">
        <div className="pricing_page_div_section1_area1">
          <div className="pricing_page_div_section1_area1_txt1">
            Grow better with the right plan
            <div className="pricing_page_div_section1_area1_txt1_para">
              With what you need (when you need it)
            </div>
          </div>
          <div className="pricing_page_div_section1_area1_btn_div">
            <button className="pricing_page_div_section1_area1_btn">
              3 Months
            </button>
          </div>
          <img
            src="/img/grains_ellipse.png"
            alt=""
            className="grains_ellipse"
          />
        </div>
        {/* ======= */}
        {/* ======= */}
        {/* ======= */}
        {/* ======= */}
        <div className="pricing_page_div_section1_area2">
          <div className="pricing_page_div_section1_area2_card1">
            <div className="pricing_page_div_section1_area2_card1_amount_area">
              <div className="pricing_page_div_section1_area2_card1_amount_area_title">
                UI/UX
              </div>
              <div className="pricing_page_div_section1_area2_card1_amount_area_price">
                ₦150,000
              </div>
              <button className="pricing_page_div_section1_area2_card1_amount_area_btn">
                Get Started
              </button>
            </div>
            <div className="pricing_page_div_section1_area2_card1_features_body">
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
            </div>
          </div>
          <div className="pricing_page_div_section1_area2_card1">
            <div className="pricing_page_div_section1_area2_card1_amount_area">
              <div className="pricing_page_div_section1_area2_card1_amount_area_title">
                Frontend Dev
              </div>
              <div className="pricing_page_div_section1_area2_card1_amount_area_price">
                ₦250,000
              </div>
              <button className="pricing_page_div_section1_area2_card1_amount_area_btn">
                Get Started
              </button>
            </div>
            <div className="pricing_page_div_section1_area2_card1_features_body">
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
            </div>
          </div>
          <div className="pricing_page_div_section1_area2_card1">
            <div className="pricing_page_div_section1_area2_card1_amount_area">
              <div className="pricing_page_div_section1_area2_card1_amount_area_title">
                Full Stack Dev
              </div>
              <div className="pricing_page_div_section1_area2_card1_amount_area_price">
                ₦500,000
              </div>
              <button className="pricing_page_div_section1_area2_card1_amount_area_btn">
                Get Started
              </button>
            </div>
            <div className="pricing_page_div_section1_area2_card1_features_body">
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
              <div className="pricing_page_div_section1_area2_card1_features_body_cont1">
                <CheckIcon className="pricing_page_div_section1_area2_card1_features_body_cont1_icon" />
                All Premium Features
              </div>
            </div>
          </div>
          <img
            src="/img/grains_ellipse.png"
            alt=""
            className="grains_ellipse"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
