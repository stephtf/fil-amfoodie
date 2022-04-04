import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';

export default function App() {
 
return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<Container />} /> 
        <Route path='/recipes' element={<Container />} />
        <Route path='/about' element={<Container />} />
      </Routes> 
    </Router>
)
};