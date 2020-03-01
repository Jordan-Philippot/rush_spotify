import React, { useState, useEffect } from "react";
import Album from "./Albums";
import Artist from "./Artists";
function Home() {
  const [albums, setalbums] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/albums")
      .then(response => response.json())
      .then(json => setalbums(json));
  }, []);
  return (
    <div className="home">
      <div className="row justify-content-center">
        <span className="album-button">Albums</span>
      </div>
      <Artist />
      <Album albums={albums} />
    </div>
  );
}
export default Home;

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
