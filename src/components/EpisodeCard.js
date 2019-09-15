import React from "react";

function EpisodeCard (props) {
return (
    <div>
        <h2>{props.name}</h2>
        <h1>Episodes</h1>
        <img src ={props.url}/>
    </div>
);
}

export default EpisodeCard;