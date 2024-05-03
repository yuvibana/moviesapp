import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderImages1 } from "./SliderImages";

const HandlSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [current]);

    if (!Array.isArray(slides) || slides.length <= 0) return null;

    return (
        <div className="CommonSlider">
            {SliderImages1?.map((data, index) => {
                return (
                    <figure className={index === current ? 'sliderimg active' : 'sliderimg'} key={index} style={{ lineHeight: '0' }}>
                        <img src={`${data.image}`} alt={`${data.image}`} />
                    </figure>
                )
            })}
            {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
        </div>
    )
}
export default HandlSlider;
