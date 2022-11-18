import { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import IMovie from '../../models/IMovie';
import { getMovieByTitle } from '../../services/Movie';
import MovieDetailsContent from './MovieDetailsContent';

interface IRouteParams {
    movieType: string,
    title: string
}

interface INavSearch {
    setDisableSearch: (disableSearch: boolean) => void
}

const baseURL = process.env.REACT_APP_BASE_URL;

const MovieDetails = ({setDisableSearch}: INavSearch) => {
    const { movieType, title } = useParams<IRouteParams>();

    const [movie, setMovie] = useState<IMovie | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieImage, setMovieImage] = useState<string>('');

    useEffect(() => {
        const getMovieByTitleInvoker = async() => {
            try {
                const data = await getMovieByTitle(movieType, title);
                const movieFromArray = data[0];
                
                setMovie(movieFromArray);
                setMovieImage(`${baseURL}${movieFromArray.poster}`);
                setDisableSearch(true);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        getMovieByTitleInvoker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <MovieDetailsContent movie={movie} movieImage={movieImage} />
            }
        </>
     );
}
 
export default MovieDetails;
