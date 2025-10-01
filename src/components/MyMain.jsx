import movies from "../movies.js";
import { useState, useEffect } from "react";


export default function MyMain(){
    //creo variabile di stato di lista film
    const [moviesList, setMoviesList]= useState(movies);

    //creo variabile di stato per i generi
    const [genres, setGenres] = useState("")

    //creo variabile di stato di lista film filtrata
    const [filteredMovies, setfilteredMovies]= useState(movies);

    //creo lista film filtrata da genere
  useEffect(() => {
    setfilteredMovies(
        moviesList.filter(movie => {
            // se non è stato selezionato alcun genere, tieni tutti i film
            if (genres === "") {
                return true;
            }
            // se il genere del film corrisponde a quello selezionato, tienilo
            if (movie.genre === genres) {
                return true;
            }
            // tutti gli altri film vengono scartati
            return false;
        })
    );
}, [genres, moviesList]);
   
    return(
        <>     
        <select  class="form-select m-3 " aria-label="Default select example"
            value = {genres}
            onChange = {(e)=> setGenres(e.target.value)}>
            <option value="">Genere</option>
            <option value={"Fantascienza"}>Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
        </select>

        <div className="movies-wrapper">
        
        <ul class="list-group m-3">
            {filteredMovies.map((movie, index)=> (
            <li className="list-group-item" key={index}>{movie.title} - {movie.genre}</li>
            ))}  
        </ul>


        </div>
        </>
    );
}