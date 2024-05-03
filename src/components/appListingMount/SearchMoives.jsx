import React, { useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchMoives({ getMoviesData }) {
    const [searchQuery, setSearchQuery] = useState('indian')
    const inputRef = useRef()
    const handleSearch = (e) => {
        e.preventDefault();
        getMoviesData(searchQuery)
        inputRef.current?.blur();
    }
    return (
        <form
            onSubmit={handleSearch}
            className='SearchMoivesForm'
        >
            <input
                placeholder='Search Movies'
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={inputRef}
            />
            <button className='searchbtn'><FaSearch /></button>
        </form>
    )
}

export default SearchMoives