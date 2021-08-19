import React from 'react';
import Form from "./Components/Form"
import TodoList from './Components/TodoList';
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
    todoItem: [ {id:Math.floor(Math.random()*1000),
      content:"Learn React"}, 
      {id:Math.floor(Math.random()*1000),
      content:"Go get some milk"}
    ],
      newTodo:"", //as I type in the new todo will appear in here
    }

  }

  updateValue= (event) => {
    this.setState({newTodo:event.target.value})

    
  }

  addingNewTodo= () => {
    this.setState({
      todoItem: [
        ...this.state.todoItem,
        {content:this.state.newTodo, id:Math.floor(Math.random()*1000)}
      
      ]
    })
  }  

deleteItem= (id) => {
// console.log(id)
const newList=this.state.todoItem.filter((item) => item.id !== id);

this.setState({
  todoItem:newList
});
}

  render() {
  return (
    <div >
      <Form newTodo= {this.state.newTodo} updateValue= {this.updateValue} addNewTodo= {this.addingNewTodo}></Form>
      <TodoList todoItem= {this.state.todoItem} deleteItem= {this.deleteItem}></TodoList>

    </div>
  );
}
}

export default App;
