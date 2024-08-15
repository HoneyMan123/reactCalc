import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import { useState } from 'react';
// Home component

// About component
const About = () => <h2>About</h2>;

// Users component
const Users = () => <h2>Users</h2>;

const App = () => {
  return (
    <Router>
      <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'} }>
        <nav >
          <ul >
            <li  >
              <Link   to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculate">Calculate area</Link>
            </li>       
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculate/>} />
        </Routes>
      </div>
    </Router>
  );



}






export default App;
