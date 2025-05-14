import React, { useState, useRef } from "react";
export default function Progress() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);
  console.log("intervalRef", intervalRef);
  const styleObj = {
    backgroundColor: "red",
    border: "none",
    color: "white",
    padding: "7px",
    borderRadius: "5px",
    cursor: "pointer",
  };
  const startProgress = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  };

  const stopProgress = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetProgress = () => {
    stopProgress();
    setCount(0);
  };

  return (
    <div>
      <h3 style={{ paddingLeft: 100 }}>Progress Bar</h3>
      <div
        style={{
          width: "300px",
          height: "30px",
          backgroundColor: "#ddd",
          borderRadius: "7px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${count}%`,
            height: "100%",
            backgroundColor: "green",
            textAlign: "center",
            lineHeight: "30px",
            color: "white",
          }}
        >
          {count}%
        </div>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: 10,
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <button
          onClick={startProgress}
          style={{ ...styleObj, backgroundColor: "#007bff" }} // Blue
        >
          Start
        </button>
        <button
          onClick={stopProgress}
          style={{ ...styleObj, backgroundColor: "orange" }}
        >
          Stop
        </button>
        <button
          onClick={resetProgress}
          style={{ ...styleObj, backgroundColor: "yellowgreen" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
