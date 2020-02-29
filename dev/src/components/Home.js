import React, { useState } from 'react';
import Album from './AlbumBanner'
import AlbumBanner from './AlbumBanner';
function Home() {
    const [content, setContent] = useState(null);

    fetch('http://localhost:8080/albums')
        .then(response => response.json())
        .then(json => console.log(json));


    return (
        <div className="home">
            <div class="row justify-content-center">
                <span class="album-button">Albums</span>
            </div>
            {content === null ? "Chargement de post..." : content.map(user =>
                (
                    <AlbumBanner />
                ))}
        </div>
    )
}
export default Home



//import {myfunction, myotherfunction} from './mondossier'
                                        // rcf -> raccourci
                                        //typeof pour voir son type
/*const content = {
                                id: 0,
                        username: "Jojojo",
                        name: "Jordan Philippot",
                        desc: "lorem ipsum hhaha, alkod cihvrv eicieh"
                         //console.log(content)

/* function jordan() {
                                console.log(string);
                       }
                       // function anonyme
let jonasse = function (string) {
                                console.log(string);
                       }
                       //function fleché
let jojo = string => {
                                console.log(string);

            };*/


