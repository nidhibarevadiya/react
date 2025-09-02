import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../redux/slices/movieSlice'
import Loader from '../components/Loader'

export default function MovieDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { details, loading, error } = useSelector((s) => s.movies)

  useEffect(() => {
    dispatch(getMovieDetails(id))
  }, [id, dispatch])

  if (loading || !details) return <Loader />
  if (error) return <div className="container mt-4 alert alert-danger">{error}</div>

  const poster = details.poster_path ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : '/placeholder.png'
  const genres = details.genres?.map((g) => g.name).join(', ') || 'N/A'
  const cast = details.credits?.cast?.slice(0, 10).map((c) => c.name).join(', ') || 'N/A'

  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-4">
          <img src={poster} alt={details.title} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-8">
          <h2>{details.title}</h2>
          <p><strong>Release:</strong> {details.release_date || 'N/A'}</p>
          <p><strong>Genres:</strong> {genres}</p>
          <p><strong>Rating:</strong> {details.vote_average?.toFixed(1) ?? 'N/A'}</p>
          <p><strong>Cast:</strong> {cast}</p>
          <p>{details.overview}</p>
        </div>
      </div>
    </div>
  )
}
