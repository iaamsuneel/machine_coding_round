import React, { useEffect, useState } from "react";
import "./style.css";
export default function StopWatch() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    let timerId;
    if (start) {
      timerId = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [start]);
  const formateToDate = (timer) => {
    if (timer === 0) return "00:00";
    let minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Timer: {formateToDate(timer)} Seconds</h2>
      <div style={{ display: "flex", columnGap: "5px" }}>
        <button onClick={() => setStart(true)}>Start</button>
        <button onClick={() => setStart(false)}>Stop</button>
        <button
          onClick={() => {
            setTimer(0);
            setStart(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
