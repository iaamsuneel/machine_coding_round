import React from "react";
import { taskList } from "../Shared/Utils";
import { Link } from "react-router-dom";
import { Box, Card, Grid, Typography } from "@mui/material";
export default function Home() {
  return (
    <div>
      <Box
        sx={{
          width: 400,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {taskList.map((item, index) => (
          <Card
            key={index}
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
