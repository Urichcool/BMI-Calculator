import React from "react";
import LogoSvg from "../../images/icons/LogoSvg";

const HeroHeader = () => {
  return (
    <>
    
      
          <div className="hero-header-background"></div>
          <header data-testid="hero-header">
            <div className="hero-header-text-container">
              <LogoSvg />
              <h1 className="font_heading_l hero-header-title">
                Body Mass Index Calculator
              </h1>
              <p className="font_body_m hero-header-text">
                Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting
                point to evaluate your overall health and well-being.
              </p>
            </div>
          </header>
    
  
    </>
  );
};

export default HeroHeader;
