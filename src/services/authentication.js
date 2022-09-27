import axios, { API_KEY } from '../config/axios'

const KEY = 'api_key='+API_KEY;

export async function CreateRequestToken(){
    const res = await axios.get("/authentication/token/new?"+KEY);

    return res.data;
}

export async function CreateSession(requestToken){
    const res = await axios.post("/authentication/session/new?"+KEY,
    {
        request_token:requestToken
    })

    return res.data;
}

// export function CreateSession(){
//     axios.post("/authentication/guest_session/new")
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

