import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SearchMoives from "./SearchMoives";

export default function MoviesCard() {
    const [moviesData, setMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getMoviesData = async (searchQuery) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9280778fc5e92f83f6a82dcf6bcf90e8&query=${searchQuery}`);
            const resData = await response.json();
            setMoviesData(resData);
        } catch (error) {
            console.log('fetching error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMoviesData();
    }, []);

    return (
        <>
            <div className="flex_div_search_and_heading">
                <div className="movie_headding"> All Movies </div>
                <SearchMoives getMoviesData={getMoviesData} />
            </div>
            {isLoading ? (
                <h1 className='message_heading'>Loading...</h1>
            ) : (
                moviesData && moviesData.results?.length > 0 ? (

                    moviesData.results.map((data, index) => (
                        <div className='movieCard' key={index}>
                            <Link to={''}>
                                <div className='posterdiv'>
                                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
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
                            </Link>
                        </div>
                    ))
                ) : (
                    <h1>No Movies Found</h1>
                )
            )}
        </>
    );
}