import { Link } from 'react-router-dom';
import photonamegoeshere from '../recipe-photos/photonamegoeshere.jpg'

const CardNameGoesHere = () => {

    return (
        <div> 
            <Link to='/recipes/lumpiang-shanghai'>
            <div className='recipe-cards-container space-below-25'>
                <div className='space-below-10 card-title'>Recipe Title Goes Here</div>
                <img src={photonamegoeshere} className='card-image' alt='add your alt text description here'/>
                <button>View Recipe</button>
            </div>
            </Link>
        </div>
    )
}

export default CardNameGoesHere; 

// Instructions for creating a new card: 
// 1. Add your photo into the "recipe-photos" folder (src/components/pages/recipe-pages/recipe-photos) and make sure it is labeled recipe.jpg 
// 2. Create a new component in the recipe cards folder. Make sure to use a capital letter or else it won't work. 
// 3. Copy/paste this template
// 4. Import your photo in line 2. Make sure to change the name in the string. Add photo variable name in line 11
// 5. Add alt text to your photo in line 11
// 6. Name the function in lines 4 and 19 (see other examples for format)
// 7. Add recipe title in line 10 
// 8. Now, go to the component for the category that this card belongs to (appetizer, drinks, ulam, etc) and import this card there




