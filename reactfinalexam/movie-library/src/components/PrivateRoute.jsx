import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute({ children }) {
  const { user } = useSelector((s) => s.auth)
  return user ? children : <Navigate to="/login" replace />
}
