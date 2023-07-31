import React from "react";
import Input from "./Input";

const MetricInputs = () => {
  return (
    <div className="hero-header-form-meric-inputs-container">
      <div className="hero-header-form-meric-inputs">
        <label className="font_body_s hero-header-form-label">Height</label>
        <Input units={"cm"} />
      </div>
      <div className="hero-header-form-meric-inputs">
        <label className="font_body_s hero-header-form-label">Weight</label>
        <Input units={"kg"} />
      </div>
    </div>
  );
};

export default MetricInputs;
