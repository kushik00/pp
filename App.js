import React from 'react';
import './App.css';
import CounterClass from './CounterClass'; 
import TaskList from './TaskList'; 

function App() {
  return (
    <div className="App">
      <h1>React Lesson: Class Components</h1>
      <CounterClass />
      <TaskList />
    </div>
  );
}

export default App;
