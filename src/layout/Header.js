import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { images } from "../shared/Utils";
import axios from "axios";
export default function Header() {
  const navigate = useNavigate();
  const [ipAddress, setIpAddress] = React.useState("");
  React.useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 3 }}>
            Machine
          </Typography>
          <Typography>
            <div style={{ display: "flex" }}>
              <p>IP Address : </p>
              <p style={{ marginRight: "30px", paddingLeft: "3px" }}>
                {ipAddress ? ipAddress : "Loading..."}
              </p>
            </div>
          </Typography>
          <Avatar
            size="small"
            sx={{ width: 35, height: 35 }}
            src={images[3].image_url}
            alt="loading"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
