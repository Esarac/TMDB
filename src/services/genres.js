import axios, {API_KEY} from '../config/axios'

const KEY = 'api_key='+API_KEY;

export async function GetGenres(){
    const res = await axios.get('/genre/movie/list?'+KEY+'&language=en-US')

    return res.data.genres;
}