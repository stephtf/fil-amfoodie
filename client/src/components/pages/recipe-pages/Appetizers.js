import LumpiangShanghaiCard from "./recipe-cards/LumpiangShanghai-card";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { useRef, useState } from 'react';

const Appetizers = () => {
   
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleArrowClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x;
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${100 + distance}px)`;
        }
        if(direction === "right" && slideNumber < 10) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-100 - distance}px)`;
        }
    }

    return (
        <div className='content-container'>
            <div className='arrow-container'>
            <ArrowBackIosOutlined onClick={() => handleArrowClick("left")} /> 
            <div className='recipes-wrapper'>
            <div className="card-container" ref={listRef}>
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
                <LumpiangShanghaiCard />
            </div>
            </div>
            <ArrowForwardIosOutlined onClick={() => handleArrowClick("right")}/> 
            </div>
        </div>
    )
}

export default Appetizers; 