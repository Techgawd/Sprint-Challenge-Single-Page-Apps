import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [data, setData] = useState({});

  useEffect(() => {
  }, [])
  axios
  .get("https://rickandmortyapi.com/api/episode/")
  .then(res => {console.log(res.data);
  setData(res.data);
}, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    <EpisodeCard  />
    </section>
  );
}

