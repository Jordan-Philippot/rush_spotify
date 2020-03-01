import React, { useState, useEffect } from "react";
import BannerArtists from "./BannerArtists";
function Artists() {
    const [artists, setartists] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/artists")
            .then(response => response.json())
            .then(json => setartists(json))
    }, [])
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center artist-container">
                {artists === null
                    ? "Chargement..."
                    : artists.data.map(artist => <BannerArtists artist={artists} />)}
            </div>
        </div>
    );
}

export default Artists;