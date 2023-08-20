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
        <li>
         {svg}   
      </li>
    );
}

export default BMITipsItem;