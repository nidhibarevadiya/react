import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchedMovies } from '../redux/slices/movieSlice'
import MovieCard from '../components/MovieCard'

export default function Search() {
  const dispatch = useDispatch()
  const { list, loading, error } = useSelector((s) => s.movies)
  const [q, setQ] = useState('')

  const onChange = useCallback((e) => {
    const val = e.target.value
    setQ(val)
    if (val.trim().length > 2) {
      dispatch(getSearchedMovies({ query: val.trim() }))
    }
  }, [dispatch])

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Search Movies</h2>
      <input value={q} onChange={onChange} className="form-control mb-3" placeholder="Type to search... (min 3 chars)" />
      {loading && <div className="alert alert-info">Searching...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {list.map((m) => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  )
}
