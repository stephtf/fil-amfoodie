import { NavLink } from 'react-router-dom';

const NavLinks = () => {

    return (
        <div> 
            <ul className='navlink-container'>
                <li>
                    <NavLink className='navlink-styles' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='navlink-styles' to='/recipes'>Recipes</NavLink>
                </li>
                <li>
                    <NavLink className='navlink-styles' to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;

