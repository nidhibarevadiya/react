import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import axios from "axios";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: "",
    author: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Data/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error("Failed to fetch book", err));
  }, [id]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/Data/${id}`, book)
      .then(() => navigate("/"))
      .catch((err) => console.error("Update failed", err));
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 6,
          backgroundColor: "#c5a992",
          borderRadius: "16px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#74642f", fontWeight: "bold", textAlign: "center" }}
        >
          ✏️ Edit Book
        </Typography>

        <Box component="form" onSubmit={handleUpdate}>
          <Stack spacing={2}>
            <TextField
              label="Book Name"
              name="name"
              value={book.name}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{ style: { color: "#74642f" } }}
              InputProps={{
                style: { color: "#74642f", backgroundColor: "#f5f2ed" },
              }}
            />
            <TextField
              label="Author"
              name="author"
              value={book.author}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{ style: { color: "#74642f" } }}
              InputProps={{
                style: { color: "#74642f", backgroundColor: "#f5f2ed" },
              }}
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              value={book.price}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{ style: { color: "#74642f" } }}
              InputProps={{
                style: { color: "#74642f", backgroundColor: "#f5f2ed" },
              }}
            />
            <TextField
              label="Image URL"
              name="image"
              value={book.image}
              onChange={handleChange}
              fullWidth
              required
              InputLabelProps={{ style: { color: "#74642f" } }}
              InputProps={{
                style: { color: "#74642f", backgroundColor: "#f5f2ed" },
              }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#74642f",
                "&:hover": {
                  backgroundColor: "#5c5028",
                },
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Update Book
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditBook;
