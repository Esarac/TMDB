import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function MovieHeader({ movie }) {
    if (movie)
        return (
            <Container>
                <Row className="gap-2">
                    <h1>{movie.title}</h1>
                    {/* <h4>{movie?.production_companies?.[0]}</h4> */}
                </Row>
            </Container>
        )
}

export default MovieHeader