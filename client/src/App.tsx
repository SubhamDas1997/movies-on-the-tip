import React, { useState } from 'react';
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
  const [searchValue, setSearchValue] = useState<string>('');
  const [isSearchDisabled, setIsSearchDisabled] = useState<boolean>(true);
  
  return (
    <div>
      <Navbar searchVal={searchValue} setSearchVal={setSearchValue} disableSearch={isSearchDisabled} />
      <Container className='my-4'>
        <main>
          <Switch>
            <Route path="/home"> <Home setDisableSearch={setIsSearchDisabled} /> </Route>
            <Route path="/:movieType/:title"> <MovieDetails setDisableSearch={setIsSearchDisabled} /> </Route>
            <Route path="/movies-in-theaters"> <MoviesInTheaters searchVal={searchValue} setSearchVal={setSearchValue} setDisableSearch={setIsSearchDisabled} /> </Route>
            <Route path="/movies-coming"> <MoviesComingSoon searchVal={searchValue} setSearchVal={setSearchValue} setDisableSearch={setIsSearchDisabled} /> </Route>
            <Route path="/top-rated-india"> <TopRatedIndianMovies searchVal={searchValue} setSearchVal={setSearchValue} setDisableSearch={setIsSearchDisabled} /> </Route>
            <Route path="/top-rated-movies"> <TopRatedMovies searchVal={searchValue} setSearchVal={setSearchValue} setDisableSearch={setIsSearchDisabled} /> </Route>
            <Route path="/favourite"> <FavouriteMovies searchVal={searchValue} setSearchVal={setSearchValue} setDisableSearch={setIsSearchDisabled} /> </Route>
            <Route path="/"> <Home setDisableSearch={setIsSearchDisabled} /> </Route>
          </Switch>
        </main>
      </Container>
    </div>
  );
}

export default App;
