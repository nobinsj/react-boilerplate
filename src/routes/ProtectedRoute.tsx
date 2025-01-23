import { LinearProgress } from '@mui/material'
import React, { ReactNode, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn") || "false")

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />
  }
  return <Suspense fallback={<LinearProgress />}>{children}</Suspense>
}

export default ProtectedRoute