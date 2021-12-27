import React, { useState } from 'react';

function Todo({ thingTodo="thing to do", id='1', remove }) {

  const handleRemove = () => remove(id);

  return (
    <div>
      <li>{thingTodo}</li>
      <button onClick={handleRemove}>X</button>
    </div>
  );  
}

export default Todo;