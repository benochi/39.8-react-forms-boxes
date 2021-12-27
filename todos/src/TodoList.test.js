import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoList from "./TodoList";

//smoke test
it("renders without crashing", function() {
  render(<TodoList />);
});

//snapshot tests
it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

//function to use in tests for adding todo
function addTodo(todoList, thingTodo="Test todo") {
  const todoInput = todoList.getByLabelText("Enter Todo:");
  const submitButton = todoList.getByText("Add Todo");
  fireEvent.change(todoInput, { target: { value: thingTodo }});
  fireEvent.click(submitButton);
}

it("can add a todo", function(){
  const todos = render(<TodoList />);
  //field should be empty to start
  expect(todos.getByLabelText("Enter Todo:")).toHaveValue("");
  //add todos using function
  addTodo(todos);
  //make sure todo got added
  expect(todos.getByText("Test todo")).toBeInTheDocument();
  //input should reset to empty string
  expect(todos.getByLabelText("Enter Todo:")).toHaveValue("");
  //delete button should display. 
  expect(todos.getByText("X")).toBeInTheDocument();
});

it("can remove a todo", function(){
  const todos = render(<TodoList />);
  expect(todos.getByLabelText("Enter Todo:")).toHaveValue("");
  addTodo(todos);
  //select delete button and click
  fireEvent.click(todos.getByText("X"));
  //check for the test todo in document using QUERYbytext. 
  expect(todos.queryByText("Test todo")).not.toBeInTheDocument();
});