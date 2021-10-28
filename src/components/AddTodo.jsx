import React, { Component } from 'react';
/* 
    1. Input element text w/t label to insert task 
    2. Dropdown element w/t label to select prioity level 
    3. Button to Add new TodoItem to TodoList 
*/
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            description: '',
            priority: '0'
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        // event.preventDefault();
        this.props.addTodo(this.state.description, this.state.priority, this.state.id);
        let newId = this.state.id + 1;
        this.setState({ description: '', priority: '0', id: newId });
    }

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='card-title'>Add a new Todo</div>
                    <div className='form-group'>
                        <label htmlFor='description'>I want to...</label>
                        <textarea
                            value={this.state.description}
                            onChange={this.handleChange}
                            className='create-todo-text'
                            name='description'></textarea>
                        <label htmlFor='priority' style={{ paddingRight: '5px' }}> How much of a priority if this?</label>
                        <select
                            value={this.state.priority}
                            name='priority'
                            className='create-todo-priority'
                            onChange={this.handleChange}>
                            <option defaultValue>Select priority</option>
                            <option value='1'>Low Priority</option>
                            <option value='2'>Medium Priority</option>
                            <option value='3'>High Priority</option>
                        </select>
                        <button className='create-todo btn btn-success btn-block'
                            name='button'
                            type='submit'
                            onSubmit={this.onSubmit}
                        >Add</button>
                    </div>
                </div>
            </div>
        );
    }
}




export default AddTodo;