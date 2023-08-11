import React, { useState } from "react";
import HeroHeaderFormInputs from "./HeroInputs/HeroHeaderInputs";
import HeroRadioButtons from "./HeroInputs/HeroRadioButtons";
import HeroHeaderFormResult from "./HeroHeaderFormResult";

const HeroCalculatorForm = () => {
  const [radioValue, setRadioValue] = useState<string>("metric");
  const [metricData, setMetricData] = useState<{ cm: number, kg: number }>({
    cm: 0,
    kg: 0,
  });

  const metricDataHandler = (data: { cm: number, kg: number }): void => {
    setMetricData(data)
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRadioValue(e.target.value);
  };

  return (
    <div className="hero-header-calculator-form-background">
      <div className="hero-header-calculator-form-container">
        <p className="font_heading_m">Enter your details below</p>
        <form>
          <HeroRadioButtons radioValue={radioValue} changeValue={changeValue} />
          <HeroHeaderFormInputs radioValue={radioValue} metricDataHandler={metricDataHandler} />
        </form>
        <HeroHeaderFormResult metricData={metricData} />
      </div>
    </div>
  );
};

export default HeroCalculatorForm;
