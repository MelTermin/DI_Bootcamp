const MyComponent = ()=> {
  
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

const mySuperStyles= {
  color: "yellow",
  fontSize: "16px",
  fontWeight: "bold",
  border: "1px solid yellow",
  backgroundColor: "black",
  padding: "5px",
  borderRadius: "8px",
  cursor: "pointer",
  margin: "10px"
}

  const list= ["Coffee", "Milk","Tea"]
  return (
    <div className="main-container">
    <header style= {{color:"red", backgroundColor:"lightblue"}}>Hello Style</header>
    <header style={mystyle}>Hello style </header>
    <header className="newStyle">Hello Style</header>
    <h1>This is a header</h1>
    <small>This is a Paragraph</small>
    <a href="/" >This is a link</a>
    <h3>This is a form</h3>
    <p>Enter your name</p>
    <div>
      <input></input>
      <button style= {mySuperStyles}>Submit</button>
    </div>
    <h2>Here is an image</h2>
    <img src={`https://robohash.org/1/size=200x200`} alt='robot'></img>
    <h2>This is a list</h2>
    {
     list.map(item=> {
      return <div> <ul>
        <li>{item}</li>
      </ul>
        </div>
    })
    }
    
    </div>
  )
  }
  
  export default MyComponent