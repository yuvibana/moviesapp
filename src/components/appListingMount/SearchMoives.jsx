import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchMoives({
    getMoviesData,
    pages,
    movieCategory,
    setMovieCategory
}) {
    const [searchQuery, setSearchQuery] = useState('all')
    const inputRef = useRef()
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        getMoviesData(searchQuery, pages);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        getMoviesData(searchQuery, pages);
        inputRef.current?.blur();
    }

    return (

        <div className='searchMovies_div'>
            <div className='filter_btns_div'>
                <button onClick={() => { getMoviesData(setMovieCategory('hollywood'), pages) }}>Hollywood</button>
                <button onClick={() => { getMoviesData(setMovieCategory('bollywood'), pages) }}>Bollywood</button>
                <button onClick={() => { getMoviesData(setMovieCategory('latest'), pages) }}>Latest Realesd</button>
            </div>
            <form
                onSubmit={handleSearch}
                className='SearchMoivesForm'
            >
                <input
                    placeholder='Search Movies'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='searchbtn'><FaSearch /></button>
            </form>
        </div>
    )
}

export default SearchMoives