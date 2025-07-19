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
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Pagination,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [authorFilter, setAuthorFilter] = useState("all");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:3000/Data")
      .then((res) => {
        const lowercaseBooks = res.data.map((book) => ({
          ...book,
          name: book.name.toLowerCase(),
          author: book.author.toLowerCase(),
        }));
        setBooks(lowercaseBooks);
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

  // Filter and sort books
  const filteredBooks = books
    .filter((book) => book.name.includes(searchTerm.toLowerCase()))
    .filter((book) =>
      authorFilter === "all" ? true : book.author === authorFilter
    );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortOrder === "highToLow") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else {
      return 0;
    }
  });

  const uniqueAuthors = [...new Set(books.map((b) => b.author))];

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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

      {books.length > 0 && (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <TextField
            label="Search by Book Name"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setSearchTerm(e.target.value.toLowerCase());
              setCurrentPage(1); // Reset page on search
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#74642f",
                color: "white",
                borderRadius: "8px",
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5f5326",
              },
              "& .MuiInputLabel-shrink": {
                color: "white",
              },
            }}
          />

          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel sx={{ color: "white" }}>Sort by Price</InputLabel>
            <Select
              value={sortOrder}
              label="Sort by Price"
              onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1); // Reset page on sort
              }}
              displayEmpty
              sx={{
                backgroundColor: "#74642f",
                color: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5f5326",
                },
              }}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="lowToHigh">Low to High</MenuItem>
              <MenuItem value="highToLow">High to Low</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel sx={{ color: "white" }}>Filter by Author</InputLabel>
            <Select
              value={authorFilter}
              label="Filter by Author"
              onChange={(e) => {
                setAuthorFilter(e.target.value);
                setCurrentPage(1); // Reset page on filter
              }}
              sx={{
                backgroundColor: "#74642f",
                color: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#5f5326",
                },
              }}
            >
              <MenuItem value="all">All Authors</MenuItem>
              {uniqueAuthors.map((author, index) => (
                <MenuItem key={index} value={author}>
                  {author}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      )}

      <Grid container spacing={4} justifyContent="center">
        {currentBooks.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: 410,
                width: "270px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                margin: 2,
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
                    textTransform: "lowercase",
                  }}
                >
                  {book.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", textTransform: "lowercase" }}
                >
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

      {/* Pagination Controls */}
      {sortedBooks.length > booksPerPage && (
        <Stack direction="row" justifyContent="center" sx={{ mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{
              ".MuiPaginationItem-root": {
                backgroundColor: "#74642f",
                color: "white",
                "&.Mui-selected": {
                  backgroundColor: "#5f5326",
                },
                "&:hover": {
                  backgroundColor: "#5f5326",
                },
              },
            }}
          />
        </Stack>
      )}
    </Container>
  );
};

export default Home;
