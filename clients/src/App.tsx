import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./auth/AuthContext"
import LoginComponent from "./views/Login"
import DashboardComponent from "./views/Dashboard"
import NotFoundComponent from "./views/NotFound"
import AuthProvider from "./auth/AuthContext"

import { ReactNode } from "react";

function AuthenticatedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) {
    return children
  }
  return <Navigate to="/login" />
}

function UnauthenticatedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return children
  }
  return <Navigate to="/dashboard" />
}


export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={
              <UnauthenticatedRoute>
                <LoginComponent />
              </UnauthenticatedRoute>
            } />
            <Route path="/dashboard/" element={
              <AuthenticatedRoute>
                <DashboardComponent />
              </AuthenticatedRoute>
            } />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}



