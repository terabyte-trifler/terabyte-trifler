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
// whenever the count varibale is changing react is calling counter fn everytime
  setInterval(function(){
    setCount(count+1);
  },1000)

  /*function increaseCount() {
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function resetCount() {
    setCount(0);
  }*/

  return <div>
    <h1>{count}</h1>
  </div>
}