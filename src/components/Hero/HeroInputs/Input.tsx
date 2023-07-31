import React, { FC } from "react";

interface InputProps {
  units: "cm" | 'kg' | 'ft' | 'in' | 'st' | 'lbs';
}

const Input: FC<InputProps> = ({ units }) => {
  return (
    <>
      <input placeholder="0" className="hero-header-form-input font_heading_m"></input>
      <span className="font_heading_m hero-header-form-input-unit">
        {units}
      </span>
    </>
  );
};

export default Input;
