import { FaBicycle, FaMapMarkerAlt, FaDollarSign, FaTools, FaCheckCircle, FaTimesCircle, FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import { Bike } from '../generated-client'

interface BikeDetailsProps {
  bike: Bike
  onBack: () => void
  onEdit?: (bikeId: string) => void
  onDelete?: (bikeId: string) => void
  onMarkAsRented?: (bikeId: string) => void
  onMarkAsReturned?: (bikeId: string) => void
  onPutInMaintenance?: (bikeId: string) => void
  onCompleteMaintenance?: (bikeId: string) => void
  onRetire?: (bikeId: string) => void
}

const BikeDetails = ({ 
  bike, 
  onBack, 
  onEdit, 
  onDelete, 
  onMarkAsRented, 
  onMarkAsReturned, 
  onPutInMaintenance, 
  onCompleteMaintenance, 
  onRetire 
}: BikeDetailsProps) => {
  const { user } = useAuth()

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
        return <FaCheckCircle className="h-5 w-5" />
      case 'rented':
        return <FaBicycle className="h-5 w-5" />
      case 'maintenance':
        return <FaTools className="h-5 w-5" />
      case 'retired':
        return <FaTimesCircle className="h-5 w-5" />
      default:
        return <FaBicycle className="h-5 w-5" />
    }
  }

  // Permission logic based on both bike state and user role
  const canMarkAsRented = bike['@state'] === 'available' && 
    (user?.role === 'operator' || user?.role === 'fleet_manager')
  
  const canMarkAsReturned = bike['@state'] === 'rented' && 
    (user?.role === 'operator' || user?.role === 'fleet_manager')
  
  const canPutInMaintenance = bike['@state'] === 'available' && 
    (user?.role === 'operator' || user?.role === 'fleet_manager')
  
  const canCompleteMaintenance = bike['@state'] === 'maintenance' && 
    (user?.role === 'operator' || user?.role === 'fleet_manager')
  
  const canRetire = bike['@state'] !== 'retired' && 
    user?.role === 'fleet_manager'
  
  const canEdit = user?.role === 'operator' || user?.role === 'fleet_manager'
  const canDelete = user?.role === 'fleet_manager'

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaArrowLeft className="h-4 w-4" />
            <span>Back to Bikes</span>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          {canEdit && onEdit && (
            <button
              onClick={() => onEdit(bike['@id'])}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              <FaEdit className="h-4 w-4" />
              <span>Edit</span>
            </button>
          )}
          {canDelete && onDelete && (
            <button
              onClick={() => onDelete(bike['@id'])}
              className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
            >
              <FaTrash className="h-4 w-4" />
              <span>Delete</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
                <FaBicycle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{bike.bikeId}</h1>
                <p className="text-gray-600">ID: {bike['@id'].split('/').pop()}</p>
              </div>
            </div>
                          <div className="text-right">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(bike['@state'])}`}>
                  {getStatusIcon(bike['@state'])}
                  <span className="ml-2 capitalize">{bike['@state']}</span>
                </span>
              </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
              
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{bike.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FaDollarSign className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Price Per Hour</p>
                  <p className="font-medium">${bike.pricePerHour}</p>
                </div>
              </div>

              {bike.fleetId && (
                <div>
                  <p className="text-sm text-gray-500">Fleet</p>
                  <p className="font-medium">{bike.fleetId}</p>
                </div>
              )}
            </div>

            {/* Current Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Status</h3>
              
                              <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(bike['@state'])}`}>
                    {getStatusIcon(bike['@state'])}
                    <span className="ml-1 capitalize">{bike['@state']}</span>
                  </span>
                </div>

              {bike.currentRentalContractId && (
                <div>
                  <p className="text-sm text-gray-500">Active Rental</p>
                  <p className="font-medium text-blue-600">{bike.currentRentalContractId}</p>
                </div>
              )}

              {bike.maintenanceNotes && (
                <div>
                  <p className="text-sm text-gray-500">Maintenance Notes</p>
                  <p className="font-medium text-yellow-600">{bike.maintenanceNotes}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions Section */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
          <div className="flex flex-wrap gap-3">
            {canMarkAsRented && onMarkAsRented && (
              <button
                onClick={() => onMarkAsRented(bike['@id'])}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Mark as Rented
              </button>
            )}
            
            {canMarkAsReturned && onMarkAsReturned && (
              <button
                onClick={() => onMarkAsReturned(bike['@id'])}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Mark as Returned
              </button>
            )}
            
            {canPutInMaintenance && onPutInMaintenance && (
              <button
                onClick={() => onPutInMaintenance(bike['@id'])}
                className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              >
                Put in Maintenance
              </button>
            )}
            
            {canCompleteMaintenance && onCompleteMaintenance && (
              <button
                onClick={() => onCompleteMaintenance(bike['@id'])}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Complete Maintenance
              </button>
            )}
            
            {canRetire && onRetire && (
              <button
                onClick={() => onRetire(bike['@id'])}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Retire Bike
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeDetails
