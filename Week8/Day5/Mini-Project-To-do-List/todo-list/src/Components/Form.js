const Form = (props)=> {
  const {newTodo, updateValue,addNewTodo}=props
  return (
    <div className="box">
      <h1>Melissa's Todo List</h1>
      <input type="text" placeholder="Please type a todo" value= {newTodo} onChange= {updateValue}></input>
      <button onClick= {addNewTodo} className="add-btn">Add</button>
    </div>
  )
  }
  
  export default Form