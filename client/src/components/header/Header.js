import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import NavLinks from './NavLinks';
import HamburgerLinks from './HamburgerLinks';
import { useMediaQuery } from 'react-responsive';

const Header = ({ currentPage, handlePageChange }) => {
    const largeScreen = useMediaQuery({ query: '(min-width: 800px)' })
    const [toggle, setToggle] = useState(false);
    const handleButtonClick = () => setToggle(toggle => !toggle);

    useEffect(() => {
       setToggle(false);
      }, [currentPage]);

    const aboutComponent = document.getElementsByClassName('about-us')[0];
    const bodyContainer = document.getElementsByClassName('body-container')[0];

    if(toggle) {
        if(bodyContainer) {
            bodyContainer.style.display = 'none';
        }
        if(aboutComponent) {
            aboutComponent.style.display = 'none';
        }
    } else {
        if(bodyContainer) {
            bodyContainer.style.display = 'block';
        }
        if(aboutComponent) {
            aboutComponent.style.display = 'block';
        }
    }

    return (
        <div> 
            <nav>
                <div className='logo-container'>
                    {currentPage==='Home' ? <NavLink to='/' onClick={handleButtonClick}><img className='img-logo' alt='favicon logo' src='/favicon.png'/>
                    </NavLink> : <NavLink to='/' onClick={() => handlePageChange('Home')}><img className='img-logo' alt='favicon logo' src='/favicon.png'/></NavLink> }
                    {currentPage==='Home' ? <NavLink to='/' onClick={handleButtonClick}><div>
                    <h1>fil-am</h1><h2 className='logo-subtitle'>FOOD BLOG</h2>
                    </div></NavLink> : <NavLink to='/' onClick={() => handlePageChange('Home')}><div>
                    <h1>fil-am</h1><h2 className='logo-subtitle'>FOOD BLOG</h2>
                    </div></NavLink>}
                </div> 
                { largeScreen ? <NavLinks /> :
                <NavLink to='#' className='hamburger' onClick={handleButtonClick}> 
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                </NavLink>}
            </nav>
            { toggle && <HamburgerLinks handleButtonClick={handleButtonClick} currentPage={currentPage} handlePageChange={handlePageChange}/>}
        </div>
    )
}

export default Header;

