import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from './DeleteConfirmation';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Task 1',
      assignedTo: 'User 1',
      status: 'Completed',
      dueDate: '2024-10-12',
      priority: 'Low',
      comments: ['This task is good']
    },
    {
      id: 2,
      name: 'Task 2',
      assignedTo: 'User 2',
      status: 'In Progress',
      dueDate: '2024-09-14',
      priority: 'High',
      comments: ['This task is good']
    },
    {
      id: 3,
      name: 'Task 3',
      assignedTo: 'User 3',
      status: 'Not Started',
      dueDate: '2024-08-18',
      priority: 'Low',
      comments: ['This task is good']
    },
    {
      id: 4,
      name: 'Task 4',
      assignedTo: 'User 4',
      status: 'In Progress',
      dueDate: '2024-06-12',
      priority: 'Normal',
      comments: ['This task is good']
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
    <div className="container-fluid mt-4">
      {/* Navbar */}
      

      <div className="row mt-3">
        {/* Task Table Section */}
        <div className="col-lg-8">
          

          <table className="table table-striped table-bordered">
            <thead>
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
                  <td><input type="checkbox" /></td>
                  <td>{task.assignedTo}</td>
                  <td>{task.status}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.priority}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {task.comments[0]}
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{backgroundColor:"#fee396"}}>
                        <li><button className="dropdown-item" onClick={() => handleEdit(task.id)}>Edit</button></li>
                        <li><button className="dropdown-item" onClick={() => handleDelete(task.id)}>Delete</button></li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
