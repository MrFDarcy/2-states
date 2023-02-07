import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import horse from './svg/horse.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';

import { useState } from "react";

import './AnimalShow.css';

const svgMap = {
    bird,
    cat,
    dog,
    horse,
    cow,
    gator,
    heart
};




function AnimalShow({ type }) {


    const [clicks, setClicks] = useState(0);

    const handleClick = () => {

        setClicks(clicks + 1);
    };


    return (
        <div onClick={handleClick} className='animal-show'>
            <img src={svgMap[type]} alt={type} className='animal' />
            <img
                className='heart'
                src={heart}
                alt="heart"
                style={{ width: 10 + clicks * 10 }}
            />

        </div>
    );
}

export default AnimalShow;