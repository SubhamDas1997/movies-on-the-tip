import { useState, useEffect } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { getFavourites, getMoviesComingSoon } from "../../services/Movie";
import MovieCardItem from "../MovieCardItem";

interface IMovieSearch {
    searchVal: string
}

const MoviesComingSoon = ({searchVal}: IMovieSearch) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);
    const [favMovies, setFavMovies] = useState<string[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const newMovies = movies.filter(movie => movie.title.toLowerCase().split(' ').join('').includes(searchVal.toLowerCase().split(' ').join('')));
        setSearchedMovies(newMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchVal])

    useEffect(() => {
        const getMoviesInvoker = async() => {
            try {
                const data = await getMoviesComingSoon();
                const favData = await getFavourites();
                
                setMovies(data);
                setSearchedMovies(data);
                setFavMovies(favData.map(
                    movie => movie.title
                ));
    
                // console.log(favData)
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        getMoviesInvoker();
    }, []);

    return ( 
        <div>
            <h2>Movies coming soon</h2>
            <hr />

            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading the expenses!</span>
                    </Spinner>
                )
            }


            {
                error && !loading && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }

            {
                searchedMovies.length === 0 && !loading && (
                    <Alert variant="info"><strong>No movies found!</strong></Alert>
                )
            }

            {
                <Row xs={1} md={3} xl={5}>
                    {
                        searchedMovies?.map(movie => 
                            <Col key={movie.id} className="d-flex my-3">
                                <MovieCardItem favMovies={favMovies} movie={movie} />
                            </Col>
                        )
                    }
                </Row>
            }
        </div>
     );
}
 
export default MoviesComingSoon;
