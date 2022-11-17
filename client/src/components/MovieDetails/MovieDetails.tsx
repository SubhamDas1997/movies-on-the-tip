import { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import IMovie from '../../models/IMovie';
import { getMovieByTitle } from '../../services/Movie';

interface IRouteParams {
    movieType: string,
    title: string
}

const MovieDetails = () => {
    const { movieType, title } = useParams<IRouteParams>();

    const [movie, setMovie] = useState<IMovie | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getMovieByTitleInvoker = async() => {
            try {
                const data = await getMovieByTitle(movieType, title);
                const movieFromArray = data[0];
                setMovie(movieFromArray);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        getMovieByTitleInvoker();
    }, [movieType, title]);

    return ( 
        <>
            {
                loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading the movie details!</span>
                    </Spinner>
                )
            }

            {
                error && !loading && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }

            {
                movie && (
                    <h1>{movie.title}</h1>
                )
            }
        </>
     );
}
 
export default MovieDetails;
