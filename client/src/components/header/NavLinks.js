import { NavLink } from 'react-router-dom';

const NavLinks = ({ handlePageChange }) => {

    return (
        <div> 
            <ul className='navlink-container'>
                <li>
                    <NavLink className='navlink-styles' to='/' onClick={() => handlePageChange('Home')}>Home</NavLink>
                </li>
                <li>
                    <NavLink className='navlink-styles' to='/recipes' onClick={() => handlePageChange('Recipes')}>Recipes</NavLink>
                </li>
                <li>
                    <NavLink className='navlink-styles' to='/about' onClick={() => handlePageChange('About')}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;

