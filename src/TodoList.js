import React, {Component} from 'react';
import TodoItems from './TodoItems';

class TodoList extends Component{

//Function to handle adding tasks    
addTask(event){
    //Get task Value
    let task = this.refs.name.value;

    //Newitem Object
    if(task!==""){
        let newItem = {
            text : task,
            key : Date.now()
        }
        this.setState({
            items : this.state.items.concat(newItem)
        });

      this.refs.name.value = ""; //Blank out the task input box
    }
}

deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}


constructor(props){
super(props);

this.state = {
    items : []
};
this.addTask = this.addTask.bind(this);
this.deleteItem = this.deleteItem.bind(this);
}
render(){
return(
<div className = "todoListMain">
    <div className="header">
        <form>
            <input placeholder="Enter Task" id="name" ref = "name"></input>
            <button type="button" onClick={this.addTask}>Add Task</button>
        </form>
    </div>

    <div className="list">
        <TodoItems  entries = {this.state.items} delete = {this.deleteItem}/>
    </div>
</div>
);
}
}

export default TodoList;