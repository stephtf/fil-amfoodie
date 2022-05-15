import Header from "../header/Header";
import Footer from '../header/Footer';
import CalamansiCocktailCard from "./recipe-pages/recipe-cards/CalamansiCocktail-card";
import GrahamCard from "./recipe-pages/recipe-cards/Graham-card";
import buyingtaho from './photos/buyingtaho.jpg';

const Home = () => {
    
    return (
        <div>
            <Header />
            < src={buyingtaho} className='hero-image space-below-25' alt='Steph and Gian buy taho in Baguio'/>
            <div className='body-container'>
                <div className='content-container'>
                <div className='content-wrapper'>
                <h2 className='home-title'>Our Current Favorites</h2>
                <div className='favorites-space'> 
                    <CalamansiCocktailCard />
                    <GrahamCard />
                </div>

            </div>
            </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default Home; 