import React, { useCallback, useState } from "react";
import HeroHeader from "./components/Hero/HeroHeader";
import HeroCalculatorForm from "./components/Hero/HeroCalculatorForm";
import BMIMeaning from "./components/BMI-meaning/BMIMeaning";

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
      <div className="container">
        <HeroHeader />
        <HeroCalculatorForm resultHandler={resultHandler} />
        <BMIMeaning result={result} />
      </div>
    </div>
  );
}

export default App;
