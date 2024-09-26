import Contacts from "../Contacts";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load heading inside contact us component", () => {
  render(<Contacts />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<Contacts />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

//for single input box
test("Should load button inside contact us component", () => {
  render(<Contacts />);
  const input = screen.getByPlaceholderText("Name");
  expect(input).toBeInTheDocument();
});

//for multiple input or tag use below
test("Should load button inside contact us component", () => {
  render(<Contacts />);
  const inputBoxes = screen.getAllByRole("textbox");
  //   expect(inputBoxes).toBeInTheDocument();
  console.log(inputBoxes);
});
