import React, { useState } from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

//render NewTodoForm and list Todo components
function TodoList() {
  const [todos, setTodos] = useState([]);

  //map new array of todos with newtodo added. 
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  // delete a todo by id
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const todoComponents = todos.map(todo => (
    <Todo
      remove={remove}
      key={todo.id}
      id={todo.id}
      thingTodo={todo.thingTodo}
    />
  ));

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );

}

export default TodoList;