import React, { useState } from 'react';

export default function NewForm({ onAddTask }) {
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const newTask = {
      assignedTo,
      status,
      priority,
      dueDate,
      comments: [description],
    };
    onAddTask(newTask); // Pass new task to TaskList
    // Clear the form after saving
    setAssignedTo('');
    setStatus('');
    setPriority('');
    setDueDate('');
    setDescription('');
  };

  const handleCancel = () => {
    // Clear the form
    setAssignedTo('');
    setStatus('');
    setPriority('');
    setDueDate('');
    setDescription('');
  };

  return (
    <div className="container mt-5" style={{ border: '1px solid black', width: '80%', padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ display: 'block', textAlign: 'center', paddingTop: '10px', marginBottom: '20px' }}>New Task</h1>
      <form onSubmit={handleSave}>
        <div className="form-row my-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="form-group col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <label htmlFor="assignedTo">Assigned to <span style={{ color: 'red' }}>*</span></label>
            <select
              id="assignedTo"
              className="form-control"
              style={{ border: '1px solid black' }}
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              required
            >
              <option>Select User</option>
              <option>User 1</option>
              <option>User 2</option>
              <option>User 3</option>
            </select>
          </div>

          <div className="form-group col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <label htmlFor="status">Status <span style={{ color: 'red' }}>*</span></label>
            <select
              id="status"
              className="form-control"
              style={{ border: '1px solid black' }}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option>Not Selected</option>
              <option>Completed</option>
              <option>In Progress</option>
              <option>Not Started</option>
            </select>
          </div>
        </div>

        <div className="form-row my-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="form-group col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <label htmlFor="priority">Priority <span style={{ color: 'red' }}>*</span></label>
            <select
              id="priority"
              className="form-control"
              style={{ border: '1px solid black' }}
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option>Not Selected</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="form-group col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <label htmlFor="dueDate">Due Date</label>
            <input
              id="dueDate"
              type="date"
              className="form-control"
              style={{ border: '1px solid black' }}
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row my-3">
          <div className="form-group col-md-12">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control"
              style={{ border: '1px solid black', resize: 'vertical' }}
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row mt-4">
          <button type="submit" className="btn btn-success mx-2" style={{ width: '150px' }}>Save</button>
          <button type="button" className="btn btn-danger mx-2" onClick={handleCancel} style={{ width: '150px' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
