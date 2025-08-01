
export default function App () {

  return (
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
    <div>
    <div><PostComponent /></div>
    <div><PostComponent /></div>
    <PostComponent />
    </div>
    </div>
    </div>
  )
}
  // structuring your app into components
  // Defining a state of your application
const style= {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1}
  function PostComponent() {
    return <div style={style}>
    <div style={{display: "flex"}}>
      <img src="https://images.unsplash.com/photo-1605559911160-a3d95d213904?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9ua2V5fGVufDB8fDB8fHww" style={{
        width: 30,
        height: 30,
        borderRadius: 20
      }} />
      <div style={{fontSize:10 ,marginLeft: 10}}>
        <b>
          100xdevs
        </b>
        <div>23,888 followers</div>
        <div>12m</div>
      </div>

      <div>
        Want to know how to win big? Check out how these folks won $6000 in bounties
      </div>
    </div>
    </div> 
  }
