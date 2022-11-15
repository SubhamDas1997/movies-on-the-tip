import { useState, useEffect } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { getMoviesInTheaters } from "../../services/Movie";
import MovieCardItem from "../MovieCardItem";

const MoviesInTheaters = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getMoviesInTheatersInvoker = async() => {
            try {
                const data = await getMoviesInTheaters();
                setMovies(data);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        getMoviesInTheatersInvoker();
    }, []);

    return ( 
        <div>
            <h2>Movies in theaters</h2>
            <hr />
            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading the movies!</span>
                    </Spinner>
                )
            }


            {
                error && !loading && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }

            {
                movies.length!== 0 && (
                    <Row xs={1} md={3} xl={5}>
                        {
                            movies.map(movie => 
                                <Col key={movie.id} className="d-flex my-3">
                                    <MovieCardItem movie={movie} />
                                </Col>
                            )
                        }
                    </Row>
                )
            }
        </div>
     );
}
 
export default MoviesInTheaters;
