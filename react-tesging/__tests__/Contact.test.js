import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import '@testing-library/jest-dom'



test("Should load Contat component", () => {

  render(<Contact />)

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();

})

test("should button load contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  const buttonText = screen.getByText("submit");
  expect(buttonText).toBeInTheDocument()

})