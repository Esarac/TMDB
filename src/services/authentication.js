import axios from '../config/axios'

export function CreateGuessSession(){
    axios.get("/authentication/guest_session/new")
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export function CreateSession(){
    axios.post("/authentication/guest_session/new")
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

