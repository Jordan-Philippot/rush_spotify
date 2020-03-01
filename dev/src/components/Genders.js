import React, { useState, useEffect } from "react";
import BannerGenders from "./BannerGenders";
import { useParams } from "react-router-dom";
function Genders() {
    const [genders, setgenders] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/genders")
            .then(response => response.json())
            .then(json => setgenders(json))
        console.log(genders);
    }, [])
    return (
        <div className="container-fluid">
            <div className="row justify-content-center artist-container">
                {genders === null
                    ? "Chargement..."
                    : genders.data.map(gender => <BannerGenders gender={gender} />)}
            </div>
        </div>
    );
}

export default Genders;