import React, { useState } from 'react';

export default function NewForm() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Task saved with due date: ${selectedDate}`);
  };

  const handleCancel = () => {
    alert('Action cancelled');
  };

  return (
    <div className="container mt-5" style={{ border: '1px solid black', width: '80%', padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ display: 'block', textAlign: 'center', paddingTop: '10px', marginBottom: '20px' }}>New Task</h1>
      <form onSubmit={handleSave}>
        <div className="form-row my-3" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="form-group col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <label htmlFor="assignedTo">Assigned to <span style={{ color: 'red' }}>*</span></label>
            <select id="assignedTo" className="form-control" style={{ border: '1px solid black' }} required>
              <option>Select User</option>
              <option>User 1</option>
              <option>User 2</option>
              <option>User 3</option>
            </select>
          </div>

          <div className="form-group col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <label htmlFor="status">Status <span style={{ color: 'red' }}>*</span></label>
            <select id="status" className="form-control" style={{ border: '1px solid black' }} required>
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
            <select id="priority" className="form-control" style={{ border: '1px solid black' }} required>
              <option>Normal</option>
              <option>Low</option>
              <option>High</option>
              <option>Medium</option>
            </select>
          </div>

          <div className="form-group col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <label htmlFor="dueDate">Due Date <span style={{ color: 'red' }}>*</span></label>
            <input
              type="date"
              id="dueDate"
              className="form-control"
              style={{ border: '1px solid black' }}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group my-3 mx-3" style={{ width: '90%' }}>
          <label htmlFor="description">Description <span style={{ color: 'red' }}>*</span></label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            style={{ border: '1px solid black', width: '100%' }}
            placeholder="Enter task description"
            required
          ></textarea>
        </div>

        <div className="form-row my-3" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div className="col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <button type="button" className="btn btn-secondary btn-block" onClick={handleCancel}>
              Cancel
            </button>
          </div>
          <div className="col-md-6 mx-3" style={{ width: '100%', maxWidth: '45%' }}>
            <button type="submit" className="btn btn-primary btn-block">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}