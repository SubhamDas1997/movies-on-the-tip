const Home = () => {
    return(
        <>
            <h2>
                Movies on the Tip
            </h2>
            <hr />
            
            <p>
                This application is an online movie manager which is responsible for segregating various movies based on the following movie types and display them accordingly to the user:
            </p>

            <ul>
                <li>Coming soon.</li>
                <li>Movies in theaters.</li>
                <li>Top rated Indian.</li>
                <li>Top rated movies.</li>
            </ul>
            <br />

            <p>
                It also provides the users with the following features:
            </p>

            <ol>
                <li>Basic information about the movie card the user clicks on</li>
                <li>Add and remove movies from the 'favourites' tab with a click of a button</li>
                <li>Search for a particular movie under a given movie type</li>
            </ol>
        </>
    )
}

export default Home;
