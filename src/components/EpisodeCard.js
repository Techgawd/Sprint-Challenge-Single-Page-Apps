import React from "react";

function EpisodeCard (props) {
return (
    <div>
        <h3>Episode</h3>
        <h2>{props.name}</h2>
        <h2>{props.air_date}</h2>
        <h3>{props.episode}</h3>
        <p>{props.characters}</p>
    </div>
)
};

export default EpisodeCard; 