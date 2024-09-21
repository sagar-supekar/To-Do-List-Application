import React from 'react';

const DeleteConfirmation = ({ taskName, onConfirm, onCancel }) => {
  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ backgroundColor: "red" }}>
            <h5 className="modal-title">Delete</h5>
            <button type="button" className="close" onClick={onCancel} style={{ marginLeft: 'auto' }}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete {taskName}?</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCancel}>No</button>
            <button className="btn btn-danger" onClick={onConfirm}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
