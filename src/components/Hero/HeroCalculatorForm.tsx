import React, { useState } from "react";

function HeroCalculatorForm() {
  const [radioValue, setRadioValue] = useState<string>("metric");

  function changeValue(e: React.ChangeEvent<HTMLInputElement>): void {
    setRadioValue(e.target.value);
  }

  return (
    <div className="hero-header-calculator-form-background">
      <div className="hero-header-calculator-form-container">
        <p className="font_heading_m">Enter your details below</p>
        <form>
          <div className="hero-header-calculator-form-radio-buttons">
            <div className="hero-header-calculator-form-radio">
              <input
                className="hero-header-calculator-form-radio-input"
                type="radio"
                id="metric"
                value="metric"
                checked={radioValue === "metric" ? true : false}
                onChange={changeValue}
              />
              <label className="font_body_m_bold hero-header-calculator-form-radio-label">
                Metric
              </label>
            </div>
            <div className="hero-header-calculator-form-radio">
              <input
                className="hero-header-calculator-form-radio-input"
                type="radio"
                id="imperial"
                value="imperial"
                checked={radioValue === "imperial" ? true : false}
                onChange={changeValue}
              />
              <label className="font_body_m_bold hero-header-calculator-form-radio-label">
                Imperial
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HeroCalculatorForm;
