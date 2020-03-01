import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
function Albums(props) {
  const [albums, setalbums] = useState(null);
  const params = useParams();
  useEffect(() => {
    let link = "http://localhost:8080/albums";
    if (params.id) {
      link = "http://localhost:8080/albumbygenre?id=" + params.id;
    }
    if (props.name) {
      link = "http://localhost:8080/albums?name=" + props.name;
    }
    fetch(link)
      .then(response => response.json())
      .then(json => setalbums(json));
  }, [props.name]);
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center album-container">
        {albums === null
          ? "Chargement..."
          : albums.data.map(album => <Banner album={album} key={album.id} />)}
      </div>
    </div>
  );
}

export default Albums;
