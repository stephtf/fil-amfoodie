import Appetizers from "./Appetizers";
import Dessert from "./Dessert";
import Drinks from "./Drinks";
import Meriyenda from "./Meriyenda";
import Ulam from "./Ulam";

const AllRecipes = () => {
    return (
        <div className='body-container'>
            <Appetizers />
            <Ulam /> 
            <Meriyenda />
            <Dessert />
            <Drinks />
        </div>   
    )
}

export default AllRecipes; 