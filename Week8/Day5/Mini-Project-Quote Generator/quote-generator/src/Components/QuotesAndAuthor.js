
const QuotesAndAuthor = (props)=> {
const  {quote,author, handleClick,displayColor}=props
  return (
    <div>
      <h1>Quote Generator</h1>
    <div  className="box">
      <h2>{quote}</h2>
      <p> -{author}-</p>
      <button onClick= {handleClick} style= {{color: displayColor}} >Click</button>
      
    </div>
    </div>
  )
  }
  
  export default QuotesAndAuthor