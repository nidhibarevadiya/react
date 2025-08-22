import { useState, useEffect } from "react";
import SearchBar from "../components/serchbar";
import ApiCard from "../components/apicard";
import apis from "../data/api.json";
import { Grid, Box, Typography, Paper } from "@mui/material";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(apis);

  useEffect(() => {
    setFiltered(
      apis.filter((a) =>
        a.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        p: { xs: 3, md: 6 },
      }}
    >
      {/* Hero Section */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: 800,
            letterSpacing: 1.2,
            mb: 2,
          }}
        >
          🔍 API Hunter
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255,255,255,0.8)",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Discover, explore, and test public APIs all in one place.  
          Search by name or keyword and start building smarter projects 🚀.
        </Typography>
      </Box>

      {/* Search bar wrapper (Glassmorphism) */}
      <Paper
        elevation={8}
        sx={{
          maxWidth: 700,
          mx: "auto",
          mb: 6,
          p: 2.5,
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <SearchBar query={query} setQuery={setQuery} />
      </Paper>

      {/* Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {filtered.length > 0 ? (
          filtered.map((api) => (
            <Grid item key={api.id} xs={12} sm={6} md={4} lg={3}>
              <ApiCard api={api} />
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              textAlign: "center",
              color: "white",
              mt: 8,
              opacity: 0.9,
            }}
          >
            <Typography variant="h5" gutterBottom>
              ❌ No APIs Found
            </Typography>
            <Typography variant="body1">
              Try adjusting your search or explore a different keyword 🔎
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
}
