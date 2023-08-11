import React, { useState, FC, useEffect } from "react";
import Input from "./Input";

interface IMetricInputsProps {
  metricDataHandler: (data: { cm: number; kg: number }) => void;
}

const MetricInputs: FC<IMetricInputsProps> = ({ metricDataHandler }) => {
  const [kg, setKg] = useState<number>(0);
  const [cm, setCm] = useState<number>(0);

  const kgHandler = (data: number): void => {
    setKg(data);
  };

  const cmHandler = (data: number): void => {
    setCm(data);
  };

  useEffect(() => {
    metricDataHandler({ cm, kg });
  }, [cm, kg]);

  return (
    <div className="hero-header-form-meric-inputs-container">
      <Input
        units={"cm"}
        className="hero-header-form-meric-inputs"
        label="Height"
        dataHandler={cmHandler}
      />

      <Input
        units={"kg"}
        className="hero-header-form-meric-inputs"
        label="Weight"
        dataHandler={kgHandler}
      />
    </div>
  );
};

export default MetricInputs;
