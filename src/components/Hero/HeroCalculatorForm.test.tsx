import { render, screen, fireEvent } from "@testing-library/react";
import HeroCalculatorForm from "./HeroCalculatorForm";

describe("Test Radio Buttons", () => {
  test("radio-btns-render", () => {
    render(<HeroCalculatorForm />);
    const radioBtns: HTMLElement = screen.getByTestId(
      "hero header calculator radio-buttons"
    );
    expect(radioBtns).toBeInTheDocument();
  });
  test("metric-inputs-render", () => {
    render(<HeroCalculatorForm />);
    const metricBtn: HTMLElement = screen.getByTestId("metric btn");
    expect(metricBtn).toBeChecked();
    const metricInputs: HTMLElement = screen.getByTestId("metric inputs");
    expect(metricInputs).toBeInTheDocument();
  });
  test("imperial-inputs-render", () => {
    render(<HeroCalculatorForm />);
    const imperialBtn: HTMLElement = screen.getByTestId("imperial btn");
    fireEvent.click(imperialBtn);
    expect(imperialBtn).toBeChecked();
    const imperialInputs: HTMLElement = screen.getByTestId("imperial inputs");
    expect(imperialInputs).toBeInTheDocument();
  });
});
