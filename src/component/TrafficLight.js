import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
export default function TrafficLight() {
  const [color, setColor] = useState("red");
  useEffect(() => {
    function changeColor() {
      switch (color) {
        case "red":
          setColor("yellow");
          break;
        case "yellow":
          setColor("green");
          break;
        case "green":
          setColor("red");
          break;
        default:
          setColor("red");
      }
    }
    const interval = setInterval(changeColor, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [color]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box sx={{ boxShadow: 1, p: 3 }}>
        <div
          style={{
            backgroundColor: color === "red" ? "red" : "gray",
            borderRadius: "50%",
            height: "90px",
            width: "90px",
            marginBottom: 5,
          }}
        ></div>
        <div
          style={{
            borderRadius: "50%",
            height: "90px",
            width: "90px",
            marginBottom: 5,
            backgroundColor: color === "yellow" ? "yellow" : "gray",
          }}
        ></div>
        <div
          style={{
            height: "90px",
            width: "90px",
            backgroundColor: color === "green" ? "green" : "gray",
            borderRadius: "50%",
          }}
        ></div>
      </Box>
    </div>
  );
}
