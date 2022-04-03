import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
// import Recipies from './components/pages/Recipies';
// import About from './components/pages/About';

export default function App() {
 
return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<Container />} /> 
        <Route path='/recipies' element={<Container />} />
        <Route path='/about' element={<Container />} />
      </Routes> 
    </Router>
)
};