import { NavLink } from 'react-router-dom';

const NavLinks = ({ currentPage, handlePageChange }) => {

    return (
        <div> 
            <ul className='navlink-container'>
                <li className='navlink-styles' >
                    <NavLink to='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'active' : 'inactive'}>Home</NavLink>
                </li>
                <li className='navlink-styles'>
                    <NavLink to='#recipies' onClick={() => handlePageChange('Recipies')} className={currentPage === 'Recipies' ? 'active' : 'inactive'}>Recipies</NavLink>
                </li>
                <li className='navlink-styles'>
                    <NavLink to='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : 'inactive'}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;