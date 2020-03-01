import React from 'react'
import { useHistory } from "react-router-dom";
export default function ArtistsBanner(props) {
    const history = useHistory();
    function artistprofil(id) {
        history.push("/artistprofil/" + id)
    }
    return (

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 artist-component" onClick={() => artistprofil(props.artist.id)}>
            <div className="row img-container justify-content-center">
                <img class="img-artist" src={props.artist.photo} alt="cover"></img>
            </div>
            <div class="offset-xl-1 col-xl-10">
                <div class="artist">
                    <div class="album-text">
                        <h5>{props.artist.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}