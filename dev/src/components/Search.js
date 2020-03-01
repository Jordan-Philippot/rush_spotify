import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Artists from "./Artists";
function Search() {
  const [changing, setchanging] = useState("");
  const [inputValue, setinputValue] = useState("");
  const params = useParams();
  const handleChange = e => {
    setinputValue(e.target.value);
  };
  useEffect(() => {
    if (params.cat === "artists") {
      setchanging(<Artists name={inputValue} />);
    } else {
      setchanging("");
    }
  }, [inputValue, params.cat]);
  return (
    <div className="container-fluid search">
      <div className="row">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={"Search " + params.cat}
            onChange={handleChange}
          />
        </div>
      </div>
      {changing}
    </div>
  );
}

export default Search;
