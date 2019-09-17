import React from "react";

function EpisodeCard (props) {
return (
    <div>
        <h3>Episode</h3>
        <h2>{props.epi.name}</h2>
        <h2>{props.epi.air_date}</h2>
        <h3>{props.epi.episode}</h3>
        <p>{props.epi.characters}</p>
    </div>
)
};

export default EpisodeCard; 