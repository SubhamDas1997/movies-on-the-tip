<h1 align="center">Movies On The Tip 🎞️</h1>

### 🌐 [Site]
### 🔴 [Project Demo](https://www.youtube.com/watch?v=TkSwuNl_HEA&ab_channel=SubhamDas)

# Features
This frontend application is responsibile for taking care of the following user activities on the portal:
1. View all the movie titles with their posters under a different movie types which include -
    - Movies in theaters
    - Coming soon
    - Top rated Indian
    - Top rated movies
<br><br>
1. When under any movie type, search for a particular movie by typing the movie name in the searchbar
    - Searchbar is case and space insensitive
    - Default message if movie is not found using the name and/or connection error
<br><br>
1. View all the details of a particular movie by the click of a button
    - Expand the movie poster by clicking on the preview button in the details page
<br><br>
1. Favourite any movie by clicking the 'favourite' button
    - Button is diabled if the movie is already present in favourites list
<br><br>
1. Remove a favourite movie from the favourites list

# Modules
1. Home
    - Landing Page
    - Movies in theatre
    - Coming soon
    - Top rated Indian
    - Top rated movies
    - Favourties
    - Movie Details
<br><br>
1. Movie Card Item
    - Poster
    - Movie Title
    - Info button
    - Favourtie button

### Home
Contains all the public pages of the website which consist of a page for every movie type, favourties list and details of each movie.

### Movie Card Item
A card template to place title, poster of each movie and two buttons - view movie details and add/remove from favourites list.

# Tech Stack
### Frontend
1. React - v18.2.0
1. Typescript - v4.8.4
1. Bootstrap - v5.2.2
1. React-bootstrap - v2.6.0
1. React Router - v5.3.4
1. Axios - v1.1.3

### Backend
1. JSON Server - v0.17.1

# Setup
### Pre-requisites
1. Download and install the latest version of [Node.js](https://nodejs.org/en/download/current) for development

### Steps
1. Open the project with VSCode (recommended)
1. Open terminal and change directory to `server`
1. Run `npm run start-server` to start the JSON server service on `http://localhost:4001`
1. Open another instance of the terminal and change directory to `client`
1. Run `npm run start` to start the react application
1. Hit `http://localhost:3000` to access the frontend application
