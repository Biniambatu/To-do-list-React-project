import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<{ text: string; checked: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };
  const handleDeleteTodo = (index:any) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1)
  };
  const handleToggleTodo = (index:any) => {};
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo} >Add</button>
      <ul >
        {todos.map((e, index) => (
           <li key={index} list-style={'none'} >
            <input 
               type="checkbox" 
               checked={e.checked}
               onChange={()=>handleToggleTodo(index)}
               />
            <span>{e.text}</span> 
            <button onClick={()=>handleDeleteTodo(index)}> Delete</button>
           </li> ))}
      </ul>
    </div>
  );
};

export default TodoList;
