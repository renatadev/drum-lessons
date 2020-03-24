import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

test("renders the website's title", () => {
  const { getByText } = render(<LandingPage />);
  const title = getByText(/online drum lesson/i);
  expect(title).toBeInTheDocument();
});
