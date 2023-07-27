import React from "react";
import HeroHeader from "./components/Hero/HeroHeader";
import HeroCalculatorForm from "./components/Hero/HeroCalculatorForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeroHeader />
        <HeroCalculatorForm />
      </div>
    </div>
  );
}

export default App;
