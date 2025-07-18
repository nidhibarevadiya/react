import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:3000/Data")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/Data/${id}`)
      .then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting book:", err);
      });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontFamily: "'Playfair Display', serif",
          color: "#5f5326",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        📚 Book Collection
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: 410,             
                width: "270px",           
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                margin:2,
                padding: 2,
                boxShadow: 13,
                borderRadius: 3,
              }}
            >
              <CardMedia
                component="img"
                image={book.image}
                alt={book.name}
                sx={{
                  height: 160,
                  width: "50%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />

              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "'Playfair Display', serif",
                    color: "#c5a992",
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
              </CardContent>

              <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => navigate(`/edit/${book.id}`)}
                  sx={{
                    backgroundColor: "#74642f",
                    "&:hover": {
                      backgroundColor: "#5f5326",
                    },
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleDelete(book.id)}
                  sx={{
                    backgroundColor: "#74642f",
                    "&:hover": {
                      backgroundColor: "#5f5326",
                    },
                  }}
                >
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
