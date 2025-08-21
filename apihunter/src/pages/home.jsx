import { useState, useEffect } from "react";
import SearchBar from "../components/serchbar";
import ApiCard from "../components/apicard";
import apis from "../data/api.json";
import { Grid, Box, Typography } from "@mui/material";

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
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        p: 4,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "white", fontWeight: "bold", mb: 3 }}
      >
         API Hunter
      </Typography>

      {/* Search bar wrapper */}
      <Box
        sx={{
          maxWidth: "600px",
          mx: "auto",
          background: "white",
          borderRadius: "12px",
          boxShadow: 4,
          p: 2,
          mb: 4,
        }}
      >
        <SearchBar query={query} setQuery={setQuery} />
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {filtered.length > 0 ? (
          filtered.map((api) => (
            <Grid item key={api.id} xs={12} sm={6} md={4} lg={3}>
              <ApiCard api={api} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ color: "white", mt: 5, fontStyle: "italic" }}
          >
            ❌ No APIs found. Try searching something else!
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
