import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import IMovie, { IFavouriteMovie } from "../../models/IMovie";
import { deleteFavouriteMovie, postNewFavouriteMovie } from "../../services/Movie";
import { faHeart, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from "react";

interface IMovieCardModel {
    favMovies?: string[],
    movie: IMovie
}

const baseURL = process.env.REACT_APP_BASE_URL;

const MoviesInTheatersItem = ({ favMovies, movie }: IMovieCardModel) => {
    const movieType = window.location.pathname;

    let variantText: string = 'outline-warning';
    let clickable: boolean = false;
    let icon: any = <FontAwesomeIcon icon={faHeart} />;

    if(favMovies?.includes(movie.title)){
        icon = <span style={{fontWeight: "bold"}}>Favourited!</span>;
        variantText = 'secondary';
        clickable = true;
    }
    
    const [btnVariant, setBtnVariant] = useState<string>(movieType === "/favourite" ? 'outline-danger' : variantText);
    const [disable, setDisable] = useState<boolean>(clickable);
    const [favBtnIcon, setfavBtnIcon] = useState(movieType === "/favourite" ? <FontAwesomeIcon icon={faXmark} /> : icon);
    
    const disableFavBtn = () => {
        setBtnVariant('secondary');
        setfavBtnIcon(<span style={{fontWeight: "bold"}}>Favourited!</span>);
        setDisable(true);
    }
    
    const handleFavouriteClick = async () => {
        disableFavBtn();

        const newFavMovie: IFavouriteMovie = {
            title: movie.title,
            year: movie.year,
            genres: movie.genres,
            ratings: movie.ratings,
            poster: movie.poster,
            contentRating: movie.contentRating,
            duration: movie.duration,
            releaseDate: movie.releaseDate,
            averageRating: movie.averageRating,
            storyline: movie.storyline,
            actors: movie.actors,
            imdbRating: movie.imdbRating
        }

        if (movieType === "/favourite") {
            setfavBtnIcon(<span style={{fontWeight: "bold"}}>Removed!</span>);
            await deleteFavouriteMovie(movie);
            window.location.reload();
        } else {
            await postNewFavouriteMovie(newFavMovie);
        }
    }

    return ( 
        <Card style={{width: '238px'}}>
            <Card.Img variant="top" src={baseURL + movie.poster} alt="Poster" style={{height: '350px'}} />
            <Card.Body>
                <Card.Title className="text-truncate" style={{paddingBottom: '8px'}}>{movie.title}</Card.Title>
                <div className="d-flex" style={{gap: '15px'}}>
                    <Link to={movieType + '/' + movie.title}>
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </Button>
                    </Link>
                    <Button variant={btnVariant} style={{width: '80%'}} onClick={handleFavouriteClick} disabled={disable}>
                        {favBtnIcon}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
 
export default MoviesInTheatersItem;
