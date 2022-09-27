import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetMovie } from '../services/movies';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieAccordion from '../components/movieAccordion';
import MovieHeader from '../components/movieHeader';
import 'bootstrap-icons/font/bootstrap-icons.css'

function Movie() {
  //States
  const [movie, setMovie] = useState();
  const { id } = useParams()

  //Effects
  useEffect(() => {
    GetMovie(id).then((res) => {
      setMovie(res)
    })
  }, [])

  if (movie)
    return (
      <Container>
        <Row>
          <Col >
            <img className="w-100 mh-100 p-3" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}></img>
          </Col>
          <Col >
            <Row className="gap-3">
              <MovieHeader movie={movie}></MovieHeader>
              <MovieAccordion movie={movie}></MovieAccordion>
            </Row>
          </Col>
        </Row>
      </Container>
    )
}

export default Movie