import React, { useState, useEffect } from "react";
import Album from "./Albums";
import Artist from "./Artists";
import Gender from "./Genders";
function Home() {
  return (
    <div className="home">
      <Artist />
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
