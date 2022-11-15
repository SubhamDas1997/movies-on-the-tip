import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "react-bootstrap";
import IMovie from "../models/IMovie";
import { faHeart, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

interface IMovieCardModel {
    movie: IMovie
}

const baseURL = process.env.REACT_APP_BASE_URL;

const MoviesInTheatersItem = ({ movie }: IMovieCardModel) => {
    const movieType = window.location.pathname;

    return ( 
        <Card>
            <Card.Img variant="top" src={baseURL + movie.poster} alt="Poster" style={{height: '350px', width: '238px'}}/>
            <Card.Body>
                <Card.Title className="text-truncate" style={{paddingBottom: '8px'}}>{movie.title}</Card.Title>
                <div className="d-flex" style={{gap: '15px'}}>
                    <Link to={movieType + '/' + movie.title}>
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon={faCircleInfo} /> 
                        </Button>
                    </Link>
                    <Button variant="outline-warning" style={{width: '80%'}}>
                        <FontAwesomeIcon icon={faHeart} />
                    </Button>
                </div>
            </Card.Body>
        </Card>
     );
}
 
export default MoviesInTheatersItem;
