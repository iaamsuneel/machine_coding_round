import React from "react";
import { taskList } from "../shared/Utils";
import { Link } from "react-router-dom";
import { Box, Card, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    //<div style={{height:'85vh', overflowY:'auto'}}>
    <div style={{height: 'calc(100vh - 120px)', overflowY: 'auto'}}>
      <Box
        sx={{
          width: 400,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding:1
        }}
      >
        {taskList.map((item, index) => (
          <Card
            key={item.name}
            sx={{
              width: "100%",
              mt: 1,
            }}
          >
            <Box
              component={Link}
              to={item.url}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                textDecoration: "none",
              }}
            >
              <Grid container alignItems="center">
                <Grid item xs={1}>
                  <Typography variant="h6" fontWeight={600}>
                    {`${index + 1}.`}
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.primary"
                  >
                    {item.name}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}
