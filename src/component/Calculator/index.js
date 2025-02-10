import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

const listSymble = [
  { key: "7" },
  { key: "8" },
  { key: "9" },
  { key: "/" },
  { key: "4" },
  { key: "5" },
  { key: "6" },
  { key: "*" },
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "-" },
  { key: "0" },
  { key: "." },
  { key: "=" },
  { key: "+" },
  { key: "C" }
];

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const { id } = e.target;

    // Handle "C" for clear
    if (id === "C") {
      setInput("");
    }
    // Handle "=" for evaluation
    else if (id === "=") {
      try {
        // Use Function constructor as a safer alternative to eval
        setInput(String(new Function('return ' + input)()));
      } catch (err) {
        setInput("Error");
      }
    } 
    // Handle regular inputs (numbers or operators)
    else {
      setInput((val) => val + id);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          width: "350px",
          height: "480px",
          backgroundColor: "#ffff",
          boxShadow: 1,
        }}
      >
        <Box sx={{ m: 1 }}>
          <TextField
            type="text"
            fullWidth
            value={input}
            inputProps={{
              readOnly: true, // Make the input field read-only
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "wrap",
          }}
        >
          {listSymble.map((item) => {
            return (
              <Box
                key={item.key}
                sx={{
                  width: "60px",
                  backgroundColor: "#ece2e2",
                  height: "60px",
                  m: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexFlow: "wrap",
                  boxShadow: 1,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                id={item.key}
                onClick={handleInput}
              >
                {item.key}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
