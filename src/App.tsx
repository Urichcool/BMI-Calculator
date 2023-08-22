import React, { useCallback, useState } from "react";
import HeroHeader from "./components/Hero/HeroHeader";
import HeroCalculatorForm from "./components/Hero/HeroCalculatorForm";
import BMIMeaning from "./components/BMI-meaning/BMIMeaning";
import BMITips from "./components/BMI-tips/BMITips";

function App() {
  const [result, setResult] = useState<number>(0);

  const resultHandler = useCallback(
    (data: number): void => {
      setResult(data);
    },
    [setResult]
  );

  return (
    <div className="App">
      
        <HeroHeader />
        <HeroCalculatorForm resultHandler={resultHandler} />
        <BMIMeaning result={result} />
        <BMITips/>
     
    </div>
  );
}

export default App;
