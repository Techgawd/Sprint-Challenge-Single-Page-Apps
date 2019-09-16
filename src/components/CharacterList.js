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
    <div className="character-list">
      <h2>List of characters (map over)</h2>
    <CharacterCard  
      url={data.url} 
      name={data.name} 
      species={data.species} 
      gender={data.gender} 
      origin={data.origin} 
    />
    </div>
  );
}


