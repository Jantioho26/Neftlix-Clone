import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

// 71850717acdaaebf4e5d6e95672465cd 

function App() {
  return (
    <div className="App">
    <h1> Hey Programmer, let's build Netflix Clone Frontend!</h1>
    <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </div>
  );
} 

export default App;
