import React from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

export default function App() {
 
return (
    <Router> 
      <Routes>
        <Route exact path="/" element={<Navbar />} /> 
      </Routes> 
    </Router>
)
};