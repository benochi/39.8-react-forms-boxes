import React from "react";
import { fireEvent, render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

//smoke test
it("renders without crashing", function() {
  render(<NewTodoForm />);
});

//snapshot tests
it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a new todo", function(){
  //createMock from jest function
  const createMock = jest.fn();
  //make mock todo
  const { getByText } = render(<NewTodoForm createTodo={createMock} />);
  //test create function
  const createButton = getByText("Add Todo");
  fireEvent.click(createButton);
  //test is createMock was called by the form function.
  expect(createMock).toHaveBeenCalled();
})