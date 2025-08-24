import { useQuery } from '@tanstack/react-query'
import { FaBicycle, FaUsers, FaMapMarkedAlt, FaClipboardList } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import { bikeApi, fleetApi, customerApi, rentalApi } from '../services/api'

const HomePage = () => {
  const { user } = useAuth()

  // Fetch system statistics
  const { data: bikesResponse } = useQuery({
    queryKey: ['bikes'],
    queryFn: () => bikeApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  const { data: fleetsResponse } = useQuery({
    queryKey: ['fleets'],
    queryFn: () => fleetApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  const { data: customersResponse } = useQuery({
    queryKey: ['customers'],
    queryFn: () => customerApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  const { data: rentalsResponse } = useQuery({
    queryKey: ['rentals'],
    queryFn: () => rentalApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  // Extract counts from responses
  const totalBikes = bikesResponse?.data?.items?.length || 0
  const activeFleets = fleetsResponse?.data?.items?.length || 0
  const registeredCustomers = customersResponse?.data?.items?.length || 0
  const activeRentals = rentalsResponse?.data?.items?.length || 0
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Bike Rental System
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Manage your bike rental operations efficiently with our comprehensive system.
          Track bikes, manage fleets, handle customers, and process rentals all in one place.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
            <FaBicycle className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Bike Management</h3>
          <p className="text-gray-600">
            Track individual bikes, their status, maintenance, and rental history.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
            <FaMapMarkedAlt className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fleet Management</h3>
          <p className="text-gray-600">
            Organize bikes into fleets by location and manage fleet operations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
            <FaUsers className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Profiles</h3>
          <p className="text-gray-600">
            Manage customer information, rental history, and loyalty programs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
            <FaClipboardList className="h-6 w-6 text-primary-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Rental Contracts</h3>
          <p className="text-gray-600">
            Process rentals, track duration, calculate costs, and manage returns.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">System Overview</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{totalBikes}</div>
            <div className="text-gray-600">Total Bikes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{activeFleets}</div>
            <div className="text-gray-600">Active Fleets</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{registeredCustomers}</div>
            <div className="text-gray-600">Registered Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">{activeRentals}</div>
            <div className="text-gray-600">Active Rentals</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
