import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext'
import { rentalApi } from '../services/api'
import { RentalContract } from '../generated-client'
import { FaSearch, FaFilter, FaEye, FaTimes, FaCheck, FaClock, FaPlus } from 'react-icons/fa'
import CreateRentalForm from '../components/CreateRentalForm'

const RentalsPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [showCreateForm, setShowCreateForm] = useState(false)

  // Fetch rentals from API
  const { data: rentalsResponse, isLoading, error } = useQuery({
    queryKey: ['rentals'],
    queryFn: () => rentalApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  // Cancel rental mutation
  const cancelRentalMutation = useMutation({
    mutationFn: (rentalId: string) => rentalApi.cancel(rentalId, 'Cancelled by operator', user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rentals'] })
    }
  })

  // Create rental mutation
  const createRentalMutation = useMutation({
    mutationFn: (data: { contractId: string; bikeId: string; customerId: string; hourlyRate: number }) =>
      rentalApi.create(data, user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rentals'] })
      setShowCreateForm(false)
    }
  })

  // Extract rentals from response
  const rentals = rentalsResponse?.data?.items || []

  // Filter rentals based on search and status
  const filteredRentals = rentals.filter((rental: RentalContract) => {
    const matchesSearch = rental.contractId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rental.bikeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         rental.customerId.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'all' || rental['@state'] === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleViewDetails = (rentalId: string) => {
    const id = rentalId.split('/').pop()
    navigate(`/rentals/${id}`)
  }

  const handleCancelRental = async (rentalId: string) => {
    try {
      await cancelRentalMutation.mutateAsync(rentalId)
    } catch (error) {
      console.error('Error cancelling rental:', error)
    }
  }

  const handleCreateRental = () => {
    setShowCreateForm(true)
  }

  const handleCreateRentalSubmit = async (data: { contractId: string; bikeId: string; customerId: string; hourlyRate: number }) => {
    try {
      console.log('Creating rental with data:', data)
      console.log('Access token:', user?.accessToken ? 'Present' : 'Missing')
      await createRentalMutation.mutateAsync(data)
    } catch (error) {
      console.error('Error creating rental:', error)
    }
  }

  const handleCreateRentalCancel = () => {
    setShowCreateForm(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'completed':
        return 'bg-blue-100 text-blue-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <FaClock className="h-4 w-4" />
      case 'completed':
        return <FaCheck className="h-4 w-4" />
      case 'cancelled':
        return <FaTimes className="h-4 w-4" />
      default:
        return <FaClock className="h-4 w-4" />
    }
  }

  const formatDuration = (startTime: string, endTime: string | null) => {
    if (!endTime) {
      return 'Ongoing'
    }
    // Calculate duration from start and end times
    const start = new Date(startTime)
    const end = new Date(endTime)
    const diffMs = end.getTime() - start.getTime()
    const hours = Math.floor(diffMs / (1000 * 60 * 60))
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
    return `${hours}h ${minutes}m`
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading rentals...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-600">Error loading rentals. Please try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Rentals</h1>
          <p className="text-gray-600 mt-1">
            {filteredRentals.length} of {rentals.length} rental contracts
          </p>
        </div>
        <button
          onClick={handleCreateRental}
          className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
        >
          <FaPlus className="h-4 w-4" />
          <span>Add Rental</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by contract ID, bike ID, or customer ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="md:w-48">
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Rentals List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {filteredRentals.length === 0 ? (
          <div className="text-center py-12">
            <FaClock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No rentals found</h3>
            <p className="text-gray-600">
              {rentals.length === 0 
                ? "No rental contracts have been created yet."
                : "No rentals match your current filters."
              }
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contract ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bike ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hourly Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRentals.map((rental: RentalContract) => (
                  <tr key={rental['@id']} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {rental.contractId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rental.bikeId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {rental.customerId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${rental.hourlyRate}
                    </td>
                                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                       {formatDuration(rental.startTime, rental.endTime)}
                     </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(rental['@state'])}`}>
                        {getStatusIcon(rental['@state'])}
                        <span className="ml-1 capitalize">{rental['@state']}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewDetails(rental['@id'])}
                          className="text-primary-600 hover:text-primary-900 transition-colors"
                        >
                          <FaEye className="h-4 w-4" />
                        </button>
                        {rental['@state'] === 'active' && (
                          <button
                            onClick={() => handleCancelRental(rental['@id'])}
                            disabled={cancelRentalMutation.isPending}
                            className="text-red-600 hover:text-red-900 transition-colors disabled:opacity-50"
                          >
                            <FaTimes className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showCreateForm && (
        <CreateRentalForm
          onSubmit={handleCreateRentalSubmit}
          onCancel={handleCreateRentalCancel}
          isLoading={createRentalMutation.isPending}
        />
      )}
    </div>
  )
}

export default RentalsPage
