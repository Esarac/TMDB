import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetMovie, GetRateMovie, AddRateMovie, DeleteRateMovie } from '../services/movies';
import MovieAccordion from '../components/movieAccordion';
import MovieHeader from '../components/movieHeader';
import { Button, Col, Row, Container } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { RemoveCircleOutline } from '@mui/icons-material';

function Movie() {
  //States
  const [movie, setMovie] = useState();
  const [rating, setRating] = useState(0);
  const { id } = useParams()

  const [session, setSession] = useState();

  //Effect
  useEffect(() => {
    const sessionId = window.sessionStorage.getItem('session_id')
    
    if(sessionId){
      setSession(sessionId)

      GetRateMovie(id, sessionId)
      .then((res) => {
        if (res.value)
          setRating(res.value)
      })
      .then((err) => {
        console.log(err)
      })
    }
      

    GetMovie(id)
      .then((res) => {
        setMovie(res)
      })
  }, [id])

  //Functions
  function addRating(value) {
    AddRateMovie(id, session, value)
      .then((res) => {
        console.log(res)
        setRating(value)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function deleteRating() {
    DeleteRateMovie(id, session)
      .then((res) => {
        console.log(res)
        setRating(0)
      })
      .then((err) => {
        console.log(err)
      })
  }

  //Component
  function rater(){
    if(session)
      return(
        <div className='d-flex align-items-center text-white'>
          <Button
            className='mx-2'
            onClick={(e) => { deleteRating() }}
            variant="outline-danger"
            disabled={rating === 0}
          >
            <RemoveCircleOutline/>
          </Button>
          <Rating
            size="large"
            value={rating}
            precision={0.5}
            max={10}
            onChange={(e) => {
              addRating(Number(e.target.value))
            }}
          />
        </div>
      )
    return(<div className='text-white'>Log in to rate the movie</div>)
  }


  return (
    <Container>
      {movie &&
      <Row>
        <Col >
          <img className="w-100 p-3" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt='movie_poster'></img>
        </Col>
        <Col >
          <Row className="gap-3">
            <MovieHeader movie={movie}></MovieHeader>
            {rater()}
            <MovieAccordion movie={movie}></MovieAccordion>
          </Row>
        </Col>
      </Row>
      }
    </Container>
  )
}

export default Movie