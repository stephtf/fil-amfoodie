import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import CalamansiCocktailCard from "./recipe-cards/CalamansiCocktail-card";

const Drinks = () => {
    return (
        <div className='content-container'>
            <div className='recipes-wrapper'>
            <ArrowBackIosOutlined /> 
            <div className="card-container">
        <CalamansiCocktailCard />
        </div>
            
            <ArrowForwardIosOutlined /> 
            </div>
        </div>
    )
}

export default Drinks; 