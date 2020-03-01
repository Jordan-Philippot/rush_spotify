import React, { useState } from "react";
import AlbumBan from "./albumBan";
function Albums() {
  const [albums, setalbums] = useState(null);
  fetch("http://localhost:8080/albums")
    .then(response => response.json())
    .then(json => setalbums(json));
  return (
    <div className="container album-container">
      {albums === null
        ? "Chargement..."
        : albums.data.map(album => <AlbumBan album={album} />)}
    </div>
  );
}

export default Albums;
