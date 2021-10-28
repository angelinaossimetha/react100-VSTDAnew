import React, { Component } from 'react';
import EditTodo from './EditTodo';
/* 
    1. Edit Button 
    2. Delete Button
    3. Todo Description (Text)
    4. Complete Checkbox
*/
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            description: this.props.description, 
            priority: this.props.priority, 
            completed: this.props.completed,
        }
    }

    render() {

        let thisTodo;
        // condole.log(this.props);
        if (this.props.edit) {
            thisTodo = (
                <div>
                    <EditTodo
                        description={this.props.description}
                        priority={this.props.priority}
                        id={this.props.id} 
                        submitEdit={this.props.submitEdit}
                    />
                </div>
            )
        } else {
            thisTodo = (
                <li className={`list-group-item-${this.props.color}`}>
                    <input
                        type='checkbox'
                        className='completed-todo update-todo-completed'
                        checked={this.props.completed}
                        onClick={() => this.props.toggleCompleted(this.props.id)}
                    ></input>
                    <text>{this.props.description}</text>
                    <button 
                        style={{ height: '24px' }}
                        className='edit-todo btn btn-info pull-right'
                        onClick={() => this.props.editTodo(this.props.id)} >
                        <i className='fa fa-edit' style={{ height: '100%' }}></i>
                    </button>
                    <button 
                        style={{ height: '24px' }}
                        className='delete-todo btn btn-danger pull-right'
                        onClick={() => this.props.deleteTodo(this.props.id)} >
                        <i className='fa fa-trash' style={{ height: '100%' }}></i>
                    </button>
                </li>
            )
        }
        
        return thisTodo;

    }
}

export default TodoItem;
