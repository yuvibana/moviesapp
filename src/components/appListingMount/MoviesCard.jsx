import React, { useEffect, useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SearchMoives from "./SearchMoives";
import { cardPoster } from '../staticImages';

export default function MoviesCard() {
    const [moviesData, setMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1)

    const getMoviesData = async (searchQuery, page) => {
        setIsLoading(true);
        try {
            // const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9280778fc5e92f83f6a82dcf6bcf90e8&query=${searchQuery}&page=${page}`);
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9280778fc5e92f83f6a82dcf6bcf90e8&query=${searchQuery}&page=${page}`);
            const resData = await response.json();
            setMoviesData(resData);
        } catch (error) {
            console.log('fetching error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMoviesData('hollywood');
    }, [])

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
            getMoviesData('hollywood', page - 1);
        }
    }

    const handleNext = () => {
        setPage(page + 1);
        getMoviesData('hollywood', page + 1);
    }

    console.log(moviesData.results);

    return (
        <>
            <div className="flex_div_search_and_heading">
                {moviesData && moviesData.results?.length > 0 ? <div className="movie_headding"> All Movies </div> : <div className="movie_headding"> Movies </div>}

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
                                    <img src={`${data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : `${cardPoster}`} `} alt={data.title} />
                                </div>
                                <h2 className='moviename'>{`${data.title ? `${data.title}` : `Async Movies`} `}</h2>
                                <div className='dataDiv dflex contentBetween'>
                                    <span className='text-sm year'>{data.release_date}</span>
                                    <div className='rightdiv dflex'>
                                        <span className='text-sm tooltip heart'><FaHeart />
                                            <small className='tootltip_text'>{data.vote_average}</small>
                                        </span>
                                        {/* <span className='text-sm eye'><IoEye /></span> */}
                                        <span className='text-sm tooltip star'><FaRegStar />
                                            <small className='tootltip_text'>{data.popularity}</small>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))

                ) : (
                    <h1>No Movies Found</h1>
                )
            )}
            <div className='pagination'
                style={{ width: '100%' }}
            >
                <button className='btn'
                    onClick={handlePrev}
                >Prev Page</button>
                <button className='btn'
                    onClick={handleNext}
                >Next Page</button>
            </div>
        </>
    );
}