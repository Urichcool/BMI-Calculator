import React from "react";
import IconEating from "../../images/icons/IconEating";
import IconExercise from "../../images/icons/IconExercise";
import IconSleep from "../../images/icons/IconSleep";
import BMITipsItem from "./BMITipsItem";

const BMITips = () => {
  const tipsData: {
    id: number;
    svg: JSX.Element;
    title: string;
    text: string;
  }[] = [
    {
      id: 0,
      svg: <IconEating />,
      title: "Healthy eating",
      text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      id: 1,
      svg: <IconExercise />,
      title: "Regular exercise",
      text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      id: 2,
      svg: <IconSleep />,
      title: "Adequate sleep",
      text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];
  return (
    <section className="bmi-tips-section">
      <div className="container">
        <ul className="bmi-tips-list">
          {tipsData.map(({ id, svg, title, text }) => (
            <BMITipsItem key={id} svg={svg} title={title} text={text} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BMITips;
