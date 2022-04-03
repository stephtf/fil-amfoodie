import { NavLink } from 'react-router-dom';
import { useState } from 'react'; 
import NavLinks from './NavLinks';
import HamburgerLinks from './HamburgerLinks';
import { useMediaQuery } from 'react-responsive';

const Header = ({ currentPage, handlePageChange }) => {
    const largeScreen = useMediaQuery({ query: '(min-width: 800px)' })
    const [toggle, setToggle] = useState(false);
    const handleButtonClick = () => setToggle(toggle => !toggle);

    return (
        <div> 
            <nav>
                <div className='logo-container'>
                    <NavLink to='/' onClick={() => handlePageChange('Home')}><img className='img-logo' alt='favicon logo' src='/favicon.png'/>
                    </NavLink>
                    <NavLink to='/' onClick={() => handlePageChange('Home')}><div>
                        <h1>fil-am</h1><h2 className='logo-subtitle'>FOOD BLOG</h2>
                    </div></NavLink>
                </div> 
                { largeScreen ? <NavLinks /> :
                <NavLink to='#' className='hamburger' onClick={handleButtonClick}> 
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                </NavLink>}
            </nav>
            { toggle && <HamburgerLinks currentPage={currentPage} handlePageChange={handlePageChange}/>}
        </div>
    )
}

export default Header;

