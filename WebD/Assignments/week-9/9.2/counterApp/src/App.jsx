import React,{useState, useEffect} from 'react';
import './App.css';


export default function App() {

  let [counterVisible, setCounterVisible] = useState(true); // Conditional rendering

  useEffect(function() 
  {
    setInterval(function()
    {
      setCounterVisible(c => !c)
      },5000);
    }, [])
 return  <div>
    {counterVisible ? <Counter></Counter> : null} //Condition rendering
  </div>
}

function Counter() {

  const[count, setCount] = useState(0);
// whenever the count varibale is changing react is calling counter fn everytimemeans react is
// re-rendering
//guard our setInterval from re-renders

  useEffect(function(){
    let clock = setInterval(function(){
      setCount(count => count + 1);
    },1000);

    return function() {
      clearInterval(clock)
    }
  },[])
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