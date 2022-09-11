import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { MessageSuccess } from "./components/Home/HomeContact";

test("render donate react title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Donate your things/i);
  expect(linkElement).toBeInTheDocument();
});

test("render donate react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /Donate/i });
  expect(linkElement).toBeInTheDocument();
});

test("render success message", () => {
  render(<MessageSuccess />);
  const linkElement = screen.getByText(/Message has been successfully sent/i);
  expect(linkElement).toBeVisible();
});
