import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">


      <Navbar />
      <Banner />
     
     <Row title='Trending Now' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title='Top Rated' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
