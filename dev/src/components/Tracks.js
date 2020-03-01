import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function Tracks() {
    const [tracks, settracks] = useState(null)
    const params = useParams();
    useEffect(() => {
        let link = "http://localhost:8080/tracks";
        if (params.id) {
            link = "http://localhost:8080/tracks?albumId=" + params.id;
        }
        fetch(link)
            .then(response => response.json())
            .then(json => settracks(json));
    }, [])
    return (
        <div className="container">
            {tracks === null ? "chargement..." :
                tracks.data.map(track => <div className="track">
                    <figure>
                        <figcaption>{track.name}</figcaption>
                        <audio
                            controls
                            src={track.mp3}>
                        </audio>
                    </figure>

                </div>
                )}
        </div>
    )
}

export default Tracks
