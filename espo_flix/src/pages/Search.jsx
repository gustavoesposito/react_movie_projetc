 import { useState, useEffect,  } from "react";
 //useSearchParams permite oegar a query string  d aURL e utiliza-la como desejo
 import { useSearchParams } from "react-router-dom";
 //componente que exibe dados do filme individualmente
 import MovieCard from "../components/MovieCard";

 const searchURL = import.meta.env.VITE_SEARCH

const Search = () => {
    return(
        <div>Search</div>
    )
}

export default Search;