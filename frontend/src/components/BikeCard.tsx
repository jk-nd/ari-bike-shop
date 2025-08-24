import { FaBicycle, FaMapMarkerAlt, FaDollarSign, FaTools, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { Bike } from '../generated-client'

interface BikeCardProps {
  bike: Bike
  onViewDetails?: (_bikeId: string) => void
}

const BikeCard = ({ bike, onViewDetails }: BikeCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800'
      case 'rented':
        return 'bg-blue-100 text-blue-800'
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800'
      case 'retired':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <FaCheckCircle className="h-4 w-4" />
      case 'rented':
        return <FaBicycle className="h-4 w-4" />
      case 'maintenance':
        return <FaTools className="h-4 w-4" />
      case 'retired':
        return <FaTimesCircle className="h-4 w-4" />
      default:
        return <FaBicycle className="h-4 w-4" />
    }
  }

  const handleViewDetails = () => {
    onViewDetails?.(bike['@id'])
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            <FaBicycle className="h-5 w-5 text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{bike.bikeId}</h3>
            <p className="text-sm text-gray-500">ID: {bike['@id'].split('/').pop()}</p>
          </div>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(bike['@state'])}`}>
          {getStatusIcon(bike['@state'])}
          <span className="ml-1 capitalize">{bike['@state']}</span>
        </span>
      </div>

      {/* Details */}
      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <FaMapMarkerAlt className="h-4 w-4 mr-2 text-gray-400" />
          <span>{bike.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <FaDollarSign className="h-4 w-4 mr-2 text-gray-400" />
          <span>${bike.pricePerHour}/hour</span>
        </div>

        {bike.fleetId && (
          <div className="text-sm text-gray-600">
            <span className="font-medium">Fleet:</span> {bike.fleetId}
          </div>
        )}

        {bike.currentRentalContractId && (
          <div className="text-sm text-blue-600">
            <span className="font-medium">Active Rental:</span> {bike.currentRentalContractId}
          </div>
        )}

        {bike.maintenanceNotes && (
          <div className="text-sm text-yellow-600">
            <span className="font-medium">Maintenance:</span> {bike.maintenanceNotes}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          onClick={handleViewDetails}
          className="w-full bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

export default BikeCard
