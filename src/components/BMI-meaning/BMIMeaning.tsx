import React, { FC } from "react";
import BMIMeaningIcon from "../../images/icons/BMIMeaningIcon";
import { BMIMeaningFunction } from "../../utils/CalculatorFunc";

interface IBMIMeaningProps {
  result: number;
}

const BMIMeaning: FC<IBMIMeaningProps> = ({ result }) => {
  return (
    <div className="container">
      <section className="bmi-meaning-section" data-testid="bmi-meaning">
        <div className="bmi-meaning-background">
          <div className="bmi-meaning-image"></div>
        </div>

        <div className="bmi-meaning-image-text-container">
          <h2 className="bmi-meaning-image-title">
            What your BMI result means
          </h2>
          <p className="font_body_m">{BMIMeaningFunction(result)}</p>
        </div>
        <BMIMeaningIcon />
      </section>
    </div>
  );
};

export default BMIMeaning;
