import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../contexts/AuthContext'
import { bikeApi } from '../services/api'
import { Bike } from '../generated-client'
import BikeDetails from '../components/BikeDetails'

const BikeDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { user } = useAuth()
  const queryClient = useQueryClient()

  // Fetch bike details from API
  const { data: bikeResponse, isLoading, error } = useQuery({
    queryKey: ['bike', id],
    queryFn: () => {
      if (!id) throw new Error('Bike ID is required')
      return bikeApi.getById(id, user?.accessToken)
    },
    enabled: !!id && !!user?.accessToken
  })

  // Extract bike from response
  const bike = bikeResponse?.data

  // Bike action mutations
  const markAsRentedMutation = useMutation({
    mutationFn: (bikeId: string) => bikeApi.markAsRented(bikeId, 'CONTRACT001', user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bike', id] })
      queryClient.invalidateQueries({ queryKey: ['bikes'] })
    }
  })

  const markAsReturnedMutation = useMutation({
    mutationFn: (bikeId: string) => bikeApi.markAsReturned(bikeId, user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bike', id] })
      queryClient.invalidateQueries({ queryKey: ['bikes'] })
    }
  })

  const putInMaintenanceMutation = useMutation({
    mutationFn: (bikeId: string) => bikeApi.putInMaintenance(bikeId, 'Maintenance required', user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bike', id] })
      queryClient.invalidateQueries({ queryKey: ['bikes'] })
    }
  })

  const completeMaintenanceMutation = useMutation({
    mutationFn: (bikeId: string) => bikeApi.completeMaintenance(bikeId, user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bike', id] })
      queryClient.invalidateQueries({ queryKey: ['bikes'] })
    }
  })

  const retireMutation = useMutation({
    mutationFn: (bikeId: string) => bikeApi.retire(bikeId, user?.accessToken),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bike', id] })
      queryClient.invalidateQueries({ queryKey: ['bikes'] })
    }
  })

  const handleBack = () => {
    navigate('/bikes')
  }

  const handleEdit = (bikeId: string) => {
    console.log('Edit bike:', bikeId)
    // TODO: Navigate to edit page or open edit modal
  }

  const handleDelete = (bikeId: string) => {
    console.log('Delete bike:', bikeId)
    // TODO: Show confirmation dialog and delete
  }

  const handleMarkAsRented = async (bikeId: string) => {
    try {
      await markAsRentedMutation.mutateAsync(bikeId)
    } catch (error) {
      console.error('Error marking bike as rented:', error)
    }
  }

  const handleMarkAsReturned = async (bikeId: string) => {
    try {
      await markAsReturnedMutation.mutateAsync(bikeId)
    } catch (error) {
      console.error('Error marking bike as returned:', error)
    }
  }

  const handlePutInMaintenance = async (bikeId: string) => {
    try {
      await putInMaintenanceMutation.mutateAsync(bikeId)
    } catch (error) {
      console.error('Error putting bike in maintenance:', error)
    }
  }

  const handleCompleteMaintenance = async (bikeId: string) => {
    try {
      await completeMaintenanceMutation.mutateAsync(bikeId)
    } catch (error) {
      console.error('Error completing maintenance:', error)
    }
  }

  const handleRetire = async (bikeId: string) => {
    try {
      await retireMutation.mutateAsync(bikeId)
    } catch (error) {
      console.error('Error retiring bike:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading bike details...</p>
        </div>
      </div>
    )
  }

  if (error || !bike) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-600">Bike not found or error loading bike details.</p>
          <button
            onClick={handleBack}
            className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
          >
            Back to Bikes
          </button>
        </div>
      </div>
    )
  }

  return (
    <BikeDetails
      bike={bike}
      onBack={handleBack}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onMarkAsRented={handleMarkAsRented}
      onMarkAsReturned={handleMarkAsReturned}
      onPutInMaintenance={handlePutInMaintenance}
      onCompleteMaintenance={handleCompleteMaintenance}
      onRetire={handleRetire}
    />
  )
}

export default BikeDetailsPage
