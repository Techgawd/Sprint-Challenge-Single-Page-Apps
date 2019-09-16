import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import LocationList from "./components/LocationsList";

const Home = (props) => {
  return <h1>Home Component</h1>
};
const Characters = (props)  => {
  return (
    <CharacterList />
    )
};
const Locations = (props)  => {
  return (
    <LocationList />
  )
};
const Episodes = (props)  => {
  return (
    <EpisodeList />
  )
};

function App () {
  return (
    <div className="saved-list">
      <h1>Rick and Morty Homepage!</h1>
        <Router>
      <Link to = '/'>Home</Link>
      <Link to = '/characters'>Characters</Link>
      <Link to = '/locations'>Location</Link>
      <Link to = '/episodes'>Episodes</Link>
      <Route path= '/characters' component = {Characters} />
      <Route path= '/locations' component = {Locations} />
      <Route path= '/Episodes' component = {Episodes} />
      </Router>
    </div>
  )
  };

export default App;
