import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularMovies } from '../redux/slices/movieSlice'
import MovieCard from '../components/MovieCard'
import Loader from '../components/Loader'

export default function Home() {
  const dispatch = useDispatch()
  const { list, loading, error } = useSelector((s) => s.movies)

  useEffect(() => {
    dispatch(getPopularMovies())
  }, [dispatch])

  if (loading) return <Loader />
  if (error) return <div className="container mt-4 alert alert-danger">{error}</div>

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Popular Movies</h2>
      <div className="row">
        {list.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  )
}
