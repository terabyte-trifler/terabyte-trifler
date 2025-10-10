import { useState } from 'react'
import { PostComponent } from './Post';

function App() {

  const posts = [{
    name:"harkirat",
    subtitle: "11000 followers",
    time: "2m ago",
    image: "",
    description: "What to know how to win big?",
  }]

  function addPost() {

  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
       <button onClick={addPost}>Add Post</button>
       <div style={{display: "flex", justifyContent: "center"}}>
          <div>
            <PostComponent
              name={"harkirat"}
              subtitle={"11000 followers"}
              time={"2m ago"}
              image={""}
              description={"What to know how to win big?"} />
          </div>
       </div>
    </div>
  );
}

export default App