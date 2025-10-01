import movies from "../movies.js";
import { useState, useEffect } from "react";


export default function MyMain(){
    //creo variabile di stato di lista film
    const [moviesList, setMoviesList]= useState(movies);
    //creo variabile di stato di lista film filtrata
    const [filteredMovies, setfilteredMovies]= useState(movies);



    return(
        <>
        
         <select class="form-select" aria-label="Default select example">
            <option selected>Genere</option>
            <option value="1">Fantascienza</option>
            <option value="2">Thriller</option>
            <option value="3">Romantico</option>
            <option value="4">Azione</option>
        </select>

        <div className="movies-wrapper">
            <ul>
                {moviesList.map((movie, index)=> (
                <li key={index}>{movie.title}{movie.genre}</li>
            ))}                
            </ul>
        </div>
        </>
    );
}