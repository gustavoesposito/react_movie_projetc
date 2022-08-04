 import { useState, useEffect } from "react";

  
  //url da api
 const moviesURL = import.meta.env.VITE_API;
//chave da api
 const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setTopMovies(data.results);
    };
  
    useEffect(() => {
      const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
      console.log(topRatedUrl);
      getTopRatedMovies(topRatedUrl);
    }, []);
  
    console.log(topMovies);
    return  (
        <div className="container">
            <h2 className="title">Top Movies:</h2>
            <div className="movies-container">
                {topMovies === 0 &&  <p>Carrgando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <p>{movie.title}</p>)}
            </div>
        </div>
     )
    
};

export default Home;