import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

//smoke test
it("renders without crashing", function() {
  render(<Todo />);
});

//snapshot tests
it("matches snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

//check single todo delete
it("runs the delete function on button click", function() {
  const removeMock = jest.fn();
  const { getByText } = render(<Todo remove={removeMock} />);
  const deleteButton = getByText("X");
  fireEvent.click(deleteButton);
  expect(removeMock).toHaveBeenCalled();
});