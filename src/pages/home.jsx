import React, { useEffect, useState } from 'react'
import { GetGenre, GetNowPlaying, GetPopular, GetTopRated } from '../services/movies'
import { GetGenres } from '../services/genres';
import Form from 'react-bootstrap/Form';
import MovieCardGroup from '../components/movieCardGroup';

function Home() {
  //States
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const [listType, setListType] = useState('popular');
  const [genreId, setGenreId] = useState('');

  const [page, setPage] = useState(1);

  //Effects
  useEffect(()=>{
    GetGenres().then((res)=>{
      setGenres(res)
      setGenreId(res[0].id)
    })
  },[])

  useEffect(()=>{
    setPage(1)
    switch(listType){
      case 'popular':
        GetPopular(page)
        .then((res)=>{
          setMovies(res)
        })
        break;
      case 'top_rated':
        GetTopRated(page)
        .then((res)=>{
          setMovies(res)
        })
        break;
      case 'now_playing':
        GetNowPlaying(page)
        .then((res)=>{
          setMovies(res)
        })
        break;
      case 'genre':
        GetGenre(page, genreId)
        .then((res)=>{
          setMovies(res)
        })
        break;
      default:
        GetPopular(page)
        .then((res)=>{
          setMovies(res)
        })
        break;
    }
  },[listType, genreId, page])

  //Components
  const movieGenreSelect = (
    <Form.Select onChange={(e) =>{setGenreId(e.target.value)}}>
        {genres.map((genre) => {
          return(
            <option value={genre.id} key={genre.id}>{genre.name}</option>
          )
        })}
    </Form.Select>
  )

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <Form.Select onChange={(e) =>{setListType(e.target.value)}}>
            <option value='popular'>Popular</option>
            <option value='top_rated'>Top Rated</option>
            <option value='now_playing'>Now Playing</option>
            <option value='genre'>Genre</option>
          </Form.Select>
        </div>
        <div className='col-4'>
          {listType === 'genre' && movieGenreSelect}
        </div>
      </div>
      <MovieCardGroup movies={movies}/>
    </div>
  )
}

export default Home