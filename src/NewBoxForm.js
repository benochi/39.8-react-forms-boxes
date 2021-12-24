import React, {useState} from 'react';
import { v4 as uuid } from "uuid";

function NewBoxForm({ newBox }){
  //set values to empty strings for State.
  const INITIAL_STATE = {
    backgroundColor: "",
    height: "",
    width: ""
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
   
  

  //track any change to input fields -> onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  //function to handle input from user in React, and prevent default. 
  const handleInput = (e) => {
    e.preventDefault();
    //pass input values up to BoxList use uuid for a unique id/key
    newBox({ ...formData, id: uuid() });
    //reset fields
    setFormData(INITIAL_STATE)
  };
  //Specify the Box’s width, height, and background color.
  return (
    <div>
      <form onSubmit={handleInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            id="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add a new box!</button>
      </form>
    </div>
  );
}

export default NewBoxForm;