import { DefaultApi, Configuration } from '../generated-client'
import { environment } from '../config/environment'

// API client configuration
const createApiClient = (accessToken?: string) => {
  const configuration = new Configuration({
    basePath: environment.apiBaseUrl, // Use environment-specific API URL
    accessToken: accessToken
  })
  
  return new DefaultApi(configuration)
}

// Bike API methods
export const bikeApi = {
  // List all bikes
  list: async (accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getBikeList(1, 100, true)
  },

  // Get bike by ID
  getById: async (bikeId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getBikeByID(bikeId)
  },

  // Create new bike
  create: async (bikeData: {
    bikeId: string
    location: string
    pricePerHour: number
  }, accessToken?: string) => {
    const client = createApiClient(accessToken)
           const requestData = {
         bikeId: bikeData.bikeId,
         location: bikeData.location,
         pricePerHour: Number(bikeData.pricePerHour), // Convert to number
         '@parties': {} as any // Let party automation handle this
       }
           console.log('Creating bike with data:', requestData)
       console.log('Access token:', accessToken ? 'Present' : 'Missing')

       return await client.createBike(requestData)
  },

  // Mark bike as rented
  markAsRented: async (bikeId: string, rentalContractId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikeMarkAsRented(bikeId, { rentalContractId })
  },

  // Mark bike as returned
  markAsReturned: async (bikeId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikeMarkAsReturned(bikeId)
  },

  // Put bike in maintenance
  putInMaintenance: async (bikeId: string, notes: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikePutInMaintenance(bikeId, { notes })
  },

  // Complete maintenance
  completeMaintenance: async (bikeId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikeCompleteMaintenance(bikeId)
  },

  // Retire bike
  retire: async (bikeId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikeRetireBike(bikeId)
  },

  // Get bike status
  getStatus: async (bikeId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikeGetBikeStatus(bikeId)
  },

  // Get current rental contract
  getCurrentRentalContract: async (bikeId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikeGetCurrentRentalContract(bikeId)
  }
}

// Fleet API methods
export const fleetApi = {
  // List all fleets
  list: async (accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getBikeFleetList(1, 100, true)
  },

  // Get fleet by ID
  getById: async (fleetId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getBikeFleetByID(fleetId)
  },

  // Create new fleet
  create: async (fleetData: {
    fleetId: string
    locationName: string
    maxCapacity: number
  }, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.createBikeFleet({
      fleetId: fleetData.fleetId,
      locationName: fleetData.locationName,
      maxCapacity: fleetData.maxCapacity,
      '@parties': {} as any // Let party automation handle this
    })
  },

  // Get fleet statistics
  getStatistics: async (fleetId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.bikeFleetGetFleetStatistics(fleetId)
  }
}

// Customer API methods
export const customerApi = {
  // List all customers
  list: async (accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getCustomerProfileList(1, 100, true)
  },

  // Get customer by ID
  getById: async (customerId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getCustomerProfileByID(customerId)
  },

  // Create new customer
  create: async (customerData: {
    customerId: string
    email: string
  }, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.createCustomerProfile({
      customerId: customerData.customerId,
      email: customerData.email,
      '@parties': {} as any // Let party automation handle this
    })
  },

  // Get customer profile
  getProfile: async (customerId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.customerProfileGetProfile(customerId)
  },

  // Suspend customer
  suspend: async (customerId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    // First get the customer by ID to get the @id
    const customers = await client.getCustomerProfileList(1, 100, true)
    const customer = customers.data.items.find((c: any) => c.customerId === customerId)
    
    if (!customer) {
      throw new Error(`Customer with ID ${customerId} not found`)
    }
    
    return await client.customerProfileSuspendCustomer(customer['@id'])
  },

  // Record rental for customer
  recordRental: async (customerId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.customerProfileRecordRental(customerId)
  },

  // Record rental with cost for customer
  recordRentalWithCost: async (customerId: string, cost: number, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.customerProfileRecordRentalWithCost(customerId, { cost })
  },

  // Get loyalty tier
  getLoyaltyTier: async (customerId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.customerProfileGetLoyaltyTier(customerId)
  }
}

// Rental Contract API methods
export const rentalApi = {
  // List all rental contracts
  list: async (accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getRentalContractList(1, 100, true)
  },

  // Get rental contract by ID
  getById: async (contractId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.getRentalContractByID(contractId)
  },

  // Create new rental contract
  create: async (contractData: {
    contractId: string
    bikeId: string
    customerId: string
    hourlyRate: number
  }, accessToken?: string) => {
    const client = createApiClient(accessToken)
    
    try {
      // First, check if the bike already has an active rental contract
      const existingRentals = await client.getRentalContractList(1, 100, true)
      const bikeAlreadyRented = existingRentals.data.items.some((rental: any) => 
        rental.bikeId === contractData.bikeId && rental['@state'] === 'active'
      )
      
      if (bikeAlreadyRented) {
        throw new Error(`Bike ${contractData.bikeId} is already rented and cannot be rented again`)
      }
      
      // Create the rental contract
      const rentalContract = await client.createRentalContract({
        contractId: contractData.contractId,
        bikeId: contractData.bikeId,
        customerId: contractData.customerId,
        hourlyRate: contractData.hourlyRate,
        '@parties': {} as any // Let party automation handle this
      })
      
      // After successfully creating the rental contract, mark the bike as rented
      const bikes = await client.getBikeList(1, 100, true)
      const selectedBike = bikes.data.items.find((bike: any) => bike.bikeId === contractData.bikeId)
      
      if (selectedBike) {
        await client.bikeMarkAsRented(selectedBike['@id'], {
          rentalContractId: contractData.contractId
        })
      }
      
      return rentalContract
    } catch (error) {
      console.error('Error creating rental contract:', error)
      throw error
    }
  },

  // Complete rental
  complete: async (contractId: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.rentalContractCompleteRental(contractId)
  },

  // Cancel rental
  cancel: async (contractId: string, reason: string, accessToken?: string) => {
    const client = createApiClient(accessToken)
    return await client.rentalContractCancelRental(contractId, { reason })
  }
}



// Authentication API
export const authApi = {
  // Get OIDC token
  getToken: async (username: string, password: string) => {
    // Try without client_id first for public clients
    const params = new URLSearchParams({
      grant_type: 'password',
      username: username,
      password: password
    })

    console.log('Attempting authentication with URL:', environment.authUrl)
    console.log('Request parameters:', Object.fromEntries(params))

    const response = await fetch(environment.authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params
    })

    console.log('Authentication response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Authentication error response:', errorText)
      
      // If it fails without client_id, try with client_id
      if (errorText.includes('invalid_client')) {
        console.log('Trying with client_id...')
        params.append('client_id', 'test3delete')
        
        const response2 = await fetch(environment.authUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params
        })
        
        console.log('Authentication response status (with client_id):', response2.status)
        
        if (!response2.ok) {
          const errorText2 = await response2.text()
          console.error('Authentication error response (with client_id):', errorText2)
          throw new Error(`Authentication failed: ${response2.status} ${response2.statusText}`)
        }
        
        const data2 = await response2.json()
        console.log('Authentication successful with client_id, token received')
        return data2.access_token
      }
      
      throw new Error(`Authentication failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Authentication successful without client_id, token received')
    return data.access_token
  }
}
