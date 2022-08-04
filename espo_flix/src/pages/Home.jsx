 import { useState, useEffect } from "react";

  
  //url da api
 const moviesURL = import.meta.env.VITE_API;
//chave da api
 const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    console.log(moviesURL, apiKey)

    return(
        <div>Home</div>
    )
}

export default Home;