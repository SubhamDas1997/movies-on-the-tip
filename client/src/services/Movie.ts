import axios from 'axios';
import IMovie from '../models/IMovie';

const baseURL = process.env.REACT_APP_BASE_URL;

const getMoviesInTheaters = async () => {
    const response = await axios.get(`${baseURL}movies-in-theaters`);
    return response.data as IMovie[];
}

const getMoviesComingSoon = async () => {
    const response = await axios.get(`${baseURL}movies-coming`);
    return response.data as IMovie[];
}

const getMoviesTopIndia = async() => {
    const response = await axios.get(`${baseURL}top-rated-india`);
    return response.data as IMovie[];
}

const getMoviesTopRated = async() => {
    const response = await axios.get(`${baseURL}top-rated-movies`);
    return response.data as IMovie[];
}

const getFavourites = async() => {
    const response = await axios.get(`${baseURL}favourites`);
    return response.data as IMovie[];
}

const getMovieByTitle = async (movieType: string, title: string) => {
    const response = await axios.get(`${baseURL}${movieType}?title=${title}`);
    return response.data;
}

export { getMoviesInTheaters, getMoviesComingSoon, getMoviesTopIndia, getMoviesTopRated, getFavourites, getMovieByTitle};
