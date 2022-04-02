import { NavLink } from 'react-router-dom';

const HamburgerLinks = ({ currentPage, handlePageChange }) => {

    return (
        <div> 
            <ul className='hamlink-container'>
                <li className='nav-styles'>
                    <NavLink to='/' onClick={() => handlePageChange('Home')}>Home</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='/recipies' onClick={() => handlePageChange('Recipies')}>Recipies</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='/about' onClick={() => handlePageChange('About')}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;