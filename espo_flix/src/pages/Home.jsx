 import { useState, useEffect } from "react";

  
  //url da api
 const moviesURL = import.meta.env.VITE_API;
//chave da api
 const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
const [topMovies, setTopMovies] = useState([])

const getTopRatedMovies =async (url) => {
 const res = await fetch(url)
 const data =await resp.json()

 console.log(data)
};
 
    return <div>Home</div>;
    
};

export default Home;