import React, { useState, useEffect } from "react";
import Banner from "./Banner";
function Albums() {
  const [albums, setalbums] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/albums")
      .then(response => response.json())
      .then(json => setalbums(json))
  }, [])
  return (
    <div className="container album-container">
      {albums === null
        ? "Chargement..."
        : albums.data.map(album => <Banner album={album} />)}
    </div>
  );
}

export default Albums;
