import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';

export default function App() {
 
return (
  <div>

  <Router> 
      <Routes>
        <Route path='/*' element={<Container />}> 
          <Route exact path='home' element={<Home />} /> 
          <Route path='about' element={<About />} />
          <Route path='recipes' element={<Recipes />}/>
        </Route>
      </Routes> 
    </Router>

  </div>
    
)
};