import { NavLink } from 'react-router-dom';

const NavLinks = () => {

    return (
        <div> 
            <ul className='navlink-container'>
                <li className='navlink-styles'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='navlink-styles'>
                    <NavLink to='/recipies'>Recipies</NavLink>
                </li>
                <li className='navlink-styles'>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks;