import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPopularMovies, searchMovies, fetchMovieDetails } from '../../api/tmdb'

export const getPopularMovies = createAsyncThunk('movies/popular', async (page = 1) => {
  const res = await fetchPopularMovies(page)
  return res.data
})

export const getSearchedMovies = createAsyncThunk('movies/search', async ({ query, page = 1 }) => {
  const res = await searchMovies(query, page)
  return res.data
})

export const getMovieDetails = createAsyncThunk('movies/details', async (id) => {
  const res = await fetchMovieDetails(id)
  return res.data
})

const initialState = {
  list: [],
  page: 1,
  totalPages: 1,
  details: null,
  loading: false,
  error: null,
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearList(state) {
      state.list = []
      state.page = 1
      state.totalPages = 1
    },
  },
  extraReducers: (builder) => {
    builder
      // Popular
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.loading = false
        state.page = action.payload.page
        state.totalPages = action.payload.total_pages
        state.list = action.payload.results || []
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Search
      .addCase(getSearchedMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getSearchedMovies.fulfilled, (state, action) => {
        state.loading = false
        state.page = action.payload.page
        state.totalPages = action.payload.total_pages
        state.list = action.payload.results || []
      })
      .addCase(getSearchedMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // Details
      .addCase(getMovieDetails.pending, (state) => {
        state.loading = true
        state.error = null
        state.details = null
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loading = false
        state.details = action.payload
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { clearList } = movieSlice.actions
export default movieSlice.reducer
