import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
})

export const fetchPopularMovies = (page = 1) =>
  tmdb.get('/movie/popular', { params: { page } })

export const searchMovies = (query, page = 1) =>
  tmdb.get('/search/movie', { params: { query, page, include_adult: false } })

export const fetchMovieDetails = (id) =>
  tmdb.get(`/movie/${id}`, { params: { append_to_response: 'credits' } })

export default tmdb
