import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        py: 0.5,
      }}
    >
      <Toolbar sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        {/* Logo / Brand */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            letterSpacing: 1.2,
            color: "#fff",
            textDecoration: "none",
            "&:hover": {
              color: "#ffdd57",
            },
            transition: "color 0.3s ease",
          }}
        >
          🚀 API Hunter
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "#fff",
              fontWeight: "600",
              textTransform: "none",
              "&:hover": {
                color: "#ffdd57",
              },
              transition: "color 0.3s ease",
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: "#fff",
              fontWeight: "600",
              textTransform: "none",
              "&:hover": {
                color: "#ffdd57",
              },
              transition: "color 0.3s ease",
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
