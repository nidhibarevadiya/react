import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Data")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);

  return (
    <Container sx={{ mt: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "#2f2f2f",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        📚 Book Collection
      </Typography>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Card
              className="product-item"
              sx={{
                p: 2,
                borderRadius: "16px",
                backgroundColor: "#f8f9fa",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={book.image}
                alt={book.name}
                sx={{
                  borderRadius: "12px",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontFamily: "'Playfair Display', serif",
                  color: "#2f2f2f",
                }}
              >
                {book.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#757575" }}>
                ✍️ {book.author}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 1, color: "#C5A992", fontWeight: 600 }}
              >
                ₹{book.price}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ mt: 2 }}
              >
                <Button variant="contained"  size="small">
                  Edit
                </Button>
                <Button variant="outlined" color="dark"  className="delete "size="small">
                  Delete
                </Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
