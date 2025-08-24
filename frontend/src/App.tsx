import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ToastProvider } from './contexts/ToastContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import BikesPage from './pages/BikesPage'
import BikeDetailsPage from './pages/BikeDetailsPage'
import RentalsPage from './pages/RentalsPage'
import CustomersPage from './pages/CustomersPage'
import CustomerDashboard from './pages/CustomerDashboard'

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

// App Routes Component
const AppRoutes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<HomePage />} />
        <Route path="bikes" element={<BikesPage />} />
        <Route path="bikes/:id" element={<BikeDetailsPage />} />
                       <Route path="rentals" element={<RentalsPage />} />
               <Route path="customers" element={<CustomersPage />} />
               <Route path="dashboard" element={<CustomerDashboard />} />
      </Route>
    </Routes>
  )
}

// Main App Component
function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
