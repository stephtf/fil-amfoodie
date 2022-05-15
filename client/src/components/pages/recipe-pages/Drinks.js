import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import CalamansiCocktailCard from "./recipe-cards/CalamansiCocktail-card";
import { useEffect, useRef, useState } from 'react';

const Drinks = () => {
    const listRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const handleArrowClickLeft = () => setSlideNumber(Math.max(0,slideNumber - 1));
    const handleArrowClickRight = () => setSlideNumber(slideNumber + 1);
    
    useEffect(() => {
        let distance = listRef.current.getBoundingClientRect().width;
        let N = listRef.current.childNodes.length;
        console.log(slideNumber);

        if (slideNumber >= N) {
            setSlideNumber(0);
        } 
        if(slideNumber > 0 && slideNumber < N) {
            listRef.current.style.transform = `translateX(${(-slideNumber*distance/N)+distance/N}px)`;
        }
        if(slideNumber < N) {
            listRef.current.style.transform = `translateX(${-slideNumber*distance/N}px)`;
        }
    }, [slideNumber]);

    return (
        <div className='content-container'>
            <div className='arrow-container'>
            <ArrowBackIosOutlined onClick={handleArrowClickLeft} /> 
            <div className='recipes-wrapper'>
            <div className="card-container" ref={listRef}>
                <CalamansiCocktailCard />
            </div>
            </div>
            <ArrowForwardIosOutlined onClick={handleArrowClickRight}/> 
            </div>
        </div>
    )
}

export default Drinks; 