import React, { FC, useState } from "react";

interface InputProps {
  units: "cm" | "kg" | "ft" | "in" | "st" | "lbs";
  label?: "Height" | "Weight";
  className:
    | "hero-header-form-imperic-inputs"
    | "hero-header-form-meric-inputs";
}

const Input: FC<InputProps> = ({ units, label, className }) => {
  const [inputValue, setInputValue] = useState("");

  const inputOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (Number(e.target.value) <= 999) {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className={className}>
      <label className="font_body_s hero-header-form-label">{label}</label>
      <div style={{ position: "relative" }}>
        <input
          value={inputValue}
          onChange={inputOnChangeHandler}
          placeholder="0"
          className="hero-header-form-input font_heading_m"
        />
        <span className="font_heading_m hero-header-form-input-unit">
          {units}
        </span>
      </div>
    </div>
  );
};

export default Input;
