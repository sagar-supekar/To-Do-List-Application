import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmation from './DeleteConfirmation';
import Footer from './Footer';
import Navbar from './Navbar';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    // Sample task data
    { id: 1, name: 'Task 1', assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: ['This task is good'] },
    { id: 2, name: 'Task 2', assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: ['This task is good'] },
    { id: 3, name: 'Task 3', assignedTo: 'User 3', status: 'completed', dueDate: '2024-09-11', priority: 'low', comments: ['Good Challenge'] },
    { id: 4, name: 'Task 4', assignedTo: 'User 4', status: 'In Progress', dueDate: '2024-05-1', priority: 'medium', comments: ['This task is good'] },
    { id: 5, name: 'Task 5', assignedTo: 'User 5', status: 'completed', dueDate: '2024-03-9', priority: 'High', comments: ['Not bad'] },// More tasks...
  ]);

  const [editTask, setEditTask] = useState(null);
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  const handleEdit = (task) => {
    setEditTask(task);  // Set the task to be edited
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

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditTask(null);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTasks = tasks.slice(startIndex, endIndex);
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  return (
    <div className="container-fluid mt-4">
      <Navbar totalPages={totalPages} />
      {/* Task Table Section */}
      <div className="row mt-3">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
          <table className="table table-striped table-bordered table-responsive">
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
              {currentTasks.map(task => (
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
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ backgroundColor: "#fee396" }}>
                        <li><button className="dropdown-item" onClick={() => handleEdit(task)}>Edit</button></li>
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

      {editTask && (
        <EditTaskForm 
          task={editTask} 
          onSave={updateTask} 
          onCancel={() => setEditTask(null)} 
        />
      )}

      {deleteTaskId && (
        <DeleteConfirmation
          taskName={tasks.find(task => task.id === deleteTaskId)?.name}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      {/* Footer with Pagination */}
      <Footer 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

const EditTaskForm = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prevTask => ({ ...prevTask, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label htmlFor="assignedTo"><b>Assigned To</b></label>
                <input 
                  type="text" 
                  name="assignedTo" 
                  className="form-control" 
                  value={editedTask.assignedTo} 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="status"><b>Status</b></label>
                <input 
                  type="text" 
                  name="status" 
                  className="form-control" 
                  value={editedTask.status} 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="dueDate"><b>Due Date</b></label>
                <input 
                  type="date" 
                  name="dueDate" 
                  className="form-control" 
                  value={editedTask.dueDate} 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="priority"><b>Priority</b></label>
                <input 
                  type="text" 
                  name="priority" 
                  className="form-control" 
                  value={editedTask.priority} 
                  onChange={handleChange} 
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
