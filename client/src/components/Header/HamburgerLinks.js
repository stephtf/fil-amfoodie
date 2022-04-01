import { Link } from 'react-router-dom';

const HamburgerLinks = ({ currentPage, handlePageChange }) => {

    return (
        <div> 
            <ul className='hamlink-container'>
                <li className='nav-styles'>
                    <Link to='#home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'active' : 'inactive'}>Home</Link>
                </li>
                <li className='nav-styles'>
                    <Link to='#recipies' onClick={() => handlePageChange('Recipies')} className={currentPage === 'Recipies' ? 'active' : 'inactive'}>Recipies</Link>
                </li>
                <li className='nav-styles'>
                    <Link to='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active' : 'inactive'}>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;