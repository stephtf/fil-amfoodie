import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import NavLinks from './NavLinks';
import { useMediaQuery } from 'react-responsive';
import HamburgerLinks from './HamburgerLinks';


const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleButtonClick = () => setToggle(toggle => !toggle);
    const largeScreen = useMediaQuery({ query: '(min-width: 800px)' })

    return (
        <div> 
            <nav>
                <div className='logo-container'>
                    <NavLink to='/'><img className='img-logo' alt='favicon logo' src='/favicon.png'/>
                    </NavLink>
                    <NavLink to='/'><div>
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
            { toggle && <HamburgerLinks />}
        </div>
    )
}

export default Header;

