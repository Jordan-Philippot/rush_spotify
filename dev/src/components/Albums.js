import React, { useState } from "react";

function Albums() {
  const [albums, setalbums] = useState(null);
  fetch("http://localhost:8080/albums")
    .then(response => response.json())
    .then(json => setalbums(json));
  return (
    <div className="container album-container">
      {albums === null ? "Chargement..." : al}
    </div>
  );
}

export default Albums;
