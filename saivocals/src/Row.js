import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";


const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        
        }

        fetchData();

    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    };

    
    return (
        <div className="RowT">
            <h2>{title}</h2>

            <div className= "row ">
                {movies.map(movie =>
                <img key={movie.id} 
        
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${
                    
                   isLargeRow ?  movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                )}
                </div>
                
              

        </div>
         
        
    )
}

export default Row;
