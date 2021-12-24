import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

//smoke
test('renders without crashing', () => {
  render(<NewBoxForm />);  
});

//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});