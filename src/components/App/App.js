import { useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home';
import Lab from '../../pages/Lab/Lab';
import About from '../../pages/About/About';


function App() {
  

  return (
    <div className="App">
      <h1>Giphy!</h1>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/lab' element={<Lab />}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
