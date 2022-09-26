import axios from 'axios'

export const API_KEY = '1862d35d331fa8645823bef7c8acee55';

let instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    responseType: "json",
    headers: {'X-Requested-With': 'XMLHttpRequest'}
})

export default instance;