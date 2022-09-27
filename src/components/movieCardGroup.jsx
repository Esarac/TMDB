import React from 'react'
import MovieCard from './movieCard'

function MovieCardGroup({movies}) {
    const movieItems = movies.map((movie) => {
        return (
            <div className='col-12 col-md-6 col-lg-3 my-3' key={movie.id}>
                <MovieCard movie={movie} />
            </div>
        )
    })

    return (
        <div className='row'>
            {movieItems}
        </div>
    )
}

export default MovieCardGroup