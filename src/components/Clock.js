import React, { useState, useEffect, useContext } from "react";
import LevelContext from "./LevelContext";
// import { MyContext } from "../App";
// import MyProvider from "./MyProvider";

function Clock({ myval }) {
  const [second_now, setSecond] = useState(new Date().getSeconds());
  const [minute_now, setMinute] = useState(
    new Date().getMinutes() + new Date().getSeconds() / 60
  );
  const [hr_now, setHour] = useState(
    new Date().getHours() +
      (new Date().getMinutes() + new Date().getSeconds() / 60) / 60
  );
  const level = useContext(LevelContext);
  const [timer_update, setUpdate] = useState(level);

  useEffect(() => {
    const time_update = () => {
      // Create a new Date object
      const currentDate = new Date();

      // Get the current second
      const currentSecond = currentDate.getSeconds();
      const currentMinute = currentDate.getMinutes() + currentSecond / 60;
      const currentHour = currentDate.getHours() + currentMinute / 60; // + currentSecond / 3600;

      setSecond(currentSecond);
      setMinute(currentMinute);
      setHour(currentHour);

      setUpdate(level);
    };
    time_update();

    const secondsid = setInterval(time_update, 1000);

    const secondhnd_div = document.querySelector(".secondhnd");
    const minutehnd_div = document.querySelector(".minutehnd");
    const hourhnd_div = document.querySelector(".hourhnd");
    const hrs = document.querySelectorAll(".hrs");
    const sechnds = document.querySelectorAll(".sechnds");
    const spans = document.querySelectorAll("span");

    secondhnd_div.style.setProperty("--secondAngle", second_now);
    minutehnd_div.style.setProperty("--minuteAngle", minute_now);
    hourhnd_div.style.setProperty("--hourAngle", hr_now);

    hrs.forEach((digit) => {
      digit.style.setProperty("--pos", Number(digit.id));
    });

    sechnds.forEach((hand) => {
      hand.style.setProperty("--pos", Number(hand.id));
      hand.style.setProperty(
        "left",
        145 + 140 * Math.sin((Math.PI / 30) * Number(hand.id)) + "px"
      );
      hand.style.setProperty(
        "top",
        145 - 140 * Math.cos((Math.PI / 30) * Number(hand.id)) + "px"
      );
    });

    spans.forEach((span, index) => {
      span.style.setProperty(
        "left",
        122.5 + 125 * Math.sin((Math.PI / 6) * Number(span.id)) + "px" //- Math.sin(200 * ((span.id * 6) / 1))
      );
      span.style.setProperty(
        "top",
        120 - 125 * Math.cos((Math.PI / 6) * Number(span.id)) + "px" //+ Math.cos(200 * ((span.id * Math.PI) / 30))
      );
      //span.style.setProperty("background", "red");
    });

    console.log(secondhnd_div);

    return () => {
      clearInterval(secondsid);
    };
  }, [second_now, minute_now, hr_now, level, timer_update]);

  return (
    <>
      <h1>{timer_update}</h1>
      <h3>{second_now}-seconds</h3>
      <h3>{minute_now}-minutes</h3>
      <h3>{hr_now}-hrs</h3>
      <div className="clock_container">
        <div className="digits_container">
          <div id="1" className="hrs">
            1
          </div>
          <div id="2" className="hrs">
            2
          </div>
          <div id="3" className="hrs">
            3
          </div>
          <div id="4" className="hrs">
            4
          </div>
          <div id="5" className="hrs">
            5
          </div>
          <div id="6" className="hrs">
            6
          </div>
          <div id="7" className="hrs">
            7
          </div>
          <div id="8" className="hrs">
            8
          </div>
          <div id="9" className="hrs">
            9
          </div>
          <div id="10" className="hrs">
            10
          </div>
          <div id="11" className="hrs">
            11
          </div>
          <div id="12" className="hrs">
            12
          </div>
        </div>
        <span id="1">1</span>
        <span id="2">2</span>
        <span id="3">3</span>
        <span id="4">4</span>
        <span id="5">5</span>
        <span id="6">6</span>
        <span id="7">7</span>
        <span id="8">8</span>
        <span id="9">9</span>
        <span id="10">10</span>
        <span id="11">11</span>
        <span id="12">12</span>
        <div id="1" className="sechnds"></div>
        <div id="2" className="sechnds"></div>
        <div id="3" className="sechnds"></div>
        <div id="4" className="sechnds"></div>
        <div id="5" className="sechnds"></div>
        <div id="6" className="sechnds"></div>
        <div id="7" className="sechnds"></div>
        <div id="8" className="sechnds"></div>
        <div id="9" className="sechnds"></div>
        <div id="10" className="sechnds"></div>
        <div id="11" className="sechnds"></div>
        <div id="12" className="sechnds"></div>
        <div id="13" className="sechnds"></div>
        <div id="14" className="sechnds"></div>
        <div id="15" className="sechnds"></div>
        <div id="16" className="sechnds"></div>
        <div id="17" className="sechnds"></div>
        <div id="18" className="sechnds"></div>
        <div id="19" className="sechnds"></div>
        <div id="20" className="sechnds"></div>
        <div id="21" className="sechnds"></div>
        <div id="22" className="sechnds"></div>
        <div id="23" className="sechnds"></div>
        <div id="24" className="sechnds"></div>
        <div id="25" className="sechnds"></div>
        <div id="26" className="sechnds"></div>
        <div id="27" className="sechnds"></div>
        <div id="28" className="sechnds"></div>
        <div id="29" className="sechnds"></div>
        <div id="30" className="sechnds"></div>
        <div id="31" className="sechnds"></div>
        <div id="32" className="sechnds"></div>
        <div id="33" className="sechnds"></div>
        <div id="34" className="sechnds"></div>
        <div id="35" className="sechnds"></div>
        <div id="36" className="sechnds"></div>
        <div id="37" className="sechnds"></div>
        <div id="38" className="sechnds"></div>
        <div id="39" className="sechnds"></div>
        <div id="40" className="sechnds"></div>
        <div id="41" className="sechnds"></div>
        <div id="42" className="sechnds"></div>
        <div id="43" className="sechnds"></div>
        <div id="44" className="sechnds"></div>
        <div id="45" className="sechnds"></div>
        <div id="46" className="sechnds"></div>
        <div id="47" className="sechnds"></div>
        <div id="48" className="sechnds"></div>
        <div id="49" className="sechnds"></div>
        <div id="50" className="sechnds"></div>
        <div id="51" className="sechnds"></div>
        <div id="52" className="sechnds"></div>
        <div id="53" className="sechnds"></div>
        <div id="54" className="sechnds"></div>
        <div id="55" className="sechnds"></div>
        <div id="56" className="sechnds"></div>
        <div id="57" className="sechnds"></div>
        <div id="58" className="sechnds"></div>
        <div id="59" className="sechnds"></div>
        <div id="60" className="sechnds"></div>
        <div className="secondhnd"></div>
        <div className="minutehnd"></div>
        <div className="hourhnd"></div>
      </div>
    </>
  );
}

export default Clock;
