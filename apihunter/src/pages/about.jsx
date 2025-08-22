import { Typography, Box, Paper } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 5,
          maxWidth: 650,
          borderRadius: "20px",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "white",
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "800",
            background: "linear-gradient(90deg, #ffdd57, #ff6f61)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About API Hunter
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            fontWeight: "500",
            color: "#e0e0e0",
          }}
        >
          Your gateway to the world of APIs 🌍
        </Typography>

        {/* Body */}
        <Typography
          variant="body1"
          sx={{
            color: "#cfd8dc",
            lineHeight: 1.8,
            fontSize: "1.05rem",
          }}
        >
          API Hunter is more than just a directory — it’s a toolkit for curious
          developers. We gather public and free APIs from across the globe and
          make them accessible in one clean, organized place.  
          <br />
          <br />
          Whether you’re building your next side project, experimenting with new
          ideas, or looking for inspiration, API Hunter helps you discover
          powerful resources faster.  
          <br />
          <br />
          Our mission is simple: **turn the overwhelming API jungle into a smooth
          hunting ground for developers**. 🚀
        </Typography>
      </Paper>
    </Box>
  );
}
