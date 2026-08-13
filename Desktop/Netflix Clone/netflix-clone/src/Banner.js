import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

 useEffect(() => {
    async function fetchData() {
        const requests = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
    );
        return requests;
    }
    fetchData();
 }, []);

 console.log(movie);

  return (
    <header className="banner">
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
     <div className="banner__contents">
        {/*title*/}
        <h1>
          {movie?.title || movie?.name || movie?.original_name}  
        </h1>
        {/* div > 2 buttons */}
        {/* description */}

        </div>
      </header>
  
  )
}

export default Banner
