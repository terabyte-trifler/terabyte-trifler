import { useState } from 'react'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    decription: "Hit the gym regularly",
    done: false,
  },
]);

  function addTodo() {
    let newArray = [...todos];
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true,
    });
    setTodos(newArray);
  }

  return( 
  <div> 
    <input id='title' type="text" placeholder='Title' />
    <input id='description' type="text" placeholder='Description' />
    <br />
    <button onClick={addTodo}>Add to do</button>
    <br />
    {todos.map((todo) => (
      <Todo
        title={todo.title}
        description={todo.description}
        done={todo.done}
      />
    ))}
  </div>
  );

  function Todo(props){
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h3>{props.done ? "Task is done" : "Task is not done"}</h3>
      </div>
    );
  }

}