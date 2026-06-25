import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonFavorite from "../../Favorites/Button";


function MovieDetail() {

    const {id} = useParams();
    const [movie, setMovie] = useState({});

    useEffect( () => {
        let url = `https://api.themoviedb.org/3/movie/${id}`;
        let apiKey = import.meta.env.VITE_API_KEY;

        fetch(url, {headers: {'Authorization': `Bearer ${apiKey}`}})
        .then( (data) => {
            let json = data.json().then( data => {
                console.log(data);
                setMovie(data);
            });
        })
    }, [])

    return (
        <div className="containerDetail">
            <h1>{movie.title} <ButtonFavorite id={id} /></h1>
            <h3>{movie.release_date}</h3>
            <img className="posterDetail" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
            <p>{movie.overview}</p>
        </div>
    )
}

export default MovieDetail;