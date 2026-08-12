import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

// 71850717acdaaebf4e5d6e95672465cd 

function App() {
  return (
    <div className="app">
    <h1>
      Let's build a Netflix CLone!
      </h1>

    <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
} 

export default App;
