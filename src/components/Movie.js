import React from 'react'
import PropTypes from 'prop-types'

const Movie = () => {
    return (
        <a href="#" className="movie">
            <img src="https://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" />

            <div className="movie__title">
                Mad Max: Fury Road
            </div>
            <div className="movie__genre">
                Action
            </div>
        </a>
    )
}

export default Movie;