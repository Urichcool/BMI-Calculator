import React, { FC } from 'react';
import IconEating from "../../images/icons/IconEating";
import IconExercise from "../../images/icons/IconExercise";
import IconSleep from "../../images/icons/IconSleep";

interface IBMITipsItemProps {
  svg: JSX.Element;
  title: string;
  text: string;
}

const BMITipsItem:FC<IBMITipsItemProps> = ({svg, title, text}) => {
  return (
    <li className="bmi-tips-list-item">
      <div className="bmi-tips-icon">{svg}</div>
      <h3 className="font_heading_m bmi-tips-title">{title}</h3>
      <p className="font_body_m">{text}</p>
    </li>
  );
}

export default BMITipsItem;