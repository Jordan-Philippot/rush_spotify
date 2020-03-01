import React, { useState, useEffect } from "react";
import BannerGenders from "./BannerGenders";
import { useParams } from "react-router-dom";
function Genders(props) {
  const [genders, setgenders] = useState(null);

  useEffect(() => {
    let link = "http://localhost:8080/genders";
    if (props.name) {
      link += "?name=" + props.name;
    }
    fetch(link)
      .then(response => response.json())
      .then(json => setgenders(json));
  }, [props.name]);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center artist-container">
        {genders === null
          ? "Chargement..."
          : genders.data.map(gender => (
              <BannerGenders gender={gender} key={gender.id} />
            ))}
      </div>
    </div>
  );
}

export default Genders;
