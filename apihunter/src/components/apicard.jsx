import { Card, CardContent, Typography, CardMedia, Button } from "@mui/material";

export default function ApiCard({ api }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: "auto",
        borderRadius: "16px",
        boxShadow: 6,
        transition: "0.3s",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 10,
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={api.image}
        alt={api.name}
        sx={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }}>
          {api.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {api.description}
        </Typography>
        <Button
          href={api.url}
          target="_blank"
          fullWidth
          variant="contained"
          sx={{
            borderRadius: "8px",
            background: "linear-gradient(45deg, #42a5f5, #478ed1)",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg, #478ed1, #42a5f5)",
            },
          }}
        >
          Visit API
        </Button>
      </CardContent>
    </Card>
  );
}
