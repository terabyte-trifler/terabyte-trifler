import {useState, useEffect} from 'react';

//useEffect, dependency array, cleanups

export default function App() {
  const[count, setCount] = useState(0);

  return <div>
    <Counter count ={count} />
    <button onClick={increase}>Increase Count</button>

  </div>

}


// mounting, re- rendering, unmounting
function Counter(props) {

  useEffect(function() {
    console.log("mount");

    return function()
    {
      console.log("unmount");
    }
  }, []);

  return <div>
    Counter {props.count}
  </div>

}