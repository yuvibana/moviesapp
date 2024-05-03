import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


export default function MoviesCard() {
    const [moviesData, setMoviesData] = useState([]);

    const getMoviesData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=9280778fc5e92f83f6a82dcf6bcf90e8`);
            const resData = await response.json();
            setMoviesData(resData);
        } catch (error) {
            console.log('fetching error:', error);
        }
    };

    useEffect(() => {
        getMoviesData();
    }, []);

    return (
        <>
            {moviesData && moviesData.results?.length > 0 ? (
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {moviesData.results.map((data, index) => (
                        <SwiperSlide className='movieCard' key={index}>
                            {/* <div className='movieCard'> */}
                            <div className='posterdiv'>
                                <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} style={{ width: '200px' }} alt={data.title} />
                            </div>
                            <h2 className='moviename'>{data.title}</h2>
                            <div className='dataDiv dflex contentBetween'>
                                <span className='text-sm year'>{data.release_date}</span>
                                <div className='rightdiv dflex'>
                                    <span className='text-sm heart'><FaHeart /></span>
                                    <span className='text-sm eye'><IoEye /></span>
                                    <span className='text-sm star'><FaRegStar /></span>
                                    <span className='text-sm rating'>{data.vote_average}</span>
                                </div>
                            </div>
                            {/* </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <h1>No Movies Found</h1>
            )}
        </>
    );
}