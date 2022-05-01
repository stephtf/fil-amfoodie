import RecipesLinks from "./RecipesLinks";
import AllRecipes from "./recipe-pages/AllRecipes";
import { useState } from 'react';
import Appetizers from "./recipe-pages/Appetizers";
import Ulam from "./recipe-pages/Ulam";
import Dessert from "./recipe-pages/Dessert";
import Drinks from "./recipe-pages/Drinks";
import Header from "../header/Header";
import Footer from "../header/Footer";

const RecipeNav = () => {
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
        if(menuCategory === 'Dessert') {
            return <Dessert />;
        }
        if(menuCategory === 'Drinks') {
            return <Drinks /> 
        }
    }

    return (
        <div>
            <Header />
            <div className='body-container'>
                <div>
                    <RecipesLinks menuCategory={menuCategory} handleMenuChange={handleMenuChange}/>
                </div>
                {renderMenu()}
            </div>
            <Footer />
        </div>
    )
}

export default RecipeNav; 