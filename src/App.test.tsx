import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test App", () => {
  test("render all sections", () => {
    render(<App />);
    const header: HTMLElement = screen.getByTestId("hero-header");
    const form: HTMLElement = screen.getByTestId("hero-calculator-form");
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
