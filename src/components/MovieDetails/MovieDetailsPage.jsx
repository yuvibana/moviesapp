import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegStar } from 'react-icons/fa';
import { IoPlay } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { cardPoster } from '../staticImages';

const MovieDetailsPage = () => {
    const { movieid } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=9280778fc5e92f83f6a82dcf6bcf90e8`);
                const data = await response.json();
                setMovieData(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movie data:', error);
                setIsLoading(false);
            }
        };

        fetchMovieData();
    }, [movieid]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!movieData) {
        return <div>Movie not found</div>;
    }

    console.log(movieData);

    return (
        <div className='displayMoveDetail'>
            <div className='flex_div dflex itemsCenter contentBetween'>
                <figure>
                    <img src={`${movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : `${cardPoster}`} `} alt={movieData.title} />
                </figure>
                <div className='movie_detail_div'>
                    <h2 className='movie_name'>{movieData.title}</h2>
                    <p className='overview'>{movieData.overview}</p>
                    <div className='small_flex dflex itemsCenter'>
                        <span className='text-sm year'>{movieData.release_date}</span>
                        <div className='icons'>
                            <span className='text-sm tooltip heart'><FaHeart />
                                <small className='tooltip_text'>{movieData.popularity}</small>
                            </span>
                            <span className='text-sm tooltip star'><FaRegStar />
                                <small className='tooltip_text'>{movieData.vote_average}</small>
                            </span>
                        </div>
                    </div>

                    <button className='btn'><IoPlay /> Watch Now</button>

                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
