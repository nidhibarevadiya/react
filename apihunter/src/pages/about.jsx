import { Container, Typography, Box, Paper } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4a261", // 🔥 Background Color Changed (Orange shade)
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 600,
          borderRadius: "16px",
          backgroundColor: "#264653", // Dark Blue card background
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#e9c46a", // Yellow heading
          }}
        >
           About API Hunter
        </Typography>

        <Typography variant="h6" sx={{ mb: 2, color: "#f1faee" }}>
          API Hunter helps you discover and search free/public APIs easily.
        </Typography>

        <Typography variant="body1" sx={{ opacity: 0.9, color: "#a8dadc" }}>
          You can explore a variety of APIs, filter them by keywords, and
          directly visit their documentation. Our goal is to make finding
          developer resources simple and fun 🎯.
        </Typography>
      </Paper>
    </Box>
  );
}
