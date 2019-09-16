import React from "react";

function CharacterCard (props) {
return (
    <div>
        <h3>Character</h3>
        <img src ={props.url}/>
        <h2>{props.name}</h2>
        <h3>{props.species}</h3>
        <p>{props.gender}</p>
        <p>{props.origin}</p>
    </div>
);
}

export default CharacterCard;