import React from "react";
import { render } from "@testing-library/react";
import Instructions from "./Instructions";

test("renders the website's title", () => {
  const { getByText } = render(<Instructions />);
  const title = getByText(/Instructions/i);
  expect(title).toBeInTheDocument();
});
