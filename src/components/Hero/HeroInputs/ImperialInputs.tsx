import React, { FC, useEffect, useState } from "react";
import Input from "./Input";

interface IImperialInputsProps {
  imperialDataHandler: (data: {
    st: number;
    lbs: number;
    ft: number;
    inch: number;
  }) => void;
}

const ImperialInputs: FC<IImperialInputsProps> = ({ imperialDataHandler }) => {
  const [ft, setFt] = useState<number>(0);
  const [inch, setInch] = useState<number>(0);
  const [st, setSt] = useState<number>(0);
  const [lbs, setLbs] = useState<number>(0);

  const ftHandler = (data: number): void => {
    setFt(data);
  };

  const inchHandler = (data: number): void => {
    setInch(data);
  };

  const stHandler = (data: number): void => {
    setSt(data);
  };

  const lbsHandler = (data: number): void => {
    setLbs(data);
  };

  useEffect(() => {
    imperialDataHandler({st, lbs, ft, inch})
  }, [ft, inch, st, lbs, imperialDataHandler])

  return (
    <>
      <div className="hero-header-form-imperic-inputs-container">
        <Input
          units={"ft"}
          className="hero-header-form-imperic-inputs"
          label="Height"
          dataHandler={ftHandler}
        />

        <Input
          units={"in"}
          className="hero-header-form-imperic-inputs"
          dataHandler={inchHandler}
        />
      </div>
      <div className="hero-header-form-imperic-inputs-container">
        <Input
          units={"st"}
          className="hero-header-form-imperic-inputs"
          label="Weight"
          dataHandler={stHandler}
        />

        <Input
          units={"lbs"}
          className="hero-header-form-imperic-inputs"
          dataHandler={lbsHandler}
        />
      </div>
    </>
  );
};

export default ImperialInputs;
