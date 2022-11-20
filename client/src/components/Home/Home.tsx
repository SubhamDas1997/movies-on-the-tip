import { useEffect } from "react";

interface INavSearch {
    setDisableSearch: (disableSearch: boolean) => void
}

const Home = ({setDisableSearch}: INavSearch) => {
    useEffect(() => {
        setDisableSearch(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            <h2 className="page-header">
                Movies on the Tip
            </h2>
            <hr />
            
            <p className="home-content">
                This application is an online movie manager which is responsible for segregating various movies based on the following movie types and display them accordingly to the user:
            </p>

            <ul className="home-content">
                <li>Coming soon.</li>
                <li>Movies in theaters.</li>
                <li>Top rated Indian.</li>
                <li>Top rated movies.</li>
            </ul>
            <br />

            <p className="home-content">
                It also provides the users with the following features:
            </p>

            <ol className="home-content ol">
                <li>Basic information about the movie card the user clicks on</li>
                <li>Add and remove movies from the 'favourites' tab with a click of a button</li>
                <li>Search for a particular movie under a given movie type</li>
            </ol>
        </>
    )
}

export default Home;
