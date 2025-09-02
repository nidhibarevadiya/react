import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

export default function Navbar() {
  const { user } = useSelector((s) => s.auth)
  const dispatch = useDispatch()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🎬 Movie Library</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Popular</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/search">Search</NavLink></li>
            {user && <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li>}
          </ul>
          <div className="d-flex">
            {user ? (
              <button onClick={() => dispatch(logout())} className="btn btn-outline-light">Logout</button>
            ) : (
              <Link to="/login" className="btn btn-outline-light">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
