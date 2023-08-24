import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test App", () => {
  test("test render all sections", () => {
    render(<App />);
    const header: HTMLElement = screen.getByTestId("hero-header");
    const form: HTMLElement = screen.getByTestId("hero-calculator-form");
    const meaning: HTMLElement = screen.getByTestId("bmi-meaning");
    const tips: HTMLElement = screen.getByTestId("bmi-tips");

    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(meaning).toBeInTheDocument();
    expect(tips).toBeInTheDocument();
  });
});
