import React from 'react'

export default function AlbumBanner(props) {
    return (

        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 album-component">
            <div className="row img-container justify-content-center">
                <img class="img-album" src={props.album.cover_small} alt="cover"></img>
            </div>
            <div class="offset-xl-1 col-xl-10">
                <div class="album">
                    <div class="album-text">
                        <h5>{props.album.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
