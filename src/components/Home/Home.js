import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';

function Home() {

    const [trendingMovie, setTrendingMovie] = useState([]);

    async function getTrendingMovie() {

        const url = process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        const movieData = await response.json();
        setTrendingMovie(movieData);

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