import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext'
import { customerApi } from '../services/api'
import { FaSearch, FaFilter, FaEye, FaUserPlus, FaTrash, FaUser, FaEnvelope, FaStar, FaDollarSign } from 'react-icons/fa'
import CreateCustomerForm from '../components/CreateCustomerForm'

interface Customer {
  '@id': string
  '@state': string
  customerId: string
  email: string
  totalRentals: number
  loyaltyPoints: number
  totalSpent: number
}

const CustomersPage = () => {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const queryClient = useQueryClient()

  // Fetch customers
  const { data: customersResponse, isLoading, error } = useQuery({
    queryKey: ['customers'],
    queryFn: () => customerApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  // Create customer mutation
  const createCustomerMutation = useMutation({
    mutationFn: (data: { customerId: string; email: string }) =>
      customerApi.create(data, user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] })
      setShowCreateForm(false)
    }
  })

  // Suspend customer mutation
  const suspendCustomerMutation = useMutation({
    mutationFn: (customerId: string) =>
      customerApi.suspend(customerId, user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] })
    }
  })

  const handleCreateCustomer = () => {
    setShowCreateForm(true)
  }

  const handleCreateCustomerSubmit = async (data: { customerId: string; email: string }) => {
    try {
      // Check if customer already exists
      const existingCustomer = customers.find((customer: Customer) => 
        customer.customerId === data.customerId || customer.email === data.email
      )
      
      if (existingCustomer) {
        alert(`Customer with ID "${data.customerId}" or email "${data.email}" already exists!`)
        return
      }
      
      await createCustomerMutation.mutateAsync(data)
    } catch (error) {
      console.error('Error creating customer:', error)
    }
  }

  const handleCreateCustomerCancel = () => {
    setShowCreateForm(false)
  }

  const handleSuspendCustomer = async (customerId: string) => {
    if (window.confirm(`Are you sure you want to suspend customer ${customerId}?`)) {
      try {
        await suspendCustomerMutation.mutateAsync(customerId)
      } catch (error) {
        console.error('Error suspending customer:', error)
      }
    }
  }

  const customers = customersResponse?.data?.items || []
  const filteredCustomers = customers.filter((customer: Customer) => {
    const matchesSearch = customer.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || customer['@state'] === statusFilter
    return matchesSearch && matchesStatus
  })

  const getLoyaltyTier = (totalSpent: number) => {
    if (totalSpent >= 1000) return 'Gold'
    if (totalSpent >= 500) return 'Silver'
    if (totalSpent >= 100) return 'Bronze'
    return 'Standard'
  }

  if (isLoading) return <div className="flex justify-center items-center h-64">Loading customers...</div>
  if (error) return <div className="text-red-600">Error loading customers: {(error as any).message || 'Unknown error'}</div>

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600">{filteredCustomers.length} of {customers.length} customers</p>
        </div>
        <button
          onClick={handleCreateCustomer}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center gap-2"
        >
          <FaUserPlus />
          Add Customer
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer ID or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        <div className="w-48">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rentals
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Loyalty Tier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Spent
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCustomers.map((customer: Customer) => (
              <tr key={customer['@id']} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FaUser className="text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-900">{customer.customerId}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">{customer.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    customer['@state'] === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {customer['@state']}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {customer.totalRentals}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-900">{getLoyaltyTier(customer.totalSpent)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FaDollarSign className="text-green-400 mr-1" />
                    <span className="text-sm text-gray-900">${customer.totalSpent.toFixed(2)}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleSuspendCustomer(customer.customerId)}
                      disabled={customer['@state'] === 'suspended'}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Suspend Customer"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Customer Modal */}
      {showCreateForm && (
        <CreateCustomerForm
          onSubmit={handleCreateCustomerSubmit}
          onCancel={handleCreateCustomerCancel}
          isLoading={createCustomerMutation.isPending}
          existingCustomers={customers}
        />
      )}
    </div>
  )
}

export default CustomersPage
