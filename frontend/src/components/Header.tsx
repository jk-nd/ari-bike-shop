import { Link } from 'react-router-dom'
import { FaBicycle, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
            <FaBicycle className="h-8 w-8" />
            <span className="text-xl font-bold">Bike Rental</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            {user?.role === 'operator' && (
              <>
                <Link 
                  to="/bikes" 
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Bikes
                </Link>
                <Link 
                  to="/fleets" 
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Fleets
                </Link>
                <Link 
                  to="/customers" 
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Customers
                </Link>
                <Link 
                  to="/rentals" 
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Rentals
                </Link>
              </>
            )}
            {user?.role === 'customer' && (
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <FaUser className="h-4 w-4" />
                  <span className="font-medium">{user.username}</span>
                  <span className="text-gray-500">({user.role.replace('_', ' ')})</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <FaSignOutAlt className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
