import React from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Recipies from './components/Recipies';
import About from './components/About';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

export default function App() {
 
return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/recipies' element={<Recipies />} />
        <Route path='/about' element={<About />} />
      </Routes> 
    </Router>
)
};