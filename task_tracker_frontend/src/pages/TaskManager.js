import React, { useState, useEffect } from 'react';
import '../assets/images/styles/TaskManager.css';

import TaskCard from '../components/TaskCard';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });
    const [editingTask, setEditingTask] = useState(null);
    const [error, setError] = useState('');

    // Fetch tasks from backend
    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tasks', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setTasks(data);
            } else {
                setError(data.message || 'Failed to fetch tasks.');
            }
        } catch (err) {
            setError('An error occurred while fetching tasks.');
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Create a new task
    const createTask = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(newTask),
            });
            const data = await response.json();
            if (response.ok) {
                setTasks([...tasks, data]);
                setNewTask({ title: '', description: '' });
            } else {
                setError(data.message || 'Failed to create task.');
            }
        } catch (err) {
            setError('An error occurred while creating the task.');
        }
    };

    // Update an existing task
    const updateTask = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/tasks/${editingTask._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(editingTask),
            });
            const data = await response.json();
            if (response.ok) {
                setTasks(tasks.map((task) => (task._id === editingTask._id ? data : task)));
                setEditingTask(null);
            } else {
                setError(data.message || 'Failed to update task.');
            }
        } catch (err) {
            setError('An error occurred while updating the task.');
        }
    };

    // Delete a task
    const deleteTask = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (response.ok) {
                setTasks(tasks.filter((task) => task._id !== id));
            } else {
                setError('Failed to delete the task.');
            }
        } catch (err) {
            setError('An error occurred while deleting the task.');
        }
    };

    // Mark a task as completed/incomplete
    const toggleTaskCompletion = async (id) => {
        const task = tasks.find((task) => task._id === id);
        try {
            const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ ...task, completed: !task.completed }),
            });
            const data = await response.json();
            if (response.ok) {
                setTasks(tasks.map((t) => (t._id === id ? data : t)));
            } else {
                setError(data.message || 'Failed to toggle task completion.');
            }
        } catch (err) {
            setError('An error occurred while toggling task completion.');
        }
    };

    return (
        <div className="task-manager-container">
            <h1>Task Manager</h1>
            {error && <p className="error-message">{error}</p>}

            <div className="task-form">
                <form onSubmit={editingTask ? updateTask : createTask}>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={editingTask ? editingTask.title : newTask.title}
                        onChange={(e) =>
                            editingTask
                                ? setEditingTask({ ...editingTask, title: e.target.value })
                                : setNewTask({ ...newTask, title: e.target.value })
                        }
                        required
                    />
                    <textarea
                        placeholder="Task Description"
                        value={editingTask ? editingTask.description : newTask.description}
                        onChange={(e) =>
                            editingTask
                                ? setEditingTask({ ...editingTask, description: e.target.value })
                                : setNewTask({ ...newTask, description: e.target.value })
                        }
                        required
                    />
                    <button type="submit">{editingTask ? 'Update Task' : 'Create Task'}</button>
                    {editingTask && (
                        <button type="button" onClick={() => setEditingTask(null)}>
                            Cancel
                        </button>
                    )}
                </form>
            </div>

            <div className="task-list">
                {tasks.map((task) => (
                    <TaskCard
                        key={task._id}
                        task={task}
                        onDelete={deleteTask}
                        onEdit={() => setEditingTask(task)}
                        onToggle={toggleTaskCompletion}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskManager;
