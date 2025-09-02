import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    dispatch(login({ name: email.split('@')[0], email }))
    navigate('/')
  }

  return (
    <div className="container mt-4" style={{maxWidth: 480}}>
      <h2 className="mb-3">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" required />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
