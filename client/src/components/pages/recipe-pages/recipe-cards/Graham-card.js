import { Link } from 'react-router-dom';
import graham from '../recipe-photos/graham.jpg'

const GrahamCard = () => {

    return (
        <div> 
            <Link to='/recipes/graham'>
            <div className='recipe-cards-container'>
                <div className='space-below-10 card-title'>Graham Cake</div>
                <img src={graham} className='card-image' alt='a pot of adobo'/>
                
                <button>View Recipe</button>
                
                <div className='space-below-25'></div>
            </div>
            </Link>
        </div>
    )
}

export default GrahamCard; 