import React, { useEffect, useState } from 'react'

function Pagination({
    getMoviesData,
    pages,
    setPage,
    movieCategory
}) {

    const [active, setactive] = useState('active')
    const [disabled, setDisabled] = useState('disabled')


    const handlePrev = () => {
        if (pages > 1) {
            setPage(pages - 1);
            getMoviesData(movieCategory, pages - 1);
        }
    }

    const handleNext = () => {
        setPage(pages + 1);
        getMoviesData(movieCategory, pages + 1);
    }

    useEffect(() => {
        getMoviesData(movieCategory, pages)
    }, []);

    return (
        <div className='pagination'>
            <button className={`btn ${pages > 1 ? '' : active}`}
                onClick={handlePrev}
            >Prev Page</button>
            <button className={`btn`}
                onClick={handleNext}
            >Next Page</button>
        </div>
    )
}

export default Pagination;