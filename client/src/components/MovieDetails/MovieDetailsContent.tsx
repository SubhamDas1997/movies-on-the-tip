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
            <Col className="d-flex my-4" style={{alignItems: "flex-start", justifyContent: "center"}}>
                <Stack gap={3}>
                    <PosterImagePreview movieImage={movieImage} />
                    <Button variant="danger" style={{width: "81%", borderRadius: "5px", fontWeight: "bold"}} onClick={() => history.goBack()}>Back</Button>
                </Stack>
            </Col>
            
            <Col xs={8} className="d-flex my-3">
                <Stack gap={3}>
                    <h1>{movie?.title.toUpperCase()} ({movie?.year})</h1>

                    <Stack gap={1}>
                        <Row>
                            <Col>
                                <h5>Storyline</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.storyline}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5>imdb Rating</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.imdbRating}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5>Content Rating</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.contentRating}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5>Average Rating</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.averageRating}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5>Duration</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.duration}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5>Genres</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.genres.join(' - ')}</p>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <h5>Actors</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.actors.join(' - ')}</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h5>Release Date</h5>
                            </Col>
                            <Col xs={9}>
                                <p>{movie?.releaseDate}</p>
                            </Col>
                        </Row>
                    </Stack>
                </Stack>
            </Col>
        </Row>
     );
}
 
export default MovieDetailsContent;
