import { useForm } from 'react-hook-form'
import { FaUser, FaTimes, FaSave } from 'react-icons/fa'

interface CreateCustomerFormData {
  customerId: string
  email: string
}

interface CreateCustomerFormProps {
  onSubmit: (data: CreateCustomerFormData) => void
  onCancel: () => void
  isLoading?: boolean
  existingCustomers?: Array<{ customerId: string; email: string }>
}

// Available OIDC users (excluding alice and carol who are operators)
const availableUsers = [
  { username: 'ivan', email: 'ivan@example.com' },
  { username: 'bob', email: 'bob@example.com' },
  { username: 'dave', email: 'dave@example.com' },
  { username: 'eve', email: 'eve@example.com' },
  { username: 'frank', email: 'frank@example.com' }
]

const CreateCustomerForm = ({ onSubmit, onCancel, isLoading = false, existingCustomers = [] }: CreateCustomerFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<CreateCustomerFormData>({
    mode: 'onChange'
  })

  const selectedUser = watch('customerId')

  const handleFormSubmit = (data: CreateCustomerFormData) => {
    // Find the selected user's email
    const user = availableUsers.find(u => u.username === data.customerId)
    const formData = {
      customerId: data.customerId,
      email: user?.email || data.customerId + '@example.com'
    }
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <FaUser className="mr-2" />
            Create New Customer
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {/* Customer ID (OIDC User Selection) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer ID *
            </label>
            <select
              {...register('customerId', { required: 'Customer ID is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select a user</option>
              {availableUsers.map((user) => {
                const isAlreadyCustomer = existingCustomers.some(customer => 
                  customer.customerId === user.username || customer.email === user.email
                )
                return (
                  <option 
                    key={user.username} 
                    value={user.username}
                    disabled={isAlreadyCustomer}
                  >
                    {user.username} - {user.email} {isAlreadyCustomer ? '(Already a customer)' : ''}
                  </option>
                )
              })}
            </select>
            {errors.customerId && (
              <p className="mt-1 text-sm text-red-600">{errors.customerId.message}</p>
            )}
          </div>

          {/* Email (Auto-filled based on selection) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              value={selectedUser ? availableUsers.find(u => u.username === selectedUser)?.email || '' : ''}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Email will be auto-filled"
            />
            <p className="mt-1 text-xs text-gray-500">
              Email is automatically set based on the selected user
            </p>
          </div>

          {/* Info Box */}
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <h4 className="text-sm font-medium text-blue-800 mb-2">Available Users:</h4>
            <div className="text-xs text-blue-700 space-y-1">
              <div><strong>Ivan:</strong> ivan@example.com</div>
              <div><strong>Bob:</strong> bob@example.com</div>
              <div><strong>Dave:</strong> dave@example.com</div>
              <div><strong>Eve:</strong> eve@example.com</div>
              <div><strong>Frank:</strong> frank@example.com</div>
            </div>
            <p className="mt-2 text-xs text-blue-600">
              Note: Alice and Carol are operators and cannot be customers
            </p>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                'Creating...'
              ) : (
                <>
                  <FaSave className="mr-2" />
                  Create Customer
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCustomerForm
