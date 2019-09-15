import React from "react";

function LocationCard (props) {
return (
    <div>
        <h2>{props.name}</h2>
        <h1>Location</h1>
        <img src ={props.url}/>
    </div>
);
}

export default LocationCard;
