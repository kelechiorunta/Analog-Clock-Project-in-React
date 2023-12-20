// import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock";
import React, { useReducer } from "react";
import { createContext } from "react";
import MyProvider from "./components/MyProvider";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Clock />
        <Heading />
      </MyProvider>
    </div>
  );
}

export default App;
