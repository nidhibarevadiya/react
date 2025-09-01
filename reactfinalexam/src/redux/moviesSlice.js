import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Popular movies fetch
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopular",
  async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return res.data.results;
  }
);


export const searchMovies = createAsyncThunk(
  "movies/search",
  async (query) => {
    const res = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return res.data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.list = action.payload;
      });
  },
});

export default movieSlice.reducer;
