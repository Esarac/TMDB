import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieHeader({ movie }) {

    const movieAge = () => {
        if (movie.adult)
            return ' | +18'
        else
            return ''
    }

    if (movie)
        return (
            <Container>
                <Row>
                    <h1 className='text-white pt-3'><strong>{movie.title}</strong></h1>
                    <p className='text-white'><small>{movie.release_date.split('-')[0] + ' | ' + movie.runtime + ' Minutes' + movieAge()}</small></p>
                </Row>
            </Container>
        )
}

export default MovieHeader