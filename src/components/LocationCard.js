import React from "react";

function LocationCard (props) {
return (
    <div>
        <h3>Location</h3>
        <h2>{props.locat.name}</h2>
        <h2>{props.locat.type}</h2>
        <h3>{props.locat.dimension}</h3>
        <p>{props.locat.residents}</p>
    </div>
);
}

export default LocationCard;
 