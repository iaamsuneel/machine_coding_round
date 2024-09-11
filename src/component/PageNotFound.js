import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function PageNotFound() {
    const navigate = useNavigate();
    const goBackHome = () => {
        navigate("/");
    };
    return (
        <Box>
            <Box
                sx={{
                    color: "red",
                    fontWeight: 600,
                    textAlign: "center",
                    mt: 2,
                }}
            >
                Page Not Found : 404 Error
            </Box>
            <Box
                onClick={goBackHome}
                component={Link}
                sx={{ mt: 3, display: "flex", justifyContent: "center" }}
            >
                <Typography>Go Back Home</Typography>
            </Box>
        </Box>
    );
}
