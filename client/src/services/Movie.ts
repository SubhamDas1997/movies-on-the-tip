import axios from 'axios';
import IMovie, { IFavouriteMovie } from '../models/IMovie';

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:4001/';

const getMoviesInTheaters = async () => {
    const response = await axios.get<IMovie[]>(`${baseURL}movies-in-theaters`);
    return response.data as IMovie[];
}

const getMoviesComingSoon = async () => {
    const response = await axios.get<IMovie[]>(`${baseURL}movies-coming`);
    return response.data as IMovie[];
}

const getMoviesTopIndia = async() => {
    const response = await axios.get<IMovie[]>(`${baseURL}top-rated-india`);
    return response.data as IMovie[];
}

const getMoviesTopRated = async() => {
    const response = await axios.get<IMovie[]>(`${baseURL}top-rated-movies`);
    return response.data as IMovie[];
}

const getFavourites = async() => {
    const response = await axios.get<IMovie[]>(`${baseURL}favourite`);
    return response.data as IMovie[];
}

const getMovieByTitle = async (movieType: string, title: string) => {
    const response = await axios.get(`${baseURL}${movieType}?title=${title}`);
    return response.data;
}

const postNewFavouriteMovie = async (newFavMovie: IFavouriteMovie) => {
    const response = await axios.post(`${baseURL}favourite`, newFavMovie, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

const deleteFavouriteMovie = async (favMovie: IMovie) => {
    const response = await axios.delete(`${baseURL}favourite/${favMovie.id}`);
    return response.data;
}

export { getMoviesInTheaters, getMoviesComingSoon, getMoviesTopIndia, getMoviesTopRated, getFavourites, getMovieByTitle, postNewFavouriteMovie, deleteFavouriteMovie};
