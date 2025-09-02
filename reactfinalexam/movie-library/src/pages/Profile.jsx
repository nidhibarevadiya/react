import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'

export default function Profile() {
  const { user, favorites, watchlist } = useSelector((s) => s.auth)

  return (
    <div className="container mt-4">
      <h2 className="mb-3">User Profile</h2>
      {user ? (
        <div className="mb-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}

      <hr />
      <h4 className="mt-4">Favourites</h4>
      <div className="row">
        {favorites.length ? favorites.map((m) => <MovieCard key={m.id} movie={m} />) : <p className="text-muted">No favourites yet.</p>}
      </div>

      <h4 className="mt-4">Watchlist</h4>
      <div className="row">
        {watchlist.length ? watchlist.map((m) => <MovieCard key={m.id} movie={m} />) : <p className="text-muted">No watchlist items yet.</p>}
      </div>
    </div>
  )
}
