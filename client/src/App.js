import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import RecipeNav from './components/pages/RecipeNav';
import ChickenAdobo from './components/pages/recipe-pages/individual-recipes/ChickenAdobo';
import LumpiangShanghai from './components/pages/recipe-pages/individual-recipes/LumpiangShanghai';


export default function App() {
 
return (
  <div>
  <Router> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='recipes' element={<RecipeNav />}/>
            <Route path='/recipes/chicken-adobo' element={<ChickenAdobo /> }/>
            <Route path='/recipes/lumpiang-shanghai' element={<LumpiangShanghai /> }/>
      </Routes> 
    </Router>
  </div>
    
)
};