import Header from "../header/Header";
import Footer from '../header/Footer';

const Home = () => {
    
    return (
        <div>
            <Header />
            <div className='body-container'>
                <h3>Welcome to our new blog! This is the homepage.</h3>
            </div>
            <Footer /> 
        </div>
    )
}

export default Home; 