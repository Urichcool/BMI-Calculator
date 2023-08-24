import React from "react";
import IconGender from "../../images/icons/IconGender";
import IconMuscle from "../../images/icons/IconMuscle";
import IconPregnancy from "../../images/icons/IconPregnancy";
import IconRace from "../../images/icons/IconRace";
import BMILimitationItem from "./BMILimitationItem";

const BMILimitation = () => {
  const limitationsData: {
    id: number;
    svg: JSX.Element;
    title: string;
    text: string;
  }[] = [
    {
      id: 0,
      svg: <IconGender />,
      title: "Gender",
      text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    },
    {
      id: 1,
      svg: <IconGender />,
      title: "Age",
      text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
    },
    {
      id: 2,
      svg: <IconMuscle />,
      title: "Muscle",
      text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    },
    {
      id: 3,
      svg: <IconPregnancy />,
      title: "Pregnancy",
      text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
    },
    {
      id: 4,
      svg: <IconRace />,
      title: "Race",
      text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
    },
  ];
  return (
    <div className="container">
      <section>
        <div className="BMI-limitation-container">
          <h2 className="BMI-limitation-title">Limitations of BMI</h2>
          <p className="font_body_m BMI-limitation-text">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
          <ul>
            {limitationsData.map(({ id, svg, title, text }) => (
              <BMILimitationItem key={id} svg={svg} title={title} text={text} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BMILimitation;
