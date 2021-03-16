import React, { useState } from "react";
import { getMovies } from "../utils/movieService.js";
import Movie from "./Movie.js";

const Movies = () => {

    const [data, setData] = useState([]);
    const Button = async() => {
        const movies = await getMovies();
        setData(movies);
    };
    return (
        <>
        <button onClick={Button}> Get sanity content </button>
        {data?.length > 0  ?<p>{JSON.stringify(data)}</p> : null}
        <Movie/>
        </>
    )
}
export default Movies;