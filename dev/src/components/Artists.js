import React, { useState, useEffect } from "react";
import BannerArtists from "./BannerArtists";
import { useParams } from "react-router-dom";
function Artists() {
    const [artists, setartists] = useState(null);
    const params = useParams();
    useEffect(() => {
        let link = "http://localhost:8080/artists";
        if (params.id) {
            link = "http://localhost:8080/artistprofil?id=" + params.id;
        }
        fetch(link)
            .then(response => response.json())
            .then(json => setartists(json));
    }, [])
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <span className="album-button">Artiste</span>
            </div>
            <div className="row justify-content-center artist-container">
                {artists === null
                    ? "Chargement..."
                    : artists.data.map(ar => <BannerArtists artist={ar} />)}
            </div>
        </div>
    );
}

export default Artists;