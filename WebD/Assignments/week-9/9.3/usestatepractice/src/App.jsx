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
  
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }    

  return(
    <div>
      <button onClick={increment}>
        Increase Count
      </button>
      {notificationCount}
    </div>
  );

}

export default App;