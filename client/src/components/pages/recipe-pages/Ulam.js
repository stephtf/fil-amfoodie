import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import ChickenAdoboCard from "./recipe-cards/ChickenAdobo-card";

const Ulam = () => {
    return (
        <div className='content-container'>
            <div className='recipes-wrapper'>
            <ArrowBackIosOutlined /> 
            <div className="card-container">
            <ChickenAdoboCard /> 
            </div>
            
            <ArrowForwardIosOutlined /> 
            </div>
        </div>
    )
}
export default Ulam; 
