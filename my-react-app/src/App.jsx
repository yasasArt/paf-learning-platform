import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import HomePage from './components/HomePage/HomePage';  // Import HomePage component

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Define the route for the HomePage component */}
        <Route path="/" element={<HomePage />} /> 
      </Routes>
    </div>
  );
}

export default App;
