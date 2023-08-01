import React from "react";
import Input from "./Input";

const ImperialInputs = () => {
  return (
    <>
      <div className="hero-header-form-imperic-inputs-container">
        <Input
          units={"ft"}
          className="hero-header-form-imperic-inputs"
          label="Height"
        />

        <Input units={"in"} className="hero-header-form-imperic-inputs" />
      </div>
      <div className="hero-header-form-imperic-inputs-container">
        <Input
          units={"st"}
          className="hero-header-form-imperic-inputs"
          label="Weight"
        />

        <Input units={"lbs"} className="hero-header-form-imperic-inputs" />
      </div>
    </>
  );
};

export default ImperialInputs;
