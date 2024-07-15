import React from "react";
import PropTypes from "prop-types";


const YtEmbedComponent = ({embedId}) => (
    <div className="yt-container">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media;"
            controls="0"
            title="Spy x Family"
        />
        
    </div>
);

YtEmbedComponent.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YtEmbedComponent;