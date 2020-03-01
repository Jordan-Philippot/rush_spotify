import React, { useState, useEffect } from "react";
import BannerArtists from "./BannerArtists";
import { useParams } from "react-router-dom";
function Artists() {
  const params = useParams(); //Param to check search
  const [artists, setartists] = useState(null);
  useEffect(() => {
    let link = "http://localhost:8080/artists";
    if (params.name) {
      // Wee are searching albums
      link += "?name=" + params.name;
    }
    fetch(link)
      .then(response => response.json())
      .then(json => setartists(json));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center artist-container">
        {artists === null
          ? "Chargement..."
          : artists.data.map(artist => (
              <BannerArtists artist={artist} key={artist.id} />
            ))}
      </div>
    </div>
  );
}

export default Artists;
