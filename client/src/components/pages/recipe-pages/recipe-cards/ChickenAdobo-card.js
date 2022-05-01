import { Link } from 'react-router-dom';
import adobo from '../recipe-photos/adobo.jpg'

const ChickenAdoboCard = ({ handleRecipe }) => {

    return (
        <div> 
            <Link to='/recipes/chicken-adobo'>
            <div className='recipe-cards-container'>
                <div className='space-below-10 card-title'>Chicken Adobo</div>
                <img src={adobo} className='card-image'/>
                
                <button>View Recipe</button>
                
                <div className='space-below-25'></div>
            </div>
            </Link>
        </div>
    )
}

export default ChickenAdoboCard; 
