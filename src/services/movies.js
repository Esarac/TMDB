import axios, {API_KEY} from '../config/axios'

const KEY = 'api_key='+API_KEY;

export async function GetPopular(){
    const res = await axios.get('/movie/popular?'+KEY+'&language=en-US&page=1')

    return res.data.results;
}

export async function GetTopRated(){
    const res = await axios.get('/movie/top_rated?'+KEY+'&language=en-US&page=1')

    return res.data.results;
}

export async function GetNowPlaying(){
    const res = await axios.get('/movie/now_playing?'+KEY+'&language=en-US&page=1')

    return res.data.results;
}

export async function GetGenre(genreId){
    const res = await axios.get('/discover/movie?'+KEY+'&language=en-US&page=1&with_genres='+genreId)

    return res.data.results;
}