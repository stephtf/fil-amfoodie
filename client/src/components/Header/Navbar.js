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
                    <NavLink to='/'><img className='img-logo' alt='favicon logo' src='/favicon.png'/>
                    </NavLink>
                    <NavLink to='/'><h1>fil-am</h1> </NavLink>
                </div>
                <NavLink to='/'>
                <h2>FOOD BLOG</h2>
                </NavLink>

               
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