import React, {useState, useEffect} from "react";
import axios from "axios";
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
      <h2>List of episodes (map over)</h2>
    <EpisodeCard
        name={data.name}
        air_date={data.air_date} 
        episode={data.episode} 
        characters={data.characters} 
    />
    </section>
  )
};
 
