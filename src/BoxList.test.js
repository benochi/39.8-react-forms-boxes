import React from "react";
import { fireEvent, render } from "@testing-library/react";
import BoxList from "./BoxList";

//function to make new boxlist for testing
function makeBox(boxList, color = "black", height = "10", width = "10"){
  const colorField = boxList.getByLabelText("Background color");
  const heightField = boxList.getByLabelText("Height");
  const widthField = boxList.getByLabelText("Width");
  const button = boxList.getByText("Add a new box!")
  fireEvent.change(colorField, { target: { value: color}});
  fireEvent.change(heightField, { target: { value: height}});
  fireEvent.change(widthField, { target: { value: width}});
  fireEvent.click(button);
}

//smoke test
test('renders without crashing', () => {
  render(<BoxList />);  
});

//snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

//add a box with delete button
it("can add a new box to state", function (){
  const boxList = render(<BoxList />);
  //should not have a delete "X"
  expect(boxList.queryByText("X")).not.toBeInTheDocument();
  makeBox(boxList);
  //Should have a delete "X"
  expect(boxList.queryByText("X")).toBeInTheDocument();
});

//delete a box test
it("can delete a box with the 'X' button", function (){
  const boxList = render(<BoxList />);
  makeBox(boxList);
  expect(boxList.queryByText("X")).toBeInTheDocument();
  const deleteButton = boxList.getByText("X");
  fireEvent.click(deleteButton);
  expect(boxList.queryByText("X")).not.toBeInTheDocument();
});
