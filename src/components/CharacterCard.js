import React from "react";

function CharacterCard (props) {
return (
    <div>
        <h2>{props.name}</h2>
        <h1>Character</h1>
        <img src ={props.url}/>
    </div>
);
}

export default CharacterCard;