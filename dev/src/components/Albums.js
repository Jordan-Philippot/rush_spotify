import React from "react";
import Banner from "./Banner";
function Albums(props) {
  return (
    <div className="container album-container">
      {props.albums === null
        ? "Chargement..."
        : props.albums.data.map(album => <Banner album={album} />)}
    </div>
  );
}

export default Albums;
