import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import NavLinks from './NavLinks';
import HamburgerLinks from './HamburgerLinks';
import { useMediaQuery } from 'react-responsive';

const Header = ({ currentPage, handlePageChange }) => {
    const largeScreen = useMediaQuery({ query: '(min-width: 800px)' })
    const [toggle, setToggle] = useState(false);
    const handleButtonClick = () => setToggle(toggle => !toggle);

    useEffect(() => {
       setToggle(false);
      }, [currentPage]);

    const aboutComponent = document.getElementsByClassName('about-us')[0];
    const heroImage = document.getElementsByClassName('hero-image')[0];
    const bodyContainer = document.getElementsByClassName('body-container')[0];
    const footer = document.querySelectorAll('footer')[0];

    if(toggle) {
        if(bodyContainer) {
            bodyContainer.style.display = 'none';
        }
        if(aboutComponent) {
            aboutComponent.style.display = 'none';
        }
        if(footer) {
            footer.style.display = 'none';
        }
        if(heroImage) {
            heroImage.style.display = 'none';
        }
    } else {
        if(bodyContainer) {
            bodyContainer.style.display = 'block';
        }
        if(aboutComponent) {
            aboutComponent.style.display = 'block';
        }
        if(footer) {
            footer.style.display = 'block';
        }
        if(heroImage) {
            heroImage.style.display = 'block';
        }
    }

    return (
        <div> 
            <nav>
                <div className='logo-container'>
                    <Link to='/'><img className='img-logo' alt='favicon logo' src='/favicon.png'/></Link>
                    <Link to='/'><div>
                    <h1>fil-am</h1><h2 className='logo-subtitle'>FOODIE</h2>
                    </div></Link>
                </div> 
                { largeScreen ? <NavLinks /> :
                <NavLink to='#' className='hamburger' onClick={handleButtonClick}> 
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                </NavLink>}
            </nav>
            { toggle && <HamburgerLinks handleButtonClick={handleButtonClick}/>}
        </div>
    )
}

export default Header;

