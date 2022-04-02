import React from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Recipies from './components/pages/Recipies';
import About from './components/pages/About';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

export default function App() {
 
return (
    <Router> 
      <Routes>
        <Route exact path='/' element={<Container />} /> 
        <Route path='/recipies' element={<Recipies />} />
        <Route path='/about' element={<About />} />
      </Routes> 
    </Router>
)
};