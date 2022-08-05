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

    

    return(
    <div className="container">
            <h2 className="title">Resultados para <span className="query-text"></span>{query}</h2>
            <div className="movies-container">
                {topMovies === 0 &&  <p>Carrgando...</p>}
            {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}

export default Search;