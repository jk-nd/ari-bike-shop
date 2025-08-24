import { useForm } from 'react-hook-form'
import { FaBicycle, FaTimes, FaSave } from 'react-icons/fa'

interface CreateBikeFormData {
  bikeId: string
  location: string
  pricePerHour: number
}

interface CreateBikeFormProps {
  onSubmit: (data: CreateBikeFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

const CreateBikeForm = ({ onSubmit, onCancel, isLoading = false }: CreateBikeFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<CreateBikeFormData>({
    mode: 'onChange'
  })

  const handleFormSubmit = (data: CreateBikeFormData) => {
    onSubmit(data)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <FaBicycle className="h-6 w-6 text-primary-600" />
            <h2 className="text-xl font-semibold text-gray-900">Add New Bike</h2>
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
          {/* Bike ID */}
          <div>
            <label htmlFor="bikeId" className="block text-sm font-medium text-gray-700 mb-2">
              Bike ID *
            </label>
            <input
              id="bikeId"
              type="text"
              {...register('bikeId', {
                required: 'Bike ID is required',
                minLength: {
                  value: 3,
                  message: 'Bike ID must be at least 3 characters'
                },
                pattern: {
                  value: /^[A-Z0-9]+$/,
                  message: 'Bike ID must contain only uppercase letters and numbers'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.bikeId ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g., BIKE001"
            />
            {errors.bikeId && (
              <p className="mt-1 text-sm text-red-600">{errors.bikeId.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location *
            </label>
            <input
              id="location"
              type="text"
              {...register('location', {
                required: 'Location is required',
                minLength: {
                  value: 2,
                  message: 'Location must be at least 2 characters'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.location ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g., Downtown Station"
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>

          {/* Price Per Hour */}
          <div>
            <label htmlFor="pricePerHour" className="block text-sm font-medium text-gray-700 mb-2">
              Price Per Hour ($) *
            </label>
            <input
              id="pricePerHour"
              type="number"
              step="0.01"
              min="0"
              {...register('pricePerHour', {
                required: 'Price per hour is required',
                min: {
                  value: 0.01,
                  message: 'Price must be greater than 0'
                },
                max: {
                  value: 1000,
                  message: 'Price must be less than $1000'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                errors.pricePerHour ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g., 5.00"
            />
            {errors.pricePerHour && (
              <p className="mt-1 text-sm text-red-600">{errors.pricePerHour.message}</p>
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
              disabled={!isValid || isLoading}
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
                  Create Bike
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateBikeForm
