import React, {FC} from 'react';
import MetricInputs from './MetricInputs';
import ImperialInputs from './ImperialInputs';

interface IheroHeaderFormInputsProps {
  radioValue: string;
  metricDataHandler: (data: { cm: number; kg: number }) => void;
}

const HeroHeaderFormInputs: FC<IheroHeaderFormInputsProps> = ({
  radioValue,
  metricDataHandler,
}) => {
  return (
    <>
      {radioValue === "metric" ? (
        <MetricInputs metricDataHandler={metricDataHandler} />
      ) : (
        <ImperialInputs />
      )}
    </>
  );
};

export default HeroHeaderFormInputs;