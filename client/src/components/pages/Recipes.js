import RecipesLinks from "./RecipesLinks";
import AllRecipes from "./recipe-pages/AllRecipes";
import { useState } from 'react';
import Appetizers from "./recipe-pages/Appetizers";
import Ulam from "./recipe-pages/Ulam";
import Meriyenda from "./recipe-pages/Meriyenda";
import Dessert from "./recipe-pages/Dessert";
import Drinks from "./recipe-pages/Drinks";

const Recipes = () => {
    const [menuCategory, setMenuCategory] = useState('AllRecipes');
    const handleMenuChange = (page) => setMenuCategory(page);

    const renderMenu = () => {
        if(menuCategory === 'AllRecipes') {
            return <AllRecipes />;
        } 
        if(menuCategory === 'Appetizers') {
            return <Appetizers />;
        }
        if(menuCategory === 'Ulam') {
            return <Ulam />; 
        }
        if(menuCategory === 'Meriyenda') {
            return <Meriyenda />;
        }
        if(menuCategory === 'Dessert') {
            return <Dessert />;
        }
        if(menuCategory === 'Drinks') {
            return <Drinks /> 
        }
    }

    return (
        <div className='body-container'>
            <div>
                <RecipesLinks menuCategory={menuCategory} handleMenuChange={handleMenuChange}/>
            </div>
            {renderMenu()}
        </div>
    )
}

export default Recipes; 