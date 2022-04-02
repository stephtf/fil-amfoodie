import { Link } from 'react-router-dom';

const NavLinks = ({ currentPage, handlePageChange }) => {

    return (
        <div> 
            <ul className='navlink-container'>
                <li className='navlink-styles' >
                    <Link to='#' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'active' : 'inactive'}>Home</Link>
                </li>
                <li className='navlink-styles'>
                    <Link to='#recipies' onClick={() => handlePageChange('Recipies')} className={currentPage === 'Recipies' ? 'active' : 'inactive'}>Recipies</Link>
                </li>
                <li className='navlink-styles'>
                    <Link to='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : 'inactive'}>About</Link>
                </li>
            </ul>
        </div>
    )
}


export default NavLinks;

