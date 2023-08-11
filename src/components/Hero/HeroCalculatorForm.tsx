import React, { useCallback, useState } from "react";
import HeroHeaderFormInputs from "./HeroInputs/HeroHeaderInputs";
import HeroRadioButtons from "./HeroInputs/HeroRadioButtons";
import HeroHeaderFormResult from "./HeroHeaderFormResult";

const HeroCalculatorForm = () => {
  const [radioValue, setRadioValue] = useState<string>("metric");
  const [metricData, setMetricData] = useState<{ cm: number, kg: number }>({
    cm: 0,
    kg: 0,
  });
  const [imperialData, setImperialData] = useState<{ st: number, lbs: number, ft:number, inch:number }>({
    st: 0,
    lbs: 0,
    ft: 0,
    inch:0
  });

  const metricDataHandler = useCallback(
    (data: { cm: number; kg: number }): void => {
      setMetricData(data);
    }, [setMetricData]
  ); 

  const imperialDataHandler = useCallback((data: {
    st: number;
    lbs: number;
    ft: number;
    inch: number;
  }): void => {
    setImperialData(data);
  }, [setImperialData]) 

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setRadioValue(e.target.value);
  };

  return (
    <div className="hero-header-calculator-form-background">
      <div className="hero-header-calculator-form-container">
        <p className="font_heading_m">Enter your details below</p>
        <form>
          <HeroRadioButtons radioValue={radioValue} changeValue={changeValue} />
          <HeroHeaderFormInputs
            radioValue={radioValue}
            metricDataHandler={metricDataHandler}
            imperialDataHandler={imperialDataHandler}
          />
        </form>
        <HeroHeaderFormResult
          radioValue = {radioValue}
          metricData={metricData}
          imperialData={imperialData}
        />
      </div>
    </div>
  );
};

export default HeroCalculatorForm;
