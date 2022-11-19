import { useState, useEffect } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import IMovie from "../../models/IMovie";
import { getFavourites } from "../../services/Movie";
import MovieCardItem from "../MovieCardItem/MovieCardItem";

interface IMovieSearch {
    searchVal: string,
    setSearchVal: (searchVal: string) => void,
    setDisableSearch: (disableSearch: boolean) => void
}

const FavouriteMovies = ({searchVal, setSearchVal, setDisableSearch}: IMovieSearch) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const newMovies = movies.filter(movie => movie.title.toLowerCase().split(' ').join('').includes(searchVal.toLowerCase().split(' ').join('')));
        setSearchedMovies(newMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchVal])

    useEffect(() => {
        const getFavouritesInvoker = async() => {
            try {
                const data = await getFavourites();
                setMovies(data);
                setSearchedMovies(data);
                setDisableSearch(false);
                setSearchVal('');
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        getFavouritesInvoker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ( 
        <div>
            <h2>Your favourite movies</h2>
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
                                <MovieCardItem movie={movie} />
                            </Col>
                        )
                    }
                </Row>
            }
        </div>
     );
}
 
export default FavouriteMovies;
