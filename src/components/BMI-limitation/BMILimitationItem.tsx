import React, { FC } from "react";

interface IBMILimitationItemProps {
  svg: JSX.Element;
  title: string;
  text: string;
}

const BMILimitationItem: FC<IBMILimitationItemProps> = ({
  svg,
  title,
  text,
}) => {
  return (
    <li className="BMI-limitation-item">
      <div className="BMI-limitation-item-icon-container">
        <div className="BMI-limitation-item-icon">{svg}</div>
        <h3 className="font_heading_s">{title}</h3>
      </div>
      <p className="font_body_m">{text}</p>
    </li>
  );
};

export default BMILimitationItem;
