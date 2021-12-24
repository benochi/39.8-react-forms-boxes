import React, { useState } from 'react';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  //function to add new box to box array
  const addBox = box => {
    setBoxes(boxes => [...boxes, box]);
  };
  //add a button with the text of of “X” next to each Box. When this button is clicked, remove that specific box. This will require you to pass a function down as props - 
  //the button should not be a separate component
  //function will map all boxes that don't share the id of the box to remove. 
  const removeBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };

  //Map the user input to an object to store in state. 
  const boxProps = boxes.map(box => (
    <Box 
      id={box.id}
      backgroundColor={box.backgroundColor}
      height={box.height}
      width={box.width}
      handleRemoveBox={removeBox}
      key={box.id}
    />
  ));

  //Gets input from <NewBoxForm /> which passes value here.
  //boxProps are placed into the useStatethen <Box /> makes a new box for each obj in the state 
  return (
    <div>
      <NewBoxForm newBox={addBox} />
      {boxProps}
    </div>
  );
}

export default BoxList;