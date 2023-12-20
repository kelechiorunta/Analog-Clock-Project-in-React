import React, { useContext } from "react";
import LevelContext from "./LevelContext";

function Footer({ myresult, mydispatch, mytype }) {
  var f = useContext(LevelContext);
  f -= 1;
  return (
    <div>
      Footer - {f}
      {/* <h6>{myresult}</h6> */}
      <button onClick={mydispatch}>{mytype}</button>
    </div>
  );
}

export default Footer;
