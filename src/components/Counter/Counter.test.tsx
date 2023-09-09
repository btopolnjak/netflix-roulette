import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

let counter: HTMLElement;
let increaseButton: HTMLButtonElement;
let decreaseButton: HTMLButtonElement;
const initialCounterValue = 200;

afterEach(cleanup);

it("should render a counter with value of 200", () => {
  render(<Counter initialCounterValue={initialCounterValue} />);

  counter = screen.getByText(200);

  expect(counter).toBeInTheDocument();
});

it("should increase value by 1", () => {
  render(<Counter initialCounterValue={initialCounterValue} />);

  counter = screen.getByText(200);
  increaseButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(increaseButton);

  expect(counter).toHaveTextContent("201");
});

it("should decrease value by 1", () => {
  render(<Counter initialCounterValue={initialCounterValue} />);

  counter = screen.getByText(200);
  decreaseButton = screen.getByRole("button", { name: "-" });
  fireEvent.click(decreaseButton);

  expect(counter).toHaveTextContent("199");
});
