import React from "react";
import { render, screen } from "@testing-library/react";
import Progress from "./Progress";

test("renders", () => {
  render(<Progress current={1} max={12} />);
  const progressElement = screen.getByTestId("progress");
  expect(progressElement).toBeInTheDocument();
  expect(progressElement).toHaveTextContent("1 / 12");
});
