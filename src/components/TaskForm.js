import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from './DeleteConfirmation';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Task 1',
      assignedTo: 'User 1',
      status: 'Not Started',
      dueDate: '2024-09-20',
      priority: 'Normal',
      comments: ['Task is good', 'Easy to implement']
    },
    {
      id: 2,
      name: 'Task 2',
      assignedTo: 'User 2',
      status: 'In Progress',
      dueDate: '2024-09-22',
      priority: 'High',
      comments: ['Not hard', 'Manageable workload']
    }
  ]);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-task/${id}`);
  };

  const handleDelete = (id) => {
    setDeleteTaskId(id);
  };

  const confirmDelete = () => {
    setTasks(tasks.filter(task => task.id !== deleteTaskId));
    setDeleteTaskId(null);
  };

  const cancelDelete = () => {
    setDeleteTaskId(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Tasks</h1>
      <style>
        {`
          .dropdown-menu {
            background-color: rgba(255, 204, 0, 0.1); /* Faint yellowish-orange */
          }
          .pagination-btn {
            border: 1px solid #dee2e6; /* Very thin border */
            margin: 0; /* Remove gap between buttons */
          }
        `}
      </style>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th><input type="checkbox" /></th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>
                <input type="checkbox" id={`task-${task.id}`} />
              </td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>
                <div className="d-flex justify-content-between align-items-center">
                  <ul className="list-unstyled me-2">
                    {task.comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id={`dropdown-${task.id}`} data-bs-toggle="dropdown" aria-expanded="false">
                      ▼
                    </button>
                    <ul className="dropdown-menu" aria-labelledby={`dropdown-${task.id}`}>
                      <li><button className="dropdown-item" onClick={() => handleEdit(task.id)}>Edit</button></li>
                      <li><button className="dropdown-item" onClick={() => handleDelete(task.id)}>Delete</button></li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      

      {deleteTaskId && (
        <DeleteConfirmation
          taskName={tasks.find(task => task.id === deleteTaskId)?.name}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default TaskList;
