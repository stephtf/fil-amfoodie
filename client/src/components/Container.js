import { useState } from 'react'; 
import NavLinks from './header/NavLinks';
import Header from './header/Header';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import About from './pages/About';
import { useMediaQuery } from 'react-responsive';
// import HamburgerLinks from './header/HamburgerLinks';

const Container = () => {
    const largeScreen = useMediaQuery({ query: '(min-width: 800px)' })
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page); 


    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Recipies') {
          return <Recipies />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
      };

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {largeScreen && 
            <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />}
            {renderPage()}
        </div>
    )
}

export default Container; 