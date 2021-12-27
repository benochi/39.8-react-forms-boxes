import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

//create form to modify state of todos from empty string to user input. 
function NewTodoForm({ createTodo }) {
  const [thingTodo, setThingTodo] = useState("")

  const handleChange = (e) => {
    setThingTodo(e.target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    //pass input values up to BoxList use uuid for a unique id/key
    createTodo({ thingTodo, id: uuid() });
    //reset fields
    setThingTodo("");
  };
  
  //handle return
  return (
    <div>
      <form onSubmit={handleInput}>
        <label htmlFor="thingTodo">Enter Todo:</label>
        <input 
          id="thingTodo"
          name="thingTodo"
          type="text"
          onChange={handleChange}
          value={thingTodo}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default NewTodoForm;