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
            <div className="row justify-content-center">
                <span className="album-button">Tracks</span>
            </div>
            {tracks === null ? "chargement..." :
                tracks.data.map(track => <div className="track">
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                            <figure className="titletrack">
                                <figcaption>{track.name}</figcaption>
                                <audio
                                    controls
                                    src={track.mp3}>
                                </audio>
                            </figure>
                        </div>
                    </div>
                </div >
                )
            }
        </div >
    )
}

export default Tracks
