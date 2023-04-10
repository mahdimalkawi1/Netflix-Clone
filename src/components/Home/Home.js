import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

function Home() {

    const [trendingMovie, setTrendingMovie] = useState([]);

    async function getTrendingMovie() {

        const url = process.env.REACT_APP_SERVER_URL;
        console.log("url",url)
        const response = await fetch(`${url}/trending`);
                // const response = await fetch('https://m-movieslibrary.onrender.com/trending');

        console.log("reponse",response)
        const movieData = await response.json();
        console.log("movieData",movieData)
        setTrendingMovie(movieData);
       console.log("trendingmovie",trendingMovie)
    }

    useEffect(() => {
        getTrendingMovie()
    }, []);


    return (
        <>

            <MovieList movies={trendingMovie} />
        </>
    )
}
export default Home;