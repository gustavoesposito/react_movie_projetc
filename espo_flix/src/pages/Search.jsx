 import { useState, useEffect,  } from "react";
 //useSearchParams permite oegar a query string  d aURL e utiliza-la como desejo
 import { useSearchParams } from "react-router-dom";
 //componente que exibe dados do filme individualmente
 import MovieCard from "../components/MovieCard";
//minhas url's
 const searchURL = import.meta.env.VITE_SEARCH
 //minha apiKey
 const apiKey = import.meta.env.VITE_API_KEY

 import "./MoviesGrid.css";


 const Search = () => {
    const [searchParams] = useSearchParams();
  
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");
  
    const getSearchedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    };
  
    useEffect(() => {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
      getSearchedMovies(searchWithQueryURL);
    }, [query]);
  
    return (
      <div className="container">
        <h2 className="title">
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  };
  
  export default Search;