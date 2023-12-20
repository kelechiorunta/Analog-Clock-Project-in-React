import React, { useContext } from "react";
import LevelContext from "./LevelContext";

function Heading() {
  const t = useContext(LevelContext);
  return <div>Heading - {t}</div>;
}

export default Heading;
