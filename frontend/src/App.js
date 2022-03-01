import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';

import './App.css';

import Home from './pages/Home/home';
import SignIn from './pages/SignIn/signIn';
import NotFound from './pages/NotFound/notFound';



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
