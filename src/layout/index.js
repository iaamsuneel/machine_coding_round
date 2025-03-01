import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout(probs) {
  const { children } = probs;
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box>
        <Header />
      </Box>

      {children}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%;",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
