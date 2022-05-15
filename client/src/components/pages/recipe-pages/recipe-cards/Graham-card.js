import { Link } from 'react-router-dom';
import graham from '../recipe-photos/graham.jpg'

const GrahamCard = () => {

    return (
        <div> 
            <Link to='/recipes/graham'>
            <div className='recipe-cards-container space-below-25'>
                <div className='space-below-10 card-title'>Graham Cake</div>
                <img src={graham} className='card-image' alt='Graham cake with some fruit on top'/>
                <button>View Recipe</button>
            </div>
            </Link>
        </div>
    )
}

export default GrahamCard; 