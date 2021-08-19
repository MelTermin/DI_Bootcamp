const TodoList = (props)=> {
  const {todoItem,deleteItem}=props
  return (
    <div className="results-container">
      <h3>Todo Items</h3>
      {
        todoItem.map((item) => {
          return (//dont forget to return it Melissa!!//
          <div  key= {item.id} className="results">
            <p>{item.content}</p>
          <button onClick= {()=>deleteItem(item.id)} className="delete-btn" >Delete</button>
          </div>)
        })
      }
    </div>
  )
  }
  
  export default TodoList