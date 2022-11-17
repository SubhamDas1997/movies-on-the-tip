import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import MoviesComingSoon from './components/ComingSoon/MoviesComingSoon';
import FavouriteMovies from './components/Favourites/FavouriteMovies';
import Home from './components/Home/Home';
import MoviesInTheaters from './components/InTheaters/MoviesInTheaters';
import Navbar from './components/Navbar';
import TopRatedIndianMovies from './components/TopIndian/TopRatedIndianMovies';
import TopRatedMovies from './components/TopMovies/TopRatedMovies';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Container className='my-4'>
        <main>
          <Switch>
            <Route path="/home"> <Home /> </Route>
            <Route path="/:movieType/:title"> <MovieDetails /> </Route>
            <Route path="/movies-in-theaters"> <MoviesInTheaters /> </Route>
            <Route path="/movies-coming"> <MoviesComingSoon /> </Route>
            <Route path="/top-rated-india"> <TopRatedIndianMovies /> </Route>
            <Route path="/top-rated-movies"> <TopRatedMovies /> </Route>
            <Route path="/favourite"> <FavouriteMovies /> </Route>
            <Route path="/"> <Home /> </Route>
          </Switch>
        </main>
      </Container>
    </div>
  );
}

export default App;
