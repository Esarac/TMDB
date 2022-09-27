import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <Card bg='dark' className="text-white">
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Subtitle>{movie.vote_average} ({movie.vote_count})</Card.Subtitle>
                <Card.Text className='text-truncate'>
                    {movie.overview}
                </Card.Text>
                <Link to={`movie/${movie.id}`} >
                    <Button variant="primary">View details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default MovieCard