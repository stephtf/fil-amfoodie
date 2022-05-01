import { Link } from 'react-router-dom';


const ChickenAdoboCard = ({ handleRecipe }) => {




    return (
        <div> 
            <div className='recipe-cards-container'>
                <div>hello chicken adobo</div>
                <Link to='#chicken-adobo' onClick={() => handleRecipe('ChickenAdobo')}>
                <button>View Recipe</button>
                </Link>
                <div className='space-below-25'></div>
            </div>




        </div>
    )
}

export default ChickenAdoboCard; 