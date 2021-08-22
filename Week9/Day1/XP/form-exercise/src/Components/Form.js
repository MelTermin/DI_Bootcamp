const Form = (props)=> {
  const {title, author, genre, year_published, handleChange, handleSubmit}=props
 
  return (
    <div>
      <form onSubmit= {handleSubmit}>
        <label>Title:</label>
        <input type="text" name='title' value={title} onChange= {handleChange}  ></input>

        <label>Author:</label>
        <input type="text" name='author'  value={author} onChange= {handleChange}></input>

        <label>Genre:</label>
        <input type="text" name='genre'  value={genre} onChange= {handleChange}></input>
        
        <label>Year Published:</label>
        <input type="text" name='year_published'  value={year_published} onChange= {handleChange}></input>

        <button>Submit</button>
      </form>
      <div id="results"></div>
    </div>
  )
  }
  
  export default Form