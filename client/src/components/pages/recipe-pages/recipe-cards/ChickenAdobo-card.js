import { Link } from 'react-router-dom';
import adobo from '../recipe-photos/adobo.jpg'

const ChickenAdoboCard = () => {

    return (
        <div> 
            <Link to='/recipes/chicken-adobo'>
            <div className='recipe-cards-container space-below-25'>
                <div className='space-below-10 card-title'>Chicken Adobo</div>
                <img src={adobo} className='card-image' alt='a pot of adobo'/>
                <button>View Recipe</button>
            </div>
            </Link>
        </div>
    )
}

export default ChickenAdoboCard; 
