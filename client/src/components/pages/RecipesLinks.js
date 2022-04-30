import { NavLink } from 'react-router-dom';  

const RecipesLinks = ({ currentRecipe, handleRecipeChange }) => {
    
    return (
        <div>
            <div className='body-container'>
                <ul className='recipelinks-container'>
                    <li className='space-below-25'>
                        <NavLink className={ currentRecipe === 'AllRecipes' ? 'recipelink-styles active' : 'recipelink-inactive'} to='#all-recipes' onClick={() => handleRecipeChange('AllRecipes')}>All Recipes</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ currentRecipe === 'Appetizers' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#appetizers' onClick={() => handleRecipeChange('Appetizers')}>Appetizers</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ currentRecipe === 'Ulam' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#ulam' onClick={() => handleRecipeChange('Ulam')}>Ulam</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ currentRecipe === 'Meriyenda' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#meriyenda' onClick={() => handleRecipeChange('Meriyenda')}>Meriyenda</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ currentRecipe === 'Dessert' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#dessert' onClick={() => handleRecipeChange('Dessert')}>Dessert</NavLink>
                    </li>
                    <li className='space-below-25'>
                        <NavLink className={ currentRecipe === 'Drinks' ? 'recipelink-styles active' : 'recipelink-inactive'}  to='#drinks' onClick={() => handleRecipeChange('Drinks')}>Drinks</NavLink>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default RecipesLinks; 