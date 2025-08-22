import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
  Divider,
} from "@mui/material";

export default function ApiCard({ api }) {
  return (
    <Card
      sx={{
        maxWidth: 360,
        m: "auto",
        borderRadius: "18px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
        bgcolor: "background.paper",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
        },
      }}
    >
      {/* Top Image */}
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <CardMedia
          component="img"
          height="120"
          image={api.image}
          alt={api.name}
          sx={{
            width: "120px",
            objectFit: "contain",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))",
          }}
        />
      </Box>

      <Divider />

      {/* Content */}
      <CardContent sx={{ textAlign: "center", px: 3, py: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            mb: 1,
          }}
        >
          {api.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            minHeight: "40px",
            lineHeight: 1.5,
          }}
        >
          {api.description}
        </Typography>

        {/* CTA Button */}
        <Button
          href={api.url}
          target="_blank"
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            borderRadius: "10px",
            py: 1.2,
            fontWeight: "bold",
            fontSize: "0.9rem",
            textTransform: "none",
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)",
              transform: "scale(1.02)",
            },
            transition: "all 0.25s ease-in-out",
          }}
        >
          🌐 Explore API
        </Button>
      </CardContent>
    </Card>
  );
}
