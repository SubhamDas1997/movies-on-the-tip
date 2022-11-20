import { Button, Col, Row, Stack } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import IMovie from "../../models/IMovie";
import PosterImagePreview from "./PosterImagePreview";

interface IMovieDetailsContent {
    movie: IMovie | null,
    movieImage: string,
}

const MovieDetailsContent = ({movie, movieImage}: IMovieDetailsContent) => {
    const history = useHistory();

    return ( 
        <Row className="my-4">
            <Col className="my-4" style={{alignItems: "flex-start", justifyContent: "center"}}>
                <Stack gap={3} className="poster-stack">
                    <PosterImagePreview movieImage={movieImage} />
                    <Button className="back-btn" variant="danger" onClick={() => history.goBack()}>Back</Button>
                </Stack>
            </Col>
            
            <Col xs={8} className="my-3">
                <Stack gap={3}>
                    <h1 className="movie-title">{movie?.title.toUpperCase()} ({movie?.year})</h1>

                    <Stack gap={1}>
                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">Storyline</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.storyline}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">imdb Rating</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.imdbRating}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">Content Rating</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.contentRating}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">Average Rating</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.averageRating}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">Duration</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.duration}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">Genres</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.genres.join(' - ')}</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">Actors</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.actors.join(' - ')}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5 className="movie-details-heading">Release Date</h5>
                            </Col>
                            <Col xl={9}>
                                <p className="movie-details-value">{movie?.releaseDate}</p>
                            </Col>
                        </Row>
                    </Stack>
                </Stack>
            </Col>
        </Row>
     );
}
 
export default MovieDetailsContent;
