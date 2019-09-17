import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(() => {
  }, [])
  axios
  .get("https://rickandmortyapi.com/api/character/")
  .then(res => {console.log(res.data.results);
  setData(res.data.results);
}, []);

  return (
    <div className="character-list">
      <h2>List of characters (map over)</h2>
      {data.map(character => <CharacterCard char={character}/>)}
    </div>
  );
}


