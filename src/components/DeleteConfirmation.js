// src/components/DeleteConfirmation.jsx
import React from 'react';

const DeleteConfirmation = ({ taskName, onConfirm, onCancel }) => {
  return (
    <div className="container">
        <div className="form-group" style={{border:"1px solid black",width:"40%",textAlign:"center"}}>
            <h2 style={{backgroundColor:"red"}}>Delete</h2>
            <p>Are you sure you want to delete {taskName}?</p>
            <button className="btn btn-success" onClick={onConfirm}>No</button>
            <button className="btn btn-danger" onClick={onConfirm} style={{margin:"5px"}}>Yes</button>
        </div>
    </div>
  );
};

export default DeleteConfirmation;
