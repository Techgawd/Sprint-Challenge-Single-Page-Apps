import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import LocationList from "./LocationsList";
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';


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


const TabNav = () => {
    return (
        <div className='nav-bar'>
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

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default TabNav;
