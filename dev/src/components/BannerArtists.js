import React from "react";

export default function ArtistsBanner(props) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 artist-component">
            <div className="row img-container justify-content-center">
                <img className="img-artist" src={props.artist.photo} alt="cover"></img>
            </div>
            <div className="offset-xl-1 col-xl-10">
                <div className="artist">
                    <div className="album-text">
                        <h5>{props.artist.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
