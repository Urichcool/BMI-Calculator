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
    <div
      className="hero-header-calculator-form-radio-buttons"
      data-testid="hero header calculator radio-buttons"
    >
      <div className="hero-header-calculator-form-radio">
        <input
          data-testid="metric btn"
          className="hero-header-calculator-form-radio-input"
          type="radio"
          id="metric"
          value="metric"
          checked={radioValue === "metric"}
          onChange={changeValue}
        />
        <label
          htmlFor="metric"
          className="font_body_m_bold hero-header-calculator-form-radio-label"
        >
          Metric
        </label>
      </div>
      <div className="hero-header-calculator-form-radio">
        <input
          data-testid="imperial btn"
          className="hero-header-calculator-form-radio-input"
          type="radio"
          id="imperial"
          value="imperial"
          checked={radioValue === "imperial"}
          onChange={changeValue}
        />
        <label
          htmlFor="imperial"
          className="font_body_m_bold hero-header-calculator-form-radio-label"
        >
          Imperial
        </label>
      </div>
    </div>
  );
};

export default HeroRadioButtons;
