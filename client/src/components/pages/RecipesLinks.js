import { NavLink } from 'react-router-dom';  

const RecipesLinks = ({ menuCategory, handleMenuChange }) => {
    
    return (
        <div>
            <div className='body-container'>
                <ul className='recipelinks-container'>
                    <li className='space-below-25'>
                        <NavLink className={ menuCategory === 'AllRecipes' ? 'recipelink-styles active' : 'recipelink-inactive'} to='#all-recipes' onClick={() => handleMenuChange('AllRecipes')}>All Recipes</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ menuCategory === 'Appetizers' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#appetizers' onClick={() => handleMenuChange('Appetizers')}>Appetizers</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ menuCategory === 'Ulam' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#ulam' onClick={() => handleMenuChange('Ulam')}>Ulam</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ menuCategory === 'Dessert' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#dessert' onClick={() => handleMenuChange('Dessert')}>Dessert</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ menuCategory === 'Drinks' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#drinks' onClick={() => handleMenuChange('Drinks')}>Drinks</NavLink>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default RecipesLinks; 