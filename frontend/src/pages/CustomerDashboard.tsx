import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext'
import { bikeApi, rentalApi, customerApi } from '../services/api'
import { FaBicycle, FaClipboardList, FaUser, FaStar, FaDollarSign, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

interface Bike {
  '@id': string
  '@state': string
  bikeId: string
  location: string
  pricePerHour: number
}

interface RentalContract {
  '@id': string
  '@state': string
  contractId: string
  bikeId: string
  customerId: string
  hourlyRate: number
  startTime: string
  endTime: string | null
}

const CustomerDashboard = () => {
  const { user } = useAuth()

  // Note: Customers don't have permission to list all bikes or all rental contracts
  // This is by design for security reasons
  const bikesResponse = { data: { items: [] } }
  const rentalsResponse = { data: { items: [] } }
  const bikesLoading = false
  const rentalsLoading = false
  const bikesError = null
  const rentalsError = null

  // Fetch customer profile
  const { data: profileResponse, isLoading: profileLoading, error: profileError } = useQuery({
    queryKey: ['customer-profile'],
    queryFn: async () => {
      // First get the customer by username to find their @id
      const customers = await customerApi.list(user?.accessToken)
      const customer = customers.data.items.find((c: any) => c.customerId === user?.username)
      
      if (!customer) {
        throw new Error(`Customer profile not found for user ${user?.username}`)
      }
      
      return customerApi.getProfile(customer['@id'], user?.accessToken)
    },
    enabled: !!user?.accessToken && !!user?.username
  })

  // Customer dashboard shows profile information and explains the system
  // Customers don't have permission to list all bikes or rental contracts
  // This is by design for security and privacy reasons

  const formatDuration = (startTime: string, endTime: string | null) => {
    const start = new Date(startTime)
    const end = endTime ? new Date(endTime) : new Date()
    const diffMs = end.getTime() - start.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    
    if (diffHours > 0) {
      return `${diffHours}h ${diffMinutes}m`
    }
    return `${diffMinutes}m`
  }

  const calculateCost = (hourlyRate: number, startTime: string, endTime: string | null) => {
    const start = new Date(startTime)
    const end = endTime ? new Date(endTime) : new Date()
    const diffHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
    return (hourlyRate * diffHours).toFixed(2)
  }

  if (bikesLoading || rentalsLoading || profileLoading) {
    return <div className="flex justify-center items-center h-64">Loading dashboard...</div>
  }

  if (bikesError || rentalsError || profileError) {
    return <div className="text-red-600">Error loading dashboard data</div>
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4">
          <FaUser className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.username}!</h1>
            <p className="text-gray-600">Customer Dashboard</p>
          </div>
        </div>
        
        {profileResponse && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <h3 className="font-medium text-blue-800 mb-2">Your Profile</h3>
            <p className="text-blue-700">{profileResponse.data}</p>
          </div>
        )}
      </div>

      {/* Available Bikes Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaBicycle className="mr-2" />
            Available Bikes
          </h2>
        </div>
        <div className="p-6">
          <div className="text-center py-8">
            <div className="text-gray-500 mb-4">
              <FaBicycle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">Contact an Operator</p>
              <p className="text-sm">To see available bikes and create rental contracts, please contact an operator.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> Customers can view their rental history and profile information here. 
                For bike availability and new rentals, operators manage the system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer's Rental Contracts */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaClipboardList className="mr-2" />
            Your Rental Contracts
          </h2>
        </div>
        <div className="p-6">
          <div className="text-center py-8">
            <div className="text-gray-500 mb-4">
              <FaClipboardList className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">No Active Rentals</p>
              <p className="text-sm">You don't have any active rental contracts at the moment.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-sm text-green-700">
                <strong>Your Profile:</strong> You can view your customer profile information above, 
                including your rental history and loyalty status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard
