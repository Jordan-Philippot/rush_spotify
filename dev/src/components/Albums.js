import React from "react";
import Banner from "./Banner";
function Albums(props) {
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center album-container">
        {props.albums === null
          ? "Chargement..."
          : props.albums.data.map(album => <Banner album={album} />)}
      </div>
    </div>
  );
}

export default Albums;
