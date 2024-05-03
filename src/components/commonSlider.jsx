import React, { } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderData } from "./sliderData";
import 'swiper/css';
import 'swiper/css/pagination';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";


import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <div className='CommonSlider'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {SliderData?.map((data, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <figure className={`sliderimg`} key={index} style={{ lineHeight: '0' }}>
                                <img src={`${data.poster}`} alt={`${data.image}`} />
                            </figure>
                            <div className="contentOverBanner">
                                <span>Duration : {data.duration}</span>
                                <h1 className="MovieName">{data.mname}</h1>
                                <p className='desc'>{data.description} </p>
                                <div className="dflex flexbtn">
                                    <button className="btn dflex itemsCenter"><i><IoPlay /></i> Play</button>
                                    <button className="btn dflex itemsCenter" style={{ background: '#525252' }}><i><IoIosInformationCircleOutline /></i> More Info</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
}
