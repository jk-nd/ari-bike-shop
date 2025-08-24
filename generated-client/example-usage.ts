import { DefaultApi, Configuration } from './index';

// Configure the API client
const configuration = new Configuration({
    basePath: 'http://localhost:8080', // NPL Runtime engine URL
    // For authentication, you can set accessToken if using OIDC
    // accessToken: 'your-jwt-token-here'
});

// Create API client instance
const apiClient = new DefaultApi(configuration);

// Example: Create a bike
async function createBikeExample() {
    try {
        const bikeData = {
            bikeId: "BIKE001",
            location: "Downtown Station",
            pricePerHour: 5.0,
            "@parties": {} // Party automation will handle this
        };
        
        const bike = await apiClient.createBike(bikeData);
        console.log('Bike created:', bike);
        return bike;
    } catch (error) {
        console.error('Error creating bike:', error);
    }
}

// Example: Create a bike fleet
async function createBikeFleetExample() {
    try {
        const fleetData = {
            fleetId: "FLEET001",
            locationName: "Downtown Station",
            maxCapacity: 50,
            "@parties": {} // Party automation will handle this
        };
        
        const fleet = await apiClient.createBikeFleet(fleetData);
        console.log('Fleet created:', fleet);
        return fleet;
    } catch (error) {
        console.error('Error creating fleet:', error);
    }
}

// Example: Create a customer profile
async function createCustomerProfileExample() {
    try {
        const customerData = {
            customerId: "CUSTOMER001",
            name: "John Doe",
            email: "john.doe@example.com",
            phoneNumber: "+1234567890",
            "@parties": {} // Party automation will handle this
        };
        
        const customer = await apiClient.createCustomerProfile(customerData);
        console.log('Customer profile created:', customer);
        return customer;
    } catch (error) {
        console.error('Error creating customer profile:', error);
    }
}

// Example: Create a rental contract
async function createRentalContractExample() {
    try {
        const contractData = {
            contractId: "CONTRACT001",
            bikeId: "BIKE001",
            customerId: "CUSTOMER001",
            hourlyRate: 5.0,
            "@parties": {} // Party automation will handle this
        };
        
        const contract = await apiClient.createRentalContract(contractData);
        console.log('Rental contract created:', contract);
        return contract;
    } catch (error) {
        console.error('Error creating rental contract:', error);
    }
}

// Example: Get bike status
async function getBikeStatusExample(bikeId: string) {
    try {
        const status = await apiClient.bikeGetBikeStatus(bikeId);
        console.log('Bike status:', status);
        return status;
    } catch (error) {
        console.error('Error getting bike status:', error);
    }
}

// Example: Complete a rental
async function completeRentalExample(contractId: string) {
    try {
        const result = await apiClient.rentalContractCompleteRental(contractId);
        console.log('Rental completed:', result);
        return result;
    } catch (error) {
        console.error('Error completing rental:', error);
    }
}

// Example: Get fleet statistics
async function getFleetStatisticsExample(fleetId: string) {
    try {
        const stats = await apiClient.bikeFleetGetFleetStatistics(fleetId);
        console.log('Fleet statistics:', stats);
        return stats;
    } catch (error) {
        console.error('Error getting fleet statistics:', error);
    }
}

// Example: List all bikes
async function listBikesExample() {
    try {
        const bikes = await apiClient.getBikeList(1, 10, true);
        console.log('Bikes:', bikes);
        return bikes;
    } catch (error) {
        console.error('Error listing bikes:', error);
    }
}

// Example: List all fleets
async function listFleetsExample() {
    try {
        const fleets = await apiClient.getBikeFleetList(1, 10, true);
        console.log('Fleets:', fleets);
        return fleets;
    } catch (error) {
        console.error('Error listing fleets:', error);
    }
}

// Example: List all customers
async function listCustomersExample() {
    try {
        const customers = await apiClient.getCustomerProfileList(1, 10, true);
        console.log('Customers:', customers);
        return customers;
    } catch (error) {
        console.error('Error listing customers:', error);
    }
}

// Example: List all rental contracts
async function listRentalContractsExample() {
    try {
        const contracts = await apiClient.getRentalContractList(1, 10, true);
        console.log('Rental contracts:', contracts);
        return contracts;
    } catch (error) {
        console.error('Error listing rental contracts:', error);
    }
}

// Export all example functions
export {
    createBikeExample,
    createBikeFleetExample,
    createCustomerProfileExample,
    createRentalContractExample,
    getBikeStatusExample,
    completeRentalExample,
    getFleetStatisticsExample,
    listBikesExample,
    listFleetsExample,
    listCustomersExample,
    listRentalContractsExample
};
