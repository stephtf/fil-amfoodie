import LumpiangShanghaiCard from "./recipe-cards/LumpiangShanghai-card";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { useRef, useState } from 'react';

const Appetizers = () => {
   
    // const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const [slideNumber, setSlideNumber] = useState(0);
    // const [distance, setDistance] = useState('');
    // const handleDistance = (setDistance(listRef.current.getBoundingClientRect().width)) => ()

    const handleArrowClick = (direction) => {
        // console.log(listRef);
        let distance = listRef.current.getBoundingClientRect().width;
        let N = listRef.current.childNodes.length;
        // console.log(N)
        let curr_x = listRef.current.getBoundingClientRect().x;
        // let curr_right = listRef.current.getBoundingClientRect().right;

        
        // console.log(distance);
        console.log('starting as ' + slideNumber);
        
        if(direction === "left" && curr_x < 0) {
            // let move_distance = Math.min(curr_x, distance/N);
            
            listRef.current.style.transform = `translateX(${(-slideNumber*distance/N)+distance/N}px)`;
            // console.log(listRef.current.style.transform);
            // console.log(listRef.current.getBoundingClientRect().x)
            setSlideNumber(slideNumber - 1);

            console.log('ending as ' + slideNumber);

            
        }
        if(direction === "right" && (slideNumber < N)) {
            let newslide = slideNumber + 1;
            setSlideNumber(newslide);
            console.log('ending as ' + slideNumber);
            // console.log(slideNumber);
            // let move_distance = Math.min(curr_right - (curr_right - curr_x),distance/N)
            listRef.current.style.transform = `translateX(${-slideNumber*distance/N}px)`;
            // console.log(listRef.current.style.transform);
            // console.log(listRef.current.getBoundingClientRect().x)
        }

        // console.log(distance/N)

        
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