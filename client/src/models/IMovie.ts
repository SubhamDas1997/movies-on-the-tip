interface IMovie {
    id: number,
    title: string,
    year: number,
    genres: string[],
    ratings: number[],
    poster: string,
    contentRating: string,
    duration: string,
    releaseDate: string,
    averageRating: number,
    storyline: string,
    actors: string[],
    imdbRating: number,
}

export default IMovie;
