import React from 'react'
import { useHistory } from 'react-router-dom'

export default function AlbumBanner(props) {
    const history = useHistory();
    function tracksHandler(id) {
        history.push("/tracks/" + id)
    }
    return (

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 album-component" onClick={() => tracksHandler(props.album.id)}>
            <div className="row img-container justify-content-center">
                <img className="img-album" src={props.album.cover_small} alt="cover"></img>
            </div>
            <div className="offset-xl-1 col-xl-10">
                <div className="album">
                    <div className="album-text">
                        <h5>{props.album.name}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
