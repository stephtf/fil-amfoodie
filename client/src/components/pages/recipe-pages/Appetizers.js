import LumpiangShanghaiCard from "./recipe-cards/LumpiangShanghai-card";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { useRef } from 'react';

const Appetizers = () => {
   
    const listRef = useRef();

    const handleArrowClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "right") {
            listRef.current.style.transform = `translateX(${100 + distance}px)`;
        }
        if(direction === "left") {
            listRef.current.style.transform = `translateX(${100 - distance}px)`;
        }
    }

    return (
        <div className='content-container'>
            <div className='recipes-wrapper'>
            <ArrowBackIosOutlined onClick={() => handleArrowClick("left")} /> 
            <div className="card-container" ref={listRef}>
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
            </div>
            
            <ArrowForwardIosOutlined onClick={() => handleArrowClick("right")}/> 
            </div>
        </div>
    )
}

export default Appetizers; 