import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Navlinks from '../Header/Navlinks';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleButtonClick = () => setToggle(toggle => !toggle);

    return (
        <div> 
            <nav>
                <div className='logo-container'>
                    <img className='img-logo' alt='favicon logo' src='/favicon.png'/>
                    <h1>fil-am</h1> 
                </div>
                <h2>FOOD BLOG</h2>
            </nav>
            <NavLink to='#' className='hamburger' onClick={handleButtonClick}> 
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
            </NavLink>
            { toggle && <Navlinks />}
        </div>
    )
}

export default Navbar;