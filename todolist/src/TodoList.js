import React from 'react';
import List from './List.js';



class TodoList extends React.Component{
    state = {todos : [],
            inputValue : ''};    

    pushInput = () =>{
        // this.state.todos.push({content: this.state.inputValue, status: false});
        if (this.state.inputValue !== ''){
            this.setState({todos : [... this.state.todos, {content: this.state.inputValue, status: false}]});
        }
   }

   handleInput = (event) =>{
       
        this.setState({inputValue : event.target.value});
    }   

    render(){
        return (
    <div>
        <div>
            <input className="input-text" type="text" onChange ={this.handleInput} />
            <button className="addButton" onClick = {this.pushInput}>Add</button>
        </div>
        <ol>
            <List todos = {this.state.todos}/>
        </ol>
    </div>
        );
    }


}

export default TodoList;
