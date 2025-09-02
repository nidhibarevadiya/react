import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, addWatchlist, removeFavorite, removeWatchlist } from '../redux/slices/authSlice'

export default function MovieCard({ movie }) {
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder.png'
  const { favorites, watchlist } = useSelector((s) => s.auth)
  const dispatch = useDispatch()

  const isFav = !!favorites.find((m) => m.id === movie.id)
  const isWatch = !!watchlist.find((m) => m.id === movie.id)

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card h-100 shadow-sm">
        <img src={poster} className="card-img-top" alt={movie.title} />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{movie.title}</h6>
          <div className="mt-auto d-flex gap-2">
            <Link to={`/movie/${movie.id}`} className="btn btn-primary btn-sm">Details</Link>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => isFav ? dispatch(removeFavorite(movie.id)) : dispatch(addFavorite(movie))}
            >
              {isFav ? 'Unfavourite' : 'Favourite'}
            </button>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => isWatch ? dispatch(removeWatchlist(movie.id)) : dispatch(addWatchlist(movie))}
            >
              {isWatch ? 'Unwatch' : 'Watchlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
