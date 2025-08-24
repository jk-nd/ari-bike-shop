import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext'
import { bikeApi } from '../services/api'
import { Bike } from '../generated-client'
import BikeList from '../components/BikeList'
import CreateBikeForm from '../components/CreateBikeForm'

const BikesPage = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [showCreateForm, setShowCreateForm] = useState(false)

  // Fetch bikes from API
  const { data: bikesResponse, isLoading, error } = useQuery({
    queryKey: ['bikes'],
    queryFn: () => bikeApi.list(user?.accessToken),
    enabled: !!user?.accessToken
  })

  // Extract bikes from response
  const bikes = bikesResponse?.data?.items || []

  // Create bike mutation
  const createBikeMutation = useMutation({
    mutationFn: (data: { bikeId: string; location: string; pricePerHour: number }) =>
      bikeApi.create(data, user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bikes'] })
      setShowCreateForm(false)
    }
  })

  const handleViewDetails = (bikeId: string) => {
    const bikeIdNumber = bikeId.split('/').pop()
    navigate(`/bikes/${bikeIdNumber}`)
  }

  const handleCreateBike = () => {
    setShowCreateForm(true)
  }

  const handleCreateBikeSubmit = async (data: { bikeId: string; location: string; pricePerHour: number }) => {
    try {
      // Ensure pricePerHour is a number
      const bikeData = {
        ...data,
        pricePerHour: Number(data.pricePerHour)
      }
      await createBikeMutation.mutateAsync(bikeData)
    } catch (error) {
      console.error('Error creating bike:', error)
      // You could show a toast notification here
    }
  }

  const handleCreateBikeCancel = () => {
    setShowCreateForm(false)
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

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-600">Error loading bikes. Please try again.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <BikeList
        bikes={bikes}
        onViewDetails={handleViewDetails}
        onCreateBike={handleCreateBike}
      />

      {showCreateForm && (
        <CreateBikeForm
          onSubmit={handleCreateBikeSubmit}
          onCancel={handleCreateBikeCancel}
          isLoading={createBikeMutation.isPending}
        />
      )}
    </div>
  )
}

export default BikesPage
