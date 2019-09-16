import React from "react";

function LocationCard (props) {
return (
    <div>
        <h3>Location</h3>
        <h2>{props.name}</h2>
        <h2>{props.type}</h2>
        <h3>{props.dimension}</h3>
        <p>{props.residents}</p>
    </div>
);
}

export default LocationCard;
 