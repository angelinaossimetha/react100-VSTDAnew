import React, { Component } from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
/* 
    1. When there are NO todos => Static message
    2. Otherwise TodoList Component 
    3. data and methods should go here
*/
class ViewTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
        let colors = {
            '0': "success",
            '1': "warning",
            '2': "danger"
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(description, priority, id) {
        let newTodo = {
            id,
            description,
            priority,
            completed: false,
            edit: false,
            color: this.state.colors[priority]
        }
        this.state.todos.push(newTodo);
    }


    render() {
        return (
            <div className='container'>
                <Header />
                <div className='row'>
                    <div className='col-md-4'>
                        <AddTodo
                            addTodo={this.addTodo}
                        />
                    </div>
                </div>

            </div>




        );
    }




}

export default ViewTodos;