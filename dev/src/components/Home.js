import React from "react";
import Album from "./Albums";
function Home() {
  return (
    <div className="home">
      <div className="row justify-content-center">
        <span className="album-button">Albums</span>
      </div>
      <Album />
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
