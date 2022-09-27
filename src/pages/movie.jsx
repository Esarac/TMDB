import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetMovie } from '../services/movies';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieAccordion from '../components/movieAccordion';
import MovieHeader from '../components/movieHeader';

function Movie() {
  //States
  const [movie, setMovie] = useState();
  const [movieAccordion, setMovieAccordion] = useState()
  const { id } = useParams()
  let companies = []

  //Effects
  useEffect(() => {
    GetMovie(id).then((res) => {
      setMovie(res)
    })
  }, [])


  return (
    <Container>
      <Row>
        <Col>image</Col>
        <Col xs={6}>
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