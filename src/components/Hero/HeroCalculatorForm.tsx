import React, { useState } from "react";
import HeroHeaderFormInputs from "./HeroInputs/HeroHeaderInputs";
import HeroRadioButtons from "./HeroInputs/HeroRadioButtons";

const HeroCalculatorForm = () => {
  const [radioValue, setRadioValue] = useState<string>("metric");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRadioValue(e.target.value);
  }

  return (
    <div className="hero-header-calculator-form-background">
      <div className="hero-header-calculator-form-container">
        <p className="font_heading_m">Enter your details below</p>
        <form>
          <HeroRadioButtons radioValue={radioValue} changeValue={changeValue} />
          <HeroHeaderFormInputs radioValue={radioValue} />
        </form>
      </div>
    </div>
  );
};

export default HeroCalculatorForm;
