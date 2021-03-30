import Movie from "./Movie.js";
import React, { useState } from "react";
import { getMovies } from "../utils/movieService.js";

const Movies = () => {

    const [data, setData] = useState([]);
    const Button = async() => {
        const movies = await getMovies();
        setData(movies);
    };
    
    return (
        <>
        <button onClick={Button}> Get sanity content </button>
        {data?.length > 0  ? data.map(movie => <Movie title={movie.title} actor={movie.actor} />) : <p>Finn filmer.</p>}
        </>
    )
}
export default Movies;