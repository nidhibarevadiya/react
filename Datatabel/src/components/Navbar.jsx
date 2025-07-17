import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const pages = [
    { name: "Home", path: "/" },
    { name: "Add Book", path: "/addbook" },
    { name: "Edit Book", path: "/editbook" },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer}>
      <List>
        {pages.map((page) => (
          <ListItem button key={page.name} component={NavLink} to={page.path}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#c5a992" }}>
        <Toolbar>
          
          <img
            src="https://thumbs.dreamstime.com/b/flying-magic-books-library-367534733.jpg" 
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />

          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "#222",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            BookSaw
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                <MenuIcon sx={{ color: "#333" }} />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={NavLink}
                  to={page.path}
                  sx={{
                    color: "#333",
                    fontWeight: 500,
                    "&.active": {
                      borderBottom: "2px solid #333",
                      fontWeight: "bold",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
