import { NavLink } from 'react-router-dom';

const HamburgerLinks = () => {

    return (
        <div className='hamlink-container'> 
            <ul>
                <li className='nav-styles'>
                    <NavLink to='/' className='ham-link'>Home</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='/recipes' className='ham-link'>Recipes</NavLink>                    
                </li>
                <li className='nav-styles'>
                    <NavLink className='ham-link' to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;