import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Render name of project", () => {
  const { getByText } = render(<App />);
  const header = getByText(/Node + React Template/i);
  expect(header).toBeInTheDocument();
});
