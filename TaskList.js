import React from 'react';
import './TaskList.css'; 

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }
    
    handleAddTask = () => {
        const newTask = prompt("Enter a new task:");
        if (newTask) {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }));
        }
    };
    
    handleRemoveTask = (index) => {
        this.setState(prevState => {
        const tasks = [...prevState.tasks];
        tasks.splice(index, 1);
        return { tasks };
        });
    };
    
    render() {
        return (
        <div>
            <h2 className='h2'>Task List</h2>
            <button className='button' onClick={this.handleAddTask}>Add Task</button>
            <ul className='ul'>
            {this.state.tasks.map((task, index) => (
                <li className='li' key={index}>
                {task} <button onClick={() => this.handleRemoveTask(index)}>Remove</button>
                </li>
            ))}
            </ul>
        </div>
        );
    }
}

export default TaskList;