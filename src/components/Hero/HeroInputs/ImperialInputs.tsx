import React from "react";
import Input from "./Input";

const ImperialInputs = () => {
  return (
    <>
      <div className="hero-header-form-imperic-inputs-container">
        <div className="hero-header-form-imperic-inputs">
          <label className="font_body_s hero-header-form-label">Height</label>
          <Input units={"ft"} />
        </div>
        <div className="hero-header-form-imperic-inputs">
          <label
            className="font_body_s hero-header-form-label"
            style={{ visibility: "hidden" }}
          >
            Height
          </label>
          <Input units={"in"} />
        </div>
      </div>
      <div className="hero-header-form-imperic-inputs-container">
        <div className="hero-header-form-imperic-inputs">
          <label className="font_body_s hero-header-form-label">Weight</label>
          <Input units={"st"} />
        </div>
        <div className="hero-header-form-imperic-inputs">
          <label
            className="font_body_s hero-header-form-label"
            style={{ visibility: "hidden" }}
          >
            Weight
          </label>
          <Input units={"lbs"} />
        </div>
      </div>
    </>
  );
};

export default ImperialInputs;
