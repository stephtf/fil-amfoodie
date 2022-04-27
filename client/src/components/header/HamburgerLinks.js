import { NavLink } from 'react-router-dom';

const HamburgerLinks = ({ handleButtonClick, currentPage, handlePageChange }) => {

    return (
        <div className='hamlink-container'> 
            <ul>
                <li className='nav-styles'>
                    {currentPage ==='Home' ? <NavLink to='/' className='ham-link' onClick={handleButtonClick}>Home</NavLink> : <NavLink to='/' className='ham-link' onClick={() => handlePageChange('Home')}>Home</NavLink> }
                </li>
                <li className='nav-styles'>
                    {currentPage ==='Recipes' ? <NavLink to='/recipes' className='ham-link' onClick={handleButtonClick}>Recipes</NavLink> : <NavLink to='/recipes' className='ham-link' onClick={() => handlePageChange('Recipes')}>Recipes</NavLink>}                    
                </li>
                <li className='nav-styles'>
                    {currentPage ==='About' ? <NavLink className='ham-link' to='/about' onClick={handleButtonClick}>About</NavLink> : <NavLink className='ham-link' to='/about' onClick={() => handlePageChange('About')}>About</NavLink>}
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;