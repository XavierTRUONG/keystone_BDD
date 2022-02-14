import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react';

import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/accueil' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
