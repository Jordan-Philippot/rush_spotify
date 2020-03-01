import React from "react";

function albumBan(props) {
  return (
    <div className="bann">
      <img src={props.album.cover} alt="Cover" />
      <h4 className="name"> {props.album.name}</h4>
      <p className="desc">{props.album.description}</p>
    </div>
  );
}

export default albumBan;
