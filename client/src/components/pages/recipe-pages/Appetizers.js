import LumpiangShanghaiCard from "./recipe-cards/LumpiangShanghai-card";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

const Appetizers = () => {
    return (
        <div className='content-container'>
            <div className='recipes-wrapper'>
            <ArrowBackIosOutlined /> 
            <div className="card-container">
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
            </div>
            
            <ArrowForwardIosOutlined /> 
            </div>
        </div>
    )
}

export default Appetizers; 