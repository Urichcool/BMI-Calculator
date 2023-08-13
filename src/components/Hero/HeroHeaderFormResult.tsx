import React, { FC, useEffect, useState } from "react";
import {
  imperialBMIFunc,
  metricBMIFunc,
  BMISuggestFunc,
  MetricIdeaMassFunc,
  ImperialIdeaMassFunc,
} from "../../utils/CalculatorFunc";

interface IHeroHeaderFormResultProps {
  radioValue: string;
  metricData: { cm: number; kg: number };
  imperialData: {
    st: number;
    lbs: number;
    ft: number;
    inch: number;
  };
}

const HeroHeaderFormResult: FC<IHeroHeaderFormResultProps> = ({
  metricData,
  imperialData,
  radioValue,
}) => {
  const [result, setResult] = useState<number>(0);

  const { st, lbs, ft, inch } = imperialData;
  const { cm, kg } = metricData;

  useEffect(() => {
    radioValue === "imperial"
      ? setResult(imperialBMIFunc(st, lbs, ft, inch))
      : setResult(metricBMIFunc(cm, kg));
  }, [st, lbs, ft, inch, cm, kg, radioValue]);

  return (
    <div className="hero-header-form-result">
      <div className="hero-header-form-result-container">
        {result === 0 ? (
          <div>
            <p
              className="font_heading_m"
              style={{ marginBottom: "16px", color: "#FFF" }}
            >
              Welcome!
            </p>
            <p className="font_body_s" style={{ color: "#FFF" }}>
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        ) : (
          <>
            <div className="hero-header-form-result-text-container">
              <p
                className="font_body_m_bold"
                style={{ marginBottom: "8px", color: "#FFF" }}
              >
                Your BMI is...
              </p>
              <p className="font_heading_l" style={{ color: "#FFF" }}>
                {result}
              </p>
            </div>
            <div className="hero-header-form-result-text-container">
              <p className="font_body_s" style={{ color: "#FFF" }}>
                Your BMI suggests you’re {BMISuggestFunc(result)}. Your ideal
                weight is between{" "}
                <span
                  className="font_body_s"
                  style={{ color: "#FFF", fontWeight: "700" }}
                >
                  {radioValue === "metric"
                    ? MetricIdeaMassFunc(cm)
                    : ImperialIdeaMassFunc(5, 11)}
                </span>
                .
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroHeaderFormResult;
