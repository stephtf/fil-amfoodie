import RecipesLinks from "./RecipesLinks";
import AllRecipes from "./recipe-pages/AllRecipes";
import { useState } from 'react';
import Appetizers from "./recipe-pages/Appetizers";
import Ulam from "./recipe-pages/Ulam";
import Meriyenda from "./recipe-pages/Meriyenda";
import Dessert from "./recipe-pages/Dessert";
import Drinks from "./recipe-pages/Drinks";

const Recipes = () => {
    const [currentRecipe, setCurrentRecipe] = useState('AllRecipes');
    const handleRecipeChange = (page) => setCurrentRecipe(page);

    const renderRecipes = () => {
        if(currentRecipe === 'AllRecipes') {
            return <AllRecipes />;
        } 
        if(currentRecipe === 'Appetizers') {
            return <Appetizers />;
        }
        if(currentRecipe === 'Ulam') {
            return <Ulam />; 
        }
        if(currentRecipe === 'Meriyenda') {
            return <Meriyenda />;
        }
        if(currentRecipe === 'Dessert') {
            return <Dessert />;
        }
        if(currentRecipe === 'Drinks') {
            return <Drinks /> 
        }
    }

    return (
        <div className='body-container'>
            <div>
                <RecipesLinks currentRecipe={currentRecipe} handleRecipeChange={handleRecipeChange}/>
            </div>
            {renderRecipes()}
        </div>
    )
}

export default Recipes; 