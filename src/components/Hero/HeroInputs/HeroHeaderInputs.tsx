import React, {FC} from 'react';
import MetricInputs from './MetricInputs';
import ImperialInputs from './ImperialInputs';

interface IheroHeaderFormInputsProps {
  radioValue: string;
}

const HeroHeaderFormInputs:FC<IheroHeaderFormInputsProps> = ({radioValue}) => {
    return (
        < >
            {radioValue === "metric" ? <MetricInputs/> : <ImperialInputs/>}
        </>
    );
}

export default HeroHeaderFormInputs;