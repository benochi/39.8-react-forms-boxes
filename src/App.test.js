import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//smoke
test('renders without crashing', () => {
  render(<App />);  
});

//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});