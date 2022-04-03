import { NavLink } from 'react-router-dom';

const NavLinks = ({ handlePageChange }) => {

    return (
        <div> 
            <ul className='navlink-container'>
                <li className='navlink-styles' >
                    <NavLink to='/' onClick={() => handlePageChange('Home')}>Home</NavLink>
                </li>
                <li className='navlink-styles'>
                    <NavLink to='/recipies' onClick={() => handlePageChange('Recipies')}>Recipies</NavLink>
                </li>
                <li className='navlink-styles'>
                    <NavLink to='/about' onClick={() => handlePageChange('About')}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default NavLinks;

