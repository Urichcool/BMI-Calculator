import { render, screen, fireEvent } from "@testing-library/react";
import HeroCalculatorForm from "../HeroCalculatorForm";

describe("input test", () => {
  test("error-test", () => {
    render(<HeroCalculatorForm />);
    const input: HTMLElement[] = screen.getAllByTestId("input");
    fireEvent.input(input[0], { target: { value: "1234" } });
    const errorText = screen.getAllByTestId("error text");
    expect(input[0]).toHaveStyle({ borderColor: "red" });
    expect(errorText[0]).toHaveTextContent("Please enter a valid value");
  });
});
