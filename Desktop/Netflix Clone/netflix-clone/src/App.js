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
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true} 
       />
      <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>

    </div>
  );
}

export default App;
 