import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
const listSymble = [
  { key: "AC" },
  { key: "%" },
  { key: "*" },
  { key: "/" },
  { key: "7" },
  { key: "8" },
  { key: "9" },
  { key: "×" },
  { key: "4" },
  { key: "5" },
  { key: "6" },
  { key: "-" },
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "+" },
  { key: "0" },
  { key: "." },
  { key: "C" },
  { key: "=" },
];
export default function Calculator() {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    const { id } = e.target;
    if (id === "=") {
      let value = eval(input);
      setInput(String(value));
    } else if (id === "C") {
      setInput("");
    } else {
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
            onChange={(e) => setInput(e.target.value)}
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
          {listSymble.map((item, index) => {
            return (
              <Box
                key={index}
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
