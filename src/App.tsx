import React from "react";
import HeroHeader from "./components/Hero/HeroHeader";
import HeroCalculatorForm from "./components/Hero/HeroCalculatorForm";
import BMIMeaning from "./components/BMI-meaning/BMIMeaning";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeroHeader />
        <HeroCalculatorForm />
        <BMIMeaning/>
      </div>
    </div>
  );
}

export default App;
