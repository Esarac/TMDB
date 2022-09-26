import axios from 'axios'

let instance = axios.create({
    baseURL:"https://www.themoviedb.org/",
    responseType: "json",
    headers: {'X-Requested-With': 'XMLHttpRequest'}
})

export default instance;