import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import GrahamCard from "./recipe-cards/Graham-card";

const Dessert = () => {
    return (
        <div className='content-container'>
            <div className='recipes-wrapper'>
                <ArrowBackIosOutlined /> 
                    <div className="card-container">
                        <GrahamCard />
                    </div>
                <ArrowForwardIosOutlined /> 
            </div>
        </div>
    )
}

export default Dessert; 