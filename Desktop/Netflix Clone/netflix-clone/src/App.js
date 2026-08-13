import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

// 71850717acdaaebf4e5d6e95672465cd 

function App() {
  return (
    <div className="app">
    <Banner />  
    <Row 
    title="NETFLIX ORIGINALS" 
    fetchURL={requests.fetchNetflixOriginals} 
    isLargeRow
    />
    <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    <Row title="Action Movies" fetchURL={requests.fetchTopRated} />
    <Row title="Comedy Movies" fetchURL={requests.fetchTopRated} />
    <Row title="Horror Movies" fetchURL={requests.fetchTopRated} />
    <Row title="Documentaries" fetchURL={requests.fetchTopRated} />
   
    </div>
  );
} 

export default App;
