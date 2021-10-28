import React, { Component } from "react";
import TodoItem from './TodoItem'
/* 
    1. List of TodoItems
*/

const TodoList= props => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>ToDos:</div>
                {
                    props.todos.map(todo => {
                        console.log(todo.id);
                        return (
                            <TodoItem
                                id={todo.id}
                                // key={todo.id}
                                description={todo.description}
                                priority={todo.priority}
                                completed={todo.completed}
                                edit={todo.edit}
                                color={todo.color}
                                editTodo={this.props.editTodo}
                                submitEdit={this.submitEdit}
                                deleteTodo={this.props.deleteTodo}
                                toggleCompleted={this.props.toggleCompleted}
                            // handleChange={this.handleChange}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TodoList;

// const ViewTodo = props => { 

// }
// export default class TodoList extends Component {
//     render() {


//         {
//             this.props.todos.map(todo => {
//                 console.log(todo);
//                 return (
//                     <TodoItem
//                         id={todo.id}
//                         // key={todo.id}
//                         description={todo.description}
//                         priority={todo.priority}
//                         completed={todo.completed}
//                         edit={todo.edit}
//                         color={todo.color}
//                         editTodo={this.props.editTodo}
//                         deleteTodo={this.props.deleteTodo}
//                         toggleCompleted={this.props.toggleCompleted}
//                     // handleChange={this.handleChange}

//                     />
//                 )
//             })
//         }


//     }
// }