import React, {Component} from 'react';

class TodoItems extends Component{
constructor(props){
super(props);
this.state = {};

this.listTasks = this.listTasks.bind(this); 
}


delete(key){
    this.props.delete(key);
}

listTasks(item) {
    return <li key={item.key} onClick={() => this.delete(item.key)}>{item.text}</li>
}  
  

render(){
let entries = this.props.entries;
let listItems = entries.map(this.listTasks);

return(
<ul className="theList">
    {listItems}
</ul>
);
}
}

export default TodoItems;