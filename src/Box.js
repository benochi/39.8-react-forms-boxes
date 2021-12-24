import React from "react";

function Box({
  id,
  backgroundColor = "grey",
  height = 10,
  width = 10,
  handleRemoveBox
}) {
  //give box 'X' the function to remove a box by ID
  const remove = () => handleRemoveBox(id)

  return (
    <div>
      <div style={{
        backgroundColor,
        height: `${height}em`,
        width: `${width}em`
      }}/>
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;