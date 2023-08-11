import React, { FC } from 'react';
import { imperialBMIFunc,metricBMIFunc } from '../../utils/CalculatorFunc';


interface IHeroHeaderFormResultProps {
  metricData: { cm: number; kg: number };
}

const HeroHeaderFormResult:FC<IHeroHeaderFormResultProps> = ({ metricData }) => {
  
    return (
      <div className="hero-header-form-result">
        <div className="hero-header-form-result-container">
          <div className="hero-header-form-result-text-container">
            <p
              className="font_body_m_bold"
              style={{ marginBottom: "8px", color: "#FFF" }}
            >
              Your BMI is...
            </p>
            <p className="font_heading_l" style={{ color: "#FFF" }}>
              {metricBMIFunc(metricData.cm, metricData.kg)}
            </p>
          </div>
          <div className="hero-header-form-result-text-container">
            <p className="font_body_s" style={{ color: "#FFF" }}>
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between 63.3kgs - 85.2kgs.
            </p>
          </div>
        </div>
      </div>
    );
    
}

export default HeroHeaderFormResult;