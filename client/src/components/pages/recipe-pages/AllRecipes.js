import Appetizers from "./Appetizers";
import Dessert from "./Dessert";
import Drinks from "./Drinks";
import Ulam from "./Ulam";

const AllRecipes = () => {
    return (
        <div className='body-container recipes-space'>
            <Appetizers />
            <Ulam /> 
            <Dessert />
            <Drinks />
        </div>   
    )
}

export default AllRecipes; 