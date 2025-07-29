import React,{useState} from 'react';
import './App.css';


export default function App() {
 return  <div>
    <b>hi there!</b>
    <Counter></Counter>
  </div>
}

function Counter() {

  const[count, setCount] = useState(0);

  function increaseCount() {
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function resetCount() {
    setCount(0);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={increaseCount}>Reset Count</button>
  </div>
}