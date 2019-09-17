import React, {useState, useEffect} from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const [data, setData] = useState({});

  useEffect(() => {
  }, [])
  axios
  .get("https://rickandmortyapi.com/api/location/")
  .then(res => {console.log(res.data);
  setData(res.data);
}, []);

  return (
    <section className="location-list">
      <h2>List of locations(map over)</h2>
      {data.map(location => <LocationCard locat={location}/>)}
    />
    </section>
  );
}
