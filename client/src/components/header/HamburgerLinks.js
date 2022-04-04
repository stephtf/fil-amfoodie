import { NavLink } from 'react-router-dom';

const HamburgerLinks = ({ handlePageChange }) => {



    return (
        <div className='hamlink-container'> 
            <ul>
                <li className='nav-styles'>
                    <NavLink to='/' className='ham-link' onClick={() => handlePageChange('Home')}>Home</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='/recipes' className='ham-link' onClick={() => handlePageChange('Recipes')}>Recipes</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink className='ham-link' to='/about' onClick={() => handlePageChange('About')}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;