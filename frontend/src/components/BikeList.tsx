import { useState } from 'react'
import { FaBicycle, FaSearch, FaFilter, FaPlus } from 'react-icons/fa'
import { Bike } from '../generated-client'
import BikeCard from './BikeCard'

interface BikeListProps {
  bikes: Bike[]
  isLoading?: boolean
  onViewDetails?: (bikeId: string) => void
  onCreateBike?: () => void
}

const BikeList = ({ bikes, isLoading = false, onViewDetails, onCreateBike }: BikeListProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const filteredBikes = bikes.filter(bike => {
    const matchesSearch = bike.bikeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bike.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || bike['@state'] === statusFilter
    return matchesSearch && matchesStatus
  })

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'available', label: 'Available' },
    { value: 'rented', label: 'Rented' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'retired', label: 'Retired' }
  ]

  const handleViewDetails = (bikeId: string) => {
    onViewDetails?.(bikeId)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading bikes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-3">
          <FaBicycle className="h-6 w-6 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">Bikes</h1>
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
            {filteredBikes.length} {filteredBikes.length === 1 ? 'bike' : 'bikes'}
          </span>
        </div>
        
        <button
          onClick={onCreateBike}
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          <FaPlus className="h-4 w-4 mr-2" />
          Add Bike
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search bikes by ID or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="sm:w-48">
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white"
              >
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bike Grid */}
      {filteredBikes.length === 0 ? (
        <div className="text-center py-12">
          <FaBicycle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bikes found</h3>
          <p className="text-gray-600">
            {searchTerm || statusFilter !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Get started by adding your first bike.'
            }
          </p>
          {!searchTerm && statusFilter === 'all' && (
            <button
              onClick={onCreateBike}
              className="mt-4 inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <FaPlus className="h-4 w-4 mr-2" />
              Add First Bike
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBikes.map(bike => (
            <BikeCard
              key={bike['@id']}
              bike={bike}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default BikeList
