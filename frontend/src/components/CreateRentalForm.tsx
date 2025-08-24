import { useForm } from 'react-hook-form'
import { FaClipboardList, FaTimes, FaSave } from 'react-icons/fa'
import { useQuery } from '@tanstack/react-query'
import { bikeApi, customerApi } from '../services/api'
import { useAuth } from '../contexts/AuthContext'

interface CreateRentalFormData {
  contractId: string
  bikeId: string
  customerId: string
  hourlyRate: number
}

interface CreateRentalFormProps {
  onSubmit: (data: CreateRentalFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

const CreateRentalForm = ({ onSubmit, onCancel, isLoading = false }: CreateRentalFormProps) => {
  const { user } = useAuth()
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<CreateRentalFormData>({
    mode: 'onChange'
  })

  // Fetch available bikes and customers
  const { data: bikesResponse } = useQuery({
    queryKey: ['bikes'],
    queryFn: () => bikeApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  const { data: customersResponse } = useQuery({
    queryKey: ['customers'],
    queryFn: () => customerApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  const bikes = bikesResponse?.data?.items || []
  const customers = customersResponse?.data?.items || []

  // Filter available bikes (not currently rented)
  const availableBikes = bikes.filter((bike: any) => bike['@state'] === 'available')

  const handleFormSubmit = (data: CreateRentalFormData) => {
    // Ensure hourlyRate is a number
    const formData = {
      ...data,
      hourlyRate: Number(data.hourlyRate)
    }
    console.log('Submitting rental data:', formData)
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <FaClipboardList className="h-6 w-6 text-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900">Create New Rental</h2>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-6">
          {/* Contract ID */}
          <div>
            <label htmlFor="contractId" className="block text-sm font-medium text-gray-700 mb-2">
              Contract ID *
            </label>
            <input
              id="contractId"
              type="text"
              {...register('contractId', {
                required: 'Contract ID is required',
                minLength: {
                  value: 3,
                  message: 'Contract ID must be at least 3 characters'
                },
                pattern: {
                  value: /^[A-Z0-9]+$/,
                  message: 'Contract ID must contain only uppercase letters and numbers'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.contractId ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g., RENTAL001"
            />
            {errors.contractId && (
              <p className="mt-1 text-sm text-red-600">{errors.contractId.message}</p>
            )}
          </div>

          {/* Bike Selection */}
          <div>
            <label htmlFor="bikeId" className="block text-sm font-medium text-gray-700 mb-2">
              Bike *
            </label>
            <select
              id="bikeId"
              {...register('bikeId', {
                required: 'Bike selection is required'
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.bikeId ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select a bike</option>
              {availableBikes.map((bike: any) => (
                <option key={bike['@id']} value={bike.bikeId}>
                  {bike.bikeId} - {bike.location} (${bike.pricePerHour}/hour)
                </option>
              ))}
            </select>
            {errors.bikeId && (
              <p className="mt-1 text-sm text-red-600">{errors.bikeId.message}</p>
            )}
            {availableBikes.length === 0 && (
              <p className="mt-1 text-sm text-yellow-600">No available bikes found</p>
            )}
          </div>

          {/* Customer Selection */}
          <div>
            <label htmlFor="customerId" className="block text-sm font-medium text-gray-700 mb-2">
              Customer *
            </label>
            <select
              id="customerId"
              {...register('customerId', {
                required: 'Customer selection is required'
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.customerId ? 'border-red-300' : 'border-gray-300'
              }`}
            >
              <option value="">Select a customer</option>
              {customers.map((customer: any) => (
                <option key={customer['@id']} value={customer.customerId}>
                  {customer.customerId} - {customer.email}
                </option>
              ))}
            </select>
            {errors.customerId && (
              <p className="mt-1 text-sm text-red-600">{errors.customerId.message}</p>
            )}
            {customers.length === 0 && (
              <p className="mt-1 text-sm text-yellow-600">No customers found</p>
            )}
          </div>

          {/* Hourly Rate */}
          <div>
            <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-2">
              Hourly Rate ($) *
            </label>
            <input
              id="hourlyRate"
              type="number"
              step="0.01"
              min="0"
              {...register('hourlyRate', {
                required: 'Hourly rate is required',
                min: {
                  value: 0.01,
                  message: 'Hourly rate must be greater than 0'
                },
                max: {
                  value: 1000,
                  message: 'Hourly rate must be less than $1000'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.hourlyRate ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g., 5.99"
            />
            {errors.hourlyRate && (
              <p className="mt-1 text-sm text-red-600">{errors.hourlyRate.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid || isLoading || availableBikes.length === 0 || customers.length === 0}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating...
                </>
              ) : (
                <>
                  <FaSave className="h-4 w-4 mr-2" />
                  Create Rental
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRentalForm
