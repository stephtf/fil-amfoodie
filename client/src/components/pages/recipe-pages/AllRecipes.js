import Appetizers from "./Appetizers";
import Dessert from "./Dessert";
import Drinks from "./Drinks";
import Ulam from "./Ulam";

const AllRecipes = () => {
    return (
        <div>
            <Appetizers />
            <Ulam /> 
            <Dessert />
            <Drinks />
        </div>   
    )
}

export default AllRecipes; 