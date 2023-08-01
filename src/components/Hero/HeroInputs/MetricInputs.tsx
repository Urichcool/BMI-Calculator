import React from "react";
import Input from "./Input";

const MetricInputs = () => {
  return (
    <div className="hero-header-form-meric-inputs-container">
      <Input
        units={"cm"}
        className="hero-header-form-meric-inputs"
        label="Height"
      />

      <Input
        units={"kg"}
        className="hero-header-form-meric-inputs"
        label="Weight"
      />
    </div>
  );
};

export default MetricInputs;
