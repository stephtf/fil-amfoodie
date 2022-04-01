import { NavLink } from 'react-router-dom';

const HamburgerLinks = () => {

    // const hamburger = document.getElementsByClassName("hamburger")[0]
    // const navlinks = document.getElementsByClassName('navlink-container')[0];
    // hamburger.addEventListener('click',() => {
    //     navlinks.classList.toggle('active'); 
    // }) 

    // useEffect(() => {
    //     if toggle = true
    // }, [])

    return (
        <div> 
            <ul className='hamlink-container'>
                <li className='nav-styles'>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='/recipies'>Recipies</NavLink>
                </li>
                <li className='nav-styles'>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default HamburgerLinks;