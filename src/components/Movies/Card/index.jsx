import {useNavigate} from 'react-router-dom';

function CardMovie (props) {

    const {movie} = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    }

    return ( 
        <div id={movie.id} className="cardMovie" onClick={handleClick}>            
            <span className="movieTitle">{movie.title}</span>
            <img className="moviePoster" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
        </div> 
    )
}

export default CardMovie;