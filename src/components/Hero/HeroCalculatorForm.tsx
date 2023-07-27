import React from "react";

function HeroCalculatorForm() {
  return (
    <div className="hero-header-calculator-form-background">
      <div className="hero-header-calculator-form-container">
        <p className="font_heading_m">Enter your details below</p>
        <form>
          <div className="hero-header-calculator-form-radio-buttons">
            <label className="font_body_m_bold hero-header-calculator-form-radio-label">
              <input className="hero-header-calculator-form-radio-input" type="radio" id="metric" value="metric" />
              Metric
            </label>
            <label className="font_body_m_bold hero-header-calculator-form-radio-label">
              <input className="hero-header-calculator-form-radio-input" type="radio" id="imperial" value="imperial" />
              Imperial
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroCalculatorForm;
