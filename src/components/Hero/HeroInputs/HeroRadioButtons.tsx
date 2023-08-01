import React, { FC } from "react";

interface IHeroRadioButtonsProps {
  radioValue: string; 
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeroRadioButtons: FC<IHeroRadioButtonsProps> = ({
  radioValue,
  changeValue,
}) => {
  return (
    <div className="hero-header-calculator-form-radio-buttons">
      <div className="hero-header-calculator-form-radio">
        <input
          className="hero-header-calculator-form-radio-input"
          type="radio"
          id="metric"
          value="metric"
          checked={radioValue === "metric"}
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
          checked={radioValue === "imperial"}
          onChange={changeValue}
        />
        <label className="font_body_m_bold hero-header-calculator-form-radio-label">
          Imperial
        </label>
      </div>
    </div>
  );
};

export default HeroRadioButtons;