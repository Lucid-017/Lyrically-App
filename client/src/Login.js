import React from "react";
import Dashboard from "./Dashboard";
// import { Link } from "react-router-dom";
// (%20) is a way of creating space in the list of scopes
// const CLIENT_ID = '66bce91f242647eeade679d4477e136b'
// const REDIRECT_URI = "http://localhost:3000"
// const RESPONSE_TYPE = 'code'
// const RESPONSE_SCOPE = 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state'
// const AUTH_URL =`https://accounts.spotify.com/authorize`;
  const AUTH_URL =
  `https://accounts.spotify.com/authorize?client_id=66bce91f242647eeade679d4477e136b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
// scope accesses streaming
// accesses user email,user read private which are required scopes to access user info
// user-library-read which will determine if a song is in user's favourite libary
// user-library-modify we can now add songs to user favourites
// user-read-playback-state allows us to figure out if the user is playing any songs and figure out waht songs they play
// user-modify-playback-state allows us to modify the songs that are currently playing
//
// get Auth code from url
const code = new URLSearchParams(window.location.search).get('code');
// window.location.search gets us the paramaters after the "?" then .get()access the code by the name of the parameter

export default function Login() {
  return code ? 
    <Dashboard code={code}/>:
    <div className="">
      {/* <a href={`${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="text-xl text-white btn bg-blue-500 p-5">
          Login
      </a> */}
      <a href={AUTH_URL} className="text-xl text-white btn bg-blue-500 p-5">
          Login
      </a>
    </div>;
}
/**
Supplying an access token is required for all requests to the Spotify API. This wrapper supports three authorization flows - The Authorization Code flow (signed by a user), the Client Credentials flow (application authentication - the user isn't involved), and the Implicit Grant Flow (For completely clientside applications). See Spotify's Authorization guide for detailed information on these flow */