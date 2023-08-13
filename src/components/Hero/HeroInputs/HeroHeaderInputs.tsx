import React, { FC } from "react";
import MetricInputs from "./MetricInputs";
import ImperialInputs from "./ImperialInputs";

interface IheroHeaderFormInputsProps {
  radioValue: string;
  metricDataHandler: (data: { cm: number; kg: number }) => void;
  imperialDataHandler: (data: {
    st: number;
    lbs: number;
    ft: number;
    inch: number;
  }) => void;
}

const HeroHeaderFormInputs: FC<IheroHeaderFormInputsProps> = ({
  radioValue,
  metricDataHandler,
  imperialDataHandler,
}) => {
  return (
    <>
      {radioValue === "metric" ? (
        <MetricInputs metricDataHandler={metricDataHandler} />
      ) : (
        <ImperialInputs imperialDataHandler={imperialDataHandler} />
      )}
    </>
  );
};

export default HeroHeaderFormInputs;
