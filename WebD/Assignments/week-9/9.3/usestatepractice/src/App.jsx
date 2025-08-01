import { useState } from 'react'

function App() {
  return (
    // Apply inline styles to the div element
    <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>

        {/* Call Counter component here to render it in the App component */}
        
        
        {/* Call ToggleMessage component here to render it in the App component */}
        <ToggleMessage />
        <ToggleMessage />
        <ToggleMessage />
    </div>
);

}

const ToggleMessage = () => {
  
  let [isVisible, setIsVisible] = useState(true);

  console.log("re-render");
  function toggle() {
    setIsVisible(!isVisible);
  }    

  return(
    <div>
      <button onClick={toggle}>
        Toggle Message
      </button>
      {isVisible && <p> This message is conditionally rendered! </p>}
    </div>
  );

}

export default App;