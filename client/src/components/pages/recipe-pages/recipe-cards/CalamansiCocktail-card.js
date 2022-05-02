import { Link } from 'react-router-dom';
import calamansi from '../recipe-photos/calamansi.jpg'

const CalamansiCocktailCard = () => {

    return (
        <div> 
            <Link to='/recipes/calamansi-cocktail'>
            <div className='recipe-cards-container'>
                <div className='space-below-10 card-title'>Calamansi Cocktail<br></br> <small>AKA "Madaling Malasing"</small></div>
                <img src={calamansi} className='card-image' alt='two glasses with calamansi cocktail and metal straws'/>
                
                <button>View Recipe</button>
                
                <div className='space-below-25'></div>
            </div>
            </Link>
        </div>
    )
}

export default CalamansiCocktailCard; 