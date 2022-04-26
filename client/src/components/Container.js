import { useState } from 'react'; 
import Header from './header/Header';
import NavLinks from './header/NavLinks';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import About from './pages/About';
import Footer from './header/Footer';
import { useMediaQuery } from 'react-responsive';

const Container = () => {
    const largeScreen = useMediaQuery({ query: '(min-width: 800px)' })
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page); 

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Recipes') {
          return <Recipes />;
        }
        if (currentPage === 'About') {
          return <About />;
        } 
      };

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {largeScreen && 
            <NavLinks handlePageChange={handlePageChange} />}
            {renderPage()}
            <Footer/>
        </div>
    )
}


export default Container; 