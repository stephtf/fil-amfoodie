import { NavLink } from 'react-router-dom';

const HamburgerLinks = ({ currentPage, handlePageChange }) => {

    return (
        <div> 
            <ul className='hamlink-container'>
                <li className='nav-styles'>
                    <NavLink to='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'active' : 'inactive'}>Home</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='#recipies' onClick={() => handlePageChange('Recipies')} className={currentPage === 'Recipies' ? 'active' : 'inactive'}>Recipies</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : 'inactive'}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;