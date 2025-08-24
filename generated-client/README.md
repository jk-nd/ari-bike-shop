## bike-rental-api@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install bike-rental-api@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost:12000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**bikeAssignToFleet**](docs/DefaultApi.md#bikeassigntofleet) | **POST** /npl/bikeRental/Bike/{id}/assignToFleet | 
*DefaultApi* | [**bikeCanBeRented**](docs/DefaultApi.md#bikecanberented) | **POST** /npl/bikeRental/Bike/{id}/canBeRented | 
*DefaultApi* | [**bikeCompleteMaintenance**](docs/DefaultApi.md#bikecompletemaintenance) | **POST** /npl/bikeRental/Bike/{id}/completeMaintenance | 
*DefaultApi* | [**bikeFleetDecommissionFleet**](docs/DefaultApi.md#bikefleetdecommissionfleet) | **POST** /npl/bikeRental/BikeFleet/{id}/decommissionFleet | 
*DefaultApi* | [**bikeFleetGetBikeCount**](docs/DefaultApi.md#bikefleetgetbikecount) | **POST** /npl/bikeRental/BikeFleet/{id}/getBikeCount | 
*DefaultApi* | [**bikeFleetGetFleetStatistics**](docs/DefaultApi.md#bikefleetgetfleetstatistics) | **POST** /npl/bikeRental/BikeFleet/{id}/getFleetStatistics | 
*DefaultApi* | [**bikeFleetGetRegisteredBikes**](docs/DefaultApi.md#bikefleetgetregisteredbikes) | **POST** /npl/bikeRental/BikeFleet/{id}/getRegisteredBikes | 
*DefaultApi* | [**bikeFleetIsBikeRegistered**](docs/DefaultApi.md#bikefleetisbikeregistered) | **POST** /npl/bikeRental/BikeFleet/{id}/isBikeRegistered | 
*DefaultApi* | [**bikeFleetPutFleetInMaintenance**](docs/DefaultApi.md#bikefleetputfleetinmaintenance) | **POST** /npl/bikeRental/BikeFleet/{id}/putFleetInMaintenance | 
*DefaultApi* | [**bikeFleetRecordRevenue**](docs/DefaultApi.md#bikefleetrecordrevenue) | **POST** /npl/bikeRental/BikeFleet/{id}/recordRevenue | 
*DefaultApi* | [**bikeFleetRegisterBike**](docs/DefaultApi.md#bikefleetregisterbike) | **POST** /npl/bikeRental/BikeFleet/{id}/registerBike | 
*DefaultApi* | [**bikeFleetRestoreFleetFromMaintenance**](docs/DefaultApi.md#bikefleetrestorefleetfrommaintenance) | **POST** /npl/bikeRental/BikeFleet/{id}/restoreFleetFromMaintenance | 
*DefaultApi* | [**bikeFleetUnregisterBike**](docs/DefaultApi.md#bikefleetunregisterbike) | **POST** /npl/bikeRental/BikeFleet/{id}/unregisterBike | 
*DefaultApi* | [**bikeGetBikeDetails**](docs/DefaultApi.md#bikegetbikedetails) | **POST** /npl/bikeRental/Bike/{id}/getBikeDetails | 
*DefaultApi* | [**bikeGetBikeInfo**](docs/DefaultApi.md#bikegetbikeinfo) | **POST** /npl/bikeRental/Bike/{id}/getBikeInfo | 
*DefaultApi* | [**bikeGetBikeStatus**](docs/DefaultApi.md#bikegetbikestatus) | **POST** /npl/bikeRental/Bike/{id}/getBikeStatus | 
*DefaultApi* | [**bikeGetCurrentRentalContract**](docs/DefaultApi.md#bikegetcurrentrentalcontract) | **POST** /npl/bikeRental/Bike/{id}/getCurrentRentalContract | 
*DefaultApi* | [**bikeGetFleetId**](docs/DefaultApi.md#bikegetfleetid) | **POST** /npl/bikeRental/Bike/{id}/getFleetId | 
*DefaultApi* | [**bikeIsAvailableForRental**](docs/DefaultApi.md#bikeisavailableforrental) | **POST** /npl/bikeRental/Bike/{id}/isAvailableForRental | 
*DefaultApi* | [**bikeMarkAsRented**](docs/DefaultApi.md#bikemarkasrented) | **POST** /npl/bikeRental/Bike/{id}/markAsRented | 
*DefaultApi* | [**bikeMarkAsReturned**](docs/DefaultApi.md#bikemarkasreturned) | **POST** /npl/bikeRental/Bike/{id}/markAsReturned | 
*DefaultApi* | [**bikePutInMaintenance**](docs/DefaultApi.md#bikeputinmaintenance) | **POST** /npl/bikeRental/Bike/{id}/putInMaintenance | 
*DefaultApi* | [**bikeRemoveFromFleet**](docs/DefaultApi.md#bikeremovefromfleet) | **POST** /npl/bikeRental/Bike/{id}/removeFromFleet | 
*DefaultApi* | [**bikeReserveForRental**](docs/DefaultApi.md#bikereserveforrental) | **POST** /npl/bikeRental/Bike/{id}/reserveForRental | 
*DefaultApi* | [**bikeRetireBike**](docs/DefaultApi.md#bikeretirebike) | **POST** /npl/bikeRental/Bike/{id}/retireBike | 
*DefaultApi* | [**createBike**](docs/DefaultApi.md#createbike) | **POST** /npl/bikeRental/Bike/ | 
*DefaultApi* | [**createBikeFleet**](docs/DefaultApi.md#createbikefleet) | **POST** /npl/bikeRental/BikeFleet/ | 
*DefaultApi* | [**createCustomerProfile**](docs/DefaultApi.md#createcustomerprofile) | **POST** /npl/bikeRental/CustomerProfile/ | 
*DefaultApi* | [**createRentalContract**](docs/DefaultApi.md#createrentalcontract) | **POST** /npl/bikeRental/RentalContract/ | 
*DefaultApi* | [**customerProfileGetLoyaltyTier**](docs/DefaultApi.md#customerprofilegetloyaltytier) | **POST** /npl/bikeRental/CustomerProfile/{id}/getLoyaltyTier | 
*DefaultApi* | [**customerProfileGetProfile**](docs/DefaultApi.md#customerprofilegetprofile) | **POST** /npl/bikeRental/CustomerProfile/{id}/getProfile | 
*DefaultApi* | [**customerProfileRecordRental**](docs/DefaultApi.md#customerprofilerecordrental) | **POST** /npl/bikeRental/CustomerProfile/{id}/recordRental | 
*DefaultApi* | [**customerProfileRecordRentalWithCost**](docs/DefaultApi.md#customerprofilerecordrentalwithcost) | **POST** /npl/bikeRental/CustomerProfile/{id}/recordRentalWithCost | 
*DefaultApi* | [**customerProfileSuspendCustomer**](docs/DefaultApi.md#customerprofilesuspendcustomer) | **POST** /npl/bikeRental/CustomerProfile/{id}/suspendCustomer | 
*DefaultApi* | [**getBikeByID**](docs/DefaultApi.md#getbikebyid) | **GET** /npl/bikeRental/Bike/{id}/ | 
*DefaultApi* | [**getBikeFleetByID**](docs/DefaultApi.md#getbikefleetbyid) | **GET** /npl/bikeRental/BikeFleet/{id}/ | 
*DefaultApi* | [**getBikeFleetList**](docs/DefaultApi.md#getbikefleetlist) | **GET** /npl/bikeRental/BikeFleet/ | 
*DefaultApi* | [**getBikeList**](docs/DefaultApi.md#getbikelist) | **GET** /npl/bikeRental/Bike/ | 
*DefaultApi* | [**getCustomerProfileByID**](docs/DefaultApi.md#getcustomerprofilebyid) | **GET** /npl/bikeRental/CustomerProfile/{id}/ | 
*DefaultApi* | [**getCustomerProfileList**](docs/DefaultApi.md#getcustomerprofilelist) | **GET** /npl/bikeRental/CustomerProfile/ | 
*DefaultApi* | [**getOpenAPI**](docs/DefaultApi.md#getopenapi) | **GET** /npl/bikeRental/-/openapi.json | 
*DefaultApi* | [**getRentalContractByID**](docs/DefaultApi.md#getrentalcontractbyid) | **GET** /npl/bikeRental/RentalContract/{id}/ | 
*DefaultApi* | [**getRentalContractList**](docs/DefaultApi.md#getrentalcontractlist) | **GET** /npl/bikeRental/RentalContract/ | 
*DefaultApi* | [**rentalContractCancelRental**](docs/DefaultApi.md#rentalcontractcancelrental) | **POST** /npl/bikeRental/RentalContract/{id}/cancelRental | 
*DefaultApi* | [**rentalContractCompleteRental**](docs/DefaultApi.md#rentalcontractcompleterental) | **POST** /npl/bikeRental/RentalContract/{id}/completeRental | 
*DefaultApi* | [**rentalContractGetContractDetails**](docs/DefaultApi.md#rentalcontractgetcontractdetails) | **POST** /npl/bikeRental/RentalContract/{id}/getContractDetails | 
*DefaultApi* | [**rentalContractGetCurrentDuration**](docs/DefaultApi.md#rentalcontractgetcurrentduration) | **POST** /npl/bikeRental/RentalContract/{id}/getCurrentDuration | 
*DefaultApi* | [**rentalContractGetEstimatedCost**](docs/DefaultApi.md#rentalcontractgetestimatedcost) | **POST** /npl/bikeRental/RentalContract/{id}/getEstimatedCost | 
*DefaultApi* | [**rentalContractMarkBikeAsRented**](docs/DefaultApi.md#rentalcontractmarkbikeasrented) | **POST** /npl/bikeRental/RentalContract/{id}/markBikeAsRented | 
*DefaultApi* | [**rentalContractValidateBikeAvailability**](docs/DefaultApi.md#rentalcontractvalidatebikeavailability) | **POST** /npl/bikeRental/RentalContract/{id}/validateBikeAvailability | 


### Documentation For Models

 - [Bike](docs/Bike.md)
 - [BikeActions](docs/BikeActions.md)
 - [BikeAssignToFleetCommand](docs/BikeAssignToFleetCommand.md)
 - [BikeCreate](docs/BikeCreate.md)
 - [BikeFleet](docs/BikeFleet.md)
 - [BikeFleetActions](docs/BikeFleetActions.md)
 - [BikeFleetCreate](docs/BikeFleetCreate.md)
 - [BikeFleetIsBikeRegisteredCommand](docs/BikeFleetIsBikeRegisteredCommand.md)
 - [BikeFleetList](docs/BikeFleetList.md)
 - [BikeFleetParties](docs/BikeFleetParties.md)
 - [BikeFleetRecordRevenueCommand](docs/BikeFleetRecordRevenueCommand.md)
 - [BikeFleetRegisterBikeCommand](docs/BikeFleetRegisterBikeCommand.md)
 - [BikeFleetStates](docs/BikeFleetStates.md)
 - [BikeFleetUnregisterBikeCommand](docs/BikeFleetUnregisterBikeCommand.md)
 - [BikeList](docs/BikeList.md)
 - [BikeMarkAsRentedCommand](docs/BikeMarkAsRentedCommand.md)
 - [BikeParties](docs/BikeParties.md)
 - [BikePutInMaintenanceCommand](docs/BikePutInMaintenanceCommand.md)
 - [BikeReserveForRentalCommand](docs/BikeReserveForRentalCommand.md)
 - [BikeStates](docs/BikeStates.md)
 - [CustomerProfile](docs/CustomerProfile.md)
 - [CustomerProfileActions](docs/CustomerProfileActions.md)
 - [CustomerProfileCreate](docs/CustomerProfileCreate.md)
 - [CustomerProfileList](docs/CustomerProfileList.md)
 - [CustomerProfileParties](docs/CustomerProfileParties.md)
 - [CustomerProfileRecordRentalWithCostCommand](docs/CustomerProfileRecordRentalWithCostCommand.md)
 - [CustomerProfileStates](docs/CustomerProfileStates.md)
 - [ErrorClientStackTraceInner](docs/ErrorClientStackTraceInner.md)
 - [ErrorClientStackTraceInnerLocation](docs/ErrorClientStackTraceInnerLocation.md)
 - [ErrorClientStackTraceInnerLocationSourceRef](docs/ErrorClientStackTraceInnerLocationSourceRef.md)
 - [ErrorOrigin](docs/ErrorOrigin.md)
 - [ModelError](docs/ModelError.md)
 - [Party](docs/Party.md)
 - [Period](docs/Period.md)
 - [RentalContract](docs/RentalContract.md)
 - [RentalContractActions](docs/RentalContractActions.md)
 - [RentalContractCancelRentalCommand](docs/RentalContractCancelRentalCommand.md)
 - [RentalContractCreate](docs/RentalContractCreate.md)
 - [RentalContractList](docs/RentalContractList.md)
 - [RentalContractParties](docs/RentalContractParties.md)
 - [RentalContractStates](docs/RentalContractStates.md)
 - [RentalContractValidateBikeAvailabilityCommand](docs/RentalContractValidateBikeAvailabilityCommand.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="jwt"></a>
### jwt

- **Type**: Bearer authentication (JWT)

