import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import About from './components/pages/About';
import Home from './components/pages/Home';
import RecipeNav from './components/pages/RecipeNav';
import ChickenAdobo from './components/pages/recipe-pages/individual-recipes/ChickenAdobo';
import LumpiangShanghai from './components/pages/recipe-pages/individual-recipes/LumpiangShanghai';
import CalamansiCocktail from './components/pages/recipe-pages/individual-recipes/CalamansiCocktail';
import Graham from './components/pages/recipe-pages/individual-recipes/Graham';
import Thanks from './components/pages/Thanks';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
 
return (
  <div>
  <ApolloProvider client={client}>
  <Router> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipes' element={<RecipeNav />} />
        <Route path='/thanks' element={<Thanks />} />

        {/* all individual recipe APIs below */}
        <Route path='/recipes/chicken-adobo' element={<ChickenAdobo />} />
        <Route path='/recipes/lumpiang-shanghai' element={<LumpiangShanghai />} />
        <Route path='/recipes/calamansi-cocktail' element={<CalamansiCocktail />} />
        <Route path='/recipes/graham' element={<Graham />} />

      </Routes>
    </Router>
    </ApolloProvider>
  </div>
)
};

