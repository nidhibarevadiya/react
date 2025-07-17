import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";

const AddBook = () => {
  const [book, setBook] = useState({
    image: "",
    name: "",
    price: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!book.name || !book.price || !book.author || !book.image) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/Data", book);
      console.log("Book added:", response.data);
      alert("Book added successfully!");

      setBook({ image: "", name: "", price: "", author: "" }); // reset
    } catch (err) {
      console.error("Error adding book:", err);
      alert("Error adding book");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          📚 Add New Book
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Book Image URL"
            name="image"
            value={book.image}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Book Name"
            name="name"
            value={book.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={book.price}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Author Name"
            name="author"
            value={book.author}
            onChange={handleChange}
            fullWidth
          />

          <Button variant="contained" color="primary" type="submit">
            Add Book
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AddBook;
