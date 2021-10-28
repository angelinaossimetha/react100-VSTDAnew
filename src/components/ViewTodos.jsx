import React, { Component } from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
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
            nextId: 0,
            colors: {
                1: "success",
                2: "warning",
                3: "danger"
            },
        }
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.submitEdit = this.submitEdit.bind(this); 
        this.toggleCompleted = this.toggleCompleted.bind(this); 
    }

    addTodo(description, priority) {
        let newTodo = {
            id: this.state.nextId,
            description,
            priority,
            completed: false,
            edit: false,
            color: this.state.colors[priority]
        }
        let updateId = this.state.nextId + 1;
        this.setState({nextId: updateId});
        this.state.todos.push(newTodo);
        console.log(this.state.todos);
    }

    editTodo(id) {
        // let todosTemp = [...this.state.todos]; 

        // let todo = todosTemp.find(item => item.id == id);
        // todo.edit = !todo.edit; 
        // this.setState({todos : todosTemp});
        
        

        // console.log("todos:", typeof this.state.todos);
        // console.log("id", id);

        let todo = this.state.todos.find(item => item.id == id);
        console.log("todo", todo);
        todo.edit = !todo.edit;

      
    }

    submitEdit(updatedDescription, updatedPriority, id) {
        let todo = this.state.todos.find(item => item.id == id);
        todo.description = updatedDescription;
        todo.priority = updatedPriority;
        todo.edit = false;
    }


    deleteTodo(id) {
        let newTodos = this.state.todos.filter(item => item.id != id); 
        this.setState({ todos: newTodos});
    }

    toggleCompleted(id) {
        // let todosTemp = [...this.state.todos]; 

        // let todo = todosTemp.find(item => item.id == id);
        // todo.completed = !todo.completed; 
        // this.setState({todos : todosTemp}); 



        let todo = this.state.todos.find(todo => todo.id == id);
        todo.completed = !todo.completed;
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
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>View Todos</div>
                                <TodoList
                                    toggleCompleted={this.toggleCompleted}
                                    todos={this.state.todos}
                                    editTodo={this.editTodo}
                                    deleteTodo={this.deleteTodo}
                                    submitEdit={this.submitEdit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        );
    }




}

export default ViewTodos;