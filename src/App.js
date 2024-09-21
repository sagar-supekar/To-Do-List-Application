// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', assignedTo: 'User 1', status: 'Not Started', dueDate: '2024-09-20', priority: 'Normal', description: '' },
    { id: 2, name: 'Task 2', assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-22', priority: 'High', description: '' },
  ]);

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit-task/:id" element={<TaskForm tasks={tasks} setTasks={setTasks} />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
