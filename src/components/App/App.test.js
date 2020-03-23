import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the website's title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/online drum lessons/i);
  expect(linkElement).toBeInTheDocument();
});
