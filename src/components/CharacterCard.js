import React from "react";

function CharacterCard (props) {
return (
    <div>
        <h3>Character</h3>
        <img src ={props.char.url}/>
        <h2>{props.char.name}</h2>
        <h3>{props.char.species}</h3>
        <p>{props.char.gender}</p>
        <p>{props.char.origin}</p>
    </div>
);
}

export default CharacterCard;

