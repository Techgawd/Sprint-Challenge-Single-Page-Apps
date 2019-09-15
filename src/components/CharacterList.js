import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [data, setData] = useState({});

  useEffect(() => {
  }, [])
  axios
  .get("https://rickandmortyapi.com/api/character/")
  .then(res => {console.log(res.data);
  setData(res.data);
}, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    <CharacterCard  name={data.name} 
      />
    </section>
  );
}


