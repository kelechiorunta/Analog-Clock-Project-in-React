import React, { useEffect } from "react";
import LevelContext from "./LevelContext";
import { useState } from "react";

const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState(Number(new Date().getSeconds()));

  useEffect(() => {
    const timing = () => {
      setMyState(Number(new Date().getSeconds()));
    };

    timing();

    const timerId = setInterval(timing, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [myState]);

  return (
    <LevelContext.Provider value={myState}>
      <h1>Provider Context Value as below</h1>
      {children}
    </LevelContext.Provider>
  );
};
export default MyProvider;
