import React, { FC } from "react";

interface InputProps {
  units: "cm" | 'kg' | 'ft' | 'in' | 'st' | 'lbs';
  label?: 'Height' | "Weight",
  className: 'hero-header-form-imperic-inputs' | 'hero-header-form-meric-inputs'
}

const Input: FC<InputProps> = ({ units, label, className }) => {
  return (
    <div className={className}>
      <label className="font_body_s hero-header-form-label">{label}</label>
      <div style={{position:"relative"}}>
        <input
          placeholder="0"
          className="hero-header-form-input font_heading_m"
        ></input>
          <span className="font_heading_m hero-header-form-input-unit">
        {units}
      </span>
      </div>

    
    </div>
  );
};

export default Input;
