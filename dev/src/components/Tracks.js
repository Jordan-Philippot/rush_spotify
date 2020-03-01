import React,{useState,useEffect} from 'react'

function Tracks() {
    const [tracks, settracks] = useState(null)
   
    useEffect(()=>{
        fetch("http://localhost:8080/tracks")
        .then(response => response.json())
        .then(json => settracks(json));
    },[])
    return (
        <div className="container">
            {tracks === null ? "chargement..." : 
            tracks.data.map(track => <div className="track">
                <figure><figcaption>{track.name}</figcaption>
                <audio
                    controls
                    src={track.mp3}>
                </audio>
                </figure>
                
            </div>
            ) }
        </div>
    )
}

export default Tracks
