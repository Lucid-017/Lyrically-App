// run our dashboard logic using a custim hook
import { useEffect,useState} from "react";
import axios from 'axios';

export default function useAuth(code) {
    // we want to store our credentials we have in our server
    const [accessToken,setAccessToken] =useState()
    const [refreshToken,setRefreshToken] =useState()
    const [expiresIn,setExpiresIn] =useState()

    // now to get those data, we'll use useEffect to access that data
    useEffect(()=>{
        // use axios to run a post function to our server and then return out code as data
        axios.post('http://localhost:3001/login',{
            code,
        })
        .then(res=>{
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            // window.history.pushState("","",'/')
        }).catch((err)=>{
            console.log(err.message)
            // window.location='/'
        })
    },[code])//render changes only when the code changes

    // // creating a custom function that refreshes our token
    // useEffect(()=>{
    //     // should only run in any case our refresh token and expires-in are undefiend
    //     if(!refreshToken || !expiresIn) return
    //     const interval = setInterval(() => {
    //         axios.post('http://localhost:3001/refresh',{refreshToken})
    //             .then(res=>{
    //                 // we only need to access our access token and expires in
    //                 setAccessToken(res.data.accessToken)
    //                 setExpiresIn(res.data.expiresIn)
    //             }).catch((err)=>{
    //                 console.log(err)
    //                 // window.location='/'
    //             })
    //     }, (expiresIn -60)*1000)//convert the seconds to milling seconds and then set the timeout a minute b4 the expiresIn;
    //     // in case of error we'll abort the setTimeout
    //     return ()=> clearInterval(interval);
    // },[refreshToken,expiresIn])


    return accessToken
}


