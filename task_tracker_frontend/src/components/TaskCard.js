import React from 'react';
import '../assets/images/styles/TaskCard.css';

const TaskCard = ({ task, onEdit, onDelete, onToggle }) => {
    return (
        <div className="task-card">
            <h3 className={task.completed ? 'completed' : ''}>{task.title}</h3>
            <p className={task.completed ? 'completed' : ''}>{task.description}</p>
            <div className="task-actions">
                <button onClick={() => onToggle(task._id)}>
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task._id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;
