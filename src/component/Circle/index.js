import { Box } from "@mui/material";
import React, { useState } from "react";
export default function Circle() {
  const [count, setCount] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        flexDirection: "column",
        mt: 5,
      }}
    >
      <Box>
        <input
          type="number"
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: `${20 * count}px`,
          height: `${20 * count}px`,
          mt:2
        }}
      >
        {[...Array.from({ length: count })].map((_, index) => {
          const size = count - index;
          return (
            <Box
              key={index}
              sx={{
                border: "1px solid black",
                borderRadius: "100%",
                width: `${20 * size}px`,
                height: `${20 * size}px`,
                display: "flex",
                p: 1,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: `${(20 * (count - size)) / 2}px`,
                left: `${(20 * (count - size)) / 2}px`,
              }}
            ></Box>
          );
        })}
      </Box>
    </Box>
  );
}
