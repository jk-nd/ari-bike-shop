# DefaultApi

All URIs are relative to *http://localhost:12000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bikeAssignToFleet**](#bikeassigntofleet) | **POST** /npl/bikeRental/Bike/{id}/assignToFleet | |
|[**bikeCanBeRented**](#bikecanberented) | **POST** /npl/bikeRental/Bike/{id}/canBeRented | |
|[**bikeCompleteMaintenance**](#bikecompletemaintenance) | **POST** /npl/bikeRental/Bike/{id}/completeMaintenance | |
|[**bikeFleetDecommissionFleet**](#bikefleetdecommissionfleet) | **POST** /npl/bikeRental/BikeFleet/{id}/decommissionFleet | |
|[**bikeFleetGetBikeCount**](#bikefleetgetbikecount) | **POST** /npl/bikeRental/BikeFleet/{id}/getBikeCount | |
|[**bikeFleetGetFleetStatistics**](#bikefleetgetfleetstatistics) | **POST** /npl/bikeRental/BikeFleet/{id}/getFleetStatistics | |
|[**bikeFleetGetRegisteredBikes**](#bikefleetgetregisteredbikes) | **POST** /npl/bikeRental/BikeFleet/{id}/getRegisteredBikes | |
|[**bikeFleetIsBikeRegistered**](#bikefleetisbikeregistered) | **POST** /npl/bikeRental/BikeFleet/{id}/isBikeRegistered | |
|[**bikeFleetPutFleetInMaintenance**](#bikefleetputfleetinmaintenance) | **POST** /npl/bikeRental/BikeFleet/{id}/putFleetInMaintenance | |
|[**bikeFleetRecordRevenue**](#bikefleetrecordrevenue) | **POST** /npl/bikeRental/BikeFleet/{id}/recordRevenue | |
|[**bikeFleetRegisterBike**](#bikefleetregisterbike) | **POST** /npl/bikeRental/BikeFleet/{id}/registerBike | |
|[**bikeFleetRestoreFleetFromMaintenance**](#bikefleetrestorefleetfrommaintenance) | **POST** /npl/bikeRental/BikeFleet/{id}/restoreFleetFromMaintenance | |
|[**bikeFleetUnregisterBike**](#bikefleetunregisterbike) | **POST** /npl/bikeRental/BikeFleet/{id}/unregisterBike | |
|[**bikeGetBikeDetails**](#bikegetbikedetails) | **POST** /npl/bikeRental/Bike/{id}/getBikeDetails | |
|[**bikeGetBikeInfo**](#bikegetbikeinfo) | **POST** /npl/bikeRental/Bike/{id}/getBikeInfo | |
|[**bikeGetBikeStatus**](#bikegetbikestatus) | **POST** /npl/bikeRental/Bike/{id}/getBikeStatus | |
|[**bikeGetCurrentRentalContract**](#bikegetcurrentrentalcontract) | **POST** /npl/bikeRental/Bike/{id}/getCurrentRentalContract | |
|[**bikeGetFleetId**](#bikegetfleetid) | **POST** /npl/bikeRental/Bike/{id}/getFleetId | |
|[**bikeIsAvailableForRental**](#bikeisavailableforrental) | **POST** /npl/bikeRental/Bike/{id}/isAvailableForRental | |
|[**bikeMarkAsRented**](#bikemarkasrented) | **POST** /npl/bikeRental/Bike/{id}/markAsRented | |
|[**bikeMarkAsReturned**](#bikemarkasreturned) | **POST** /npl/bikeRental/Bike/{id}/markAsReturned | |
|[**bikePutInMaintenance**](#bikeputinmaintenance) | **POST** /npl/bikeRental/Bike/{id}/putInMaintenance | |
|[**bikeRemoveFromFleet**](#bikeremovefromfleet) | **POST** /npl/bikeRental/Bike/{id}/removeFromFleet | |
|[**bikeReserveForRental**](#bikereserveforrental) | **POST** /npl/bikeRental/Bike/{id}/reserveForRental | |
|[**bikeRetireBike**](#bikeretirebike) | **POST** /npl/bikeRental/Bike/{id}/retireBike | |
|[**createBike**](#createbike) | **POST** /npl/bikeRental/Bike/ | |
|[**createBikeFleet**](#createbikefleet) | **POST** /npl/bikeRental/BikeFleet/ | |
|[**createCustomerProfile**](#createcustomerprofile) | **POST** /npl/bikeRental/CustomerProfile/ | |
|[**createRentalContract**](#createrentalcontract) | **POST** /npl/bikeRental/RentalContract/ | |
|[**customerProfileGetLoyaltyTier**](#customerprofilegetloyaltytier) | **POST** /npl/bikeRental/CustomerProfile/{id}/getLoyaltyTier | |
|[**customerProfileGetProfile**](#customerprofilegetprofile) | **POST** /npl/bikeRental/CustomerProfile/{id}/getProfile | |
|[**customerProfileRecordRental**](#customerprofilerecordrental) | **POST** /npl/bikeRental/CustomerProfile/{id}/recordRental | |
|[**customerProfileRecordRentalWithCost**](#customerprofilerecordrentalwithcost) | **POST** /npl/bikeRental/CustomerProfile/{id}/recordRentalWithCost | |
|[**customerProfileSuspendCustomer**](#customerprofilesuspendcustomer) | **POST** /npl/bikeRental/CustomerProfile/{id}/suspendCustomer | |
|[**getBikeByID**](#getbikebyid) | **GET** /npl/bikeRental/Bike/{id}/ | |
|[**getBikeFleetByID**](#getbikefleetbyid) | **GET** /npl/bikeRental/BikeFleet/{id}/ | |
|[**getBikeFleetList**](#getbikefleetlist) | **GET** /npl/bikeRental/BikeFleet/ | |
|[**getBikeList**](#getbikelist) | **GET** /npl/bikeRental/Bike/ | |
|[**getCustomerProfileByID**](#getcustomerprofilebyid) | **GET** /npl/bikeRental/CustomerProfile/{id}/ | |
|[**getCustomerProfileList**](#getcustomerprofilelist) | **GET** /npl/bikeRental/CustomerProfile/ | |
|[**getOpenAPI**](#getopenapi) | **GET** /npl/bikeRental/-/openapi.json | |
|[**getRentalContractByID**](#getrentalcontractbyid) | **GET** /npl/bikeRental/RentalContract/{id}/ | |
|[**getRentalContractList**](#getrentalcontractlist) | **GET** /npl/bikeRental/RentalContract/ | |
|[**rentalContractCancelRental**](#rentalcontractcancelrental) | **POST** /npl/bikeRental/RentalContract/{id}/cancelRental | |
|[**rentalContractCompleteRental**](#rentalcontractcompleterental) | **POST** /npl/bikeRental/RentalContract/{id}/completeRental | |
|[**rentalContractGetContractDetails**](#rentalcontractgetcontractdetails) | **POST** /npl/bikeRental/RentalContract/{id}/getContractDetails | |
|[**rentalContractGetCurrentDuration**](#rentalcontractgetcurrentduration) | **POST** /npl/bikeRental/RentalContract/{id}/getCurrentDuration | |
|[**rentalContractGetEstimatedCost**](#rentalcontractgetestimatedcost) | **POST** /npl/bikeRental/RentalContract/{id}/getEstimatedCost | |
|[**rentalContractMarkBikeAsRented**](#rentalcontractmarkbikeasrented) | **POST** /npl/bikeRental/RentalContract/{id}/markBikeAsRented | |
|[**rentalContractValidateBikeAvailability**](#rentalcontractvalidatebikeavailability) | **POST** /npl/bikeRental/RentalContract/{id}/validateBikeAvailability | |

# **bikeAssignToFleet**
> string bikeAssignToFleet(bikeAssignToFleetCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeAssignToFleetCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikeAssignToFleetCommand: BikeAssignToFleetCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeAssignToFleet(
    id,
    bikeAssignToFleetCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeAssignToFleetCommand** | **BikeAssignToFleetCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeCanBeRented**
> boolean bikeCanBeRented()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeCanBeRented(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**boolean**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeCompleteMaintenance**
> string bikeCompleteMaintenance()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeCompleteMaintenance(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetDecommissionFleet**
> string bikeFleetDecommissionFleet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetDecommissionFleet(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetGetBikeCount**
> number bikeFleetGetBikeCount()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetGetBikeCount(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**number**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetGetFleetStatistics**
> string bikeFleetGetFleetStatistics()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetGetFleetStatistics(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetGetRegisteredBikes**
> Array<string> bikeFleetGetRegisteredBikes()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetGetRegisteredBikes(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**Array<string>**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetIsBikeRegistered**
> boolean bikeFleetIsBikeRegistered(bikeFleetIsBikeRegisteredCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeFleetIsBikeRegisteredCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikeFleetIsBikeRegisteredCommand: BikeFleetIsBikeRegisteredCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetIsBikeRegistered(
    id,
    bikeFleetIsBikeRegisteredCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeFleetIsBikeRegisteredCommand** | **BikeFleetIsBikeRegisteredCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**boolean**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetPutFleetInMaintenance**
> string bikeFleetPutFleetInMaintenance()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetPutFleetInMaintenance(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetRecordRevenue**
> string bikeFleetRecordRevenue(bikeFleetRecordRevenueCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeFleetRecordRevenueCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikeFleetRecordRevenueCommand: BikeFleetRecordRevenueCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetRecordRevenue(
    id,
    bikeFleetRecordRevenueCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeFleetRecordRevenueCommand** | **BikeFleetRecordRevenueCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetRegisterBike**
> string bikeFleetRegisterBike(bikeFleetRegisterBikeCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeFleetRegisterBikeCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikeFleetRegisterBikeCommand: BikeFleetRegisterBikeCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetRegisterBike(
    id,
    bikeFleetRegisterBikeCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeFleetRegisterBikeCommand** | **BikeFleetRegisterBikeCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetRestoreFleetFromMaintenance**
> string bikeFleetRestoreFleetFromMaintenance()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetRestoreFleetFromMaintenance(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeFleetUnregisterBike**
> string bikeFleetUnregisterBike(bikeFleetUnregisterBikeCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeFleetUnregisterBikeCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikeFleetUnregisterBikeCommand: BikeFleetUnregisterBikeCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeFleetUnregisterBike(
    id,
    bikeFleetUnregisterBikeCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeFleetUnregisterBikeCommand** | **BikeFleetUnregisterBikeCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeGetBikeDetails**
> string bikeGetBikeDetails()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeGetBikeDetails(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeGetBikeInfo**
> string bikeGetBikeInfo()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeGetBikeInfo(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeGetBikeStatus**
> string bikeGetBikeStatus()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeGetBikeStatus(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeGetCurrentRentalContract**
> string bikeGetCurrentRentalContract()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeGetCurrentRentalContract(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeGetFleetId**
> string bikeGetFleetId()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeGetFleetId(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeIsAvailableForRental**
> boolean bikeIsAvailableForRental()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeIsAvailableForRental(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**boolean**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeMarkAsRented**
> string bikeMarkAsRented(bikeMarkAsRentedCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeMarkAsRentedCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikeMarkAsRentedCommand: BikeMarkAsRentedCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeMarkAsRented(
    id,
    bikeMarkAsRentedCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeMarkAsRentedCommand** | **BikeMarkAsRentedCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeMarkAsReturned**
> string bikeMarkAsReturned()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeMarkAsReturned(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikePutInMaintenance**
> string bikePutInMaintenance(bikePutInMaintenanceCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikePutInMaintenanceCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikePutInMaintenanceCommand: BikePutInMaintenanceCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikePutInMaintenance(
    id,
    bikePutInMaintenanceCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikePutInMaintenanceCommand** | **BikePutInMaintenanceCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeRemoveFromFleet**
> string bikeRemoveFromFleet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeRemoveFromFleet(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeReserveForRental**
> boolean bikeReserveForRental(bikeReserveForRentalCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeReserveForRentalCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let bikeReserveForRentalCommand: BikeReserveForRentalCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeReserveForRental(
    id,
    bikeReserveForRentalCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeReserveForRentalCommand** | **BikeReserveForRentalCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**boolean**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bikeRetireBike**
> string bikeRetireBike()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.bikeRetireBike(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBike**
> Bike createBike(bikeCreate)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeCreate
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let bikeCreate: BikeCreate; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.createBike(
    bikeCreate,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeCreate** | **BikeCreate**|  | |
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**Bike**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The new protocol instance |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBikeFleet**
> BikeFleet createBikeFleet(bikeFleetCreate)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BikeFleetCreate
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let bikeFleetCreate: BikeFleetCreate; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.createBikeFleet(
    bikeFleetCreate,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bikeFleetCreate** | **BikeFleetCreate**|  | |
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**BikeFleet**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The new protocol instance |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCustomerProfile**
> CustomerProfile createCustomerProfile(customerProfileCreate)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomerProfileCreate
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let customerProfileCreate: CustomerProfileCreate; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.createCustomerProfile(
    customerProfileCreate,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerProfileCreate** | **CustomerProfileCreate**|  | |
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**CustomerProfile**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The new protocol instance |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRentalContract**
> RentalContract createRentalContract(rentalContractCreate)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RentalContractCreate
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let rentalContractCreate: RentalContractCreate; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.createRentalContract(
    rentalContractCreate,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rentalContractCreate** | **RentalContractCreate**|  | |
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**RentalContract**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The new protocol instance |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customerProfileGetLoyaltyTier**
> string customerProfileGetLoyaltyTier()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.customerProfileGetLoyaltyTier(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customerProfileGetProfile**
> string customerProfileGetProfile()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.customerProfileGetProfile(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customerProfileRecordRental**
> string customerProfileRecordRental()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.customerProfileRecordRental(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customerProfileRecordRentalWithCost**
> string customerProfileRecordRentalWithCost(customerProfileRecordRentalWithCostCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CustomerProfileRecordRentalWithCostCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let customerProfileRecordRentalWithCostCommand: CustomerProfileRecordRentalWithCostCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.customerProfileRecordRentalWithCost(
    id,
    customerProfileRecordRentalWithCostCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerProfileRecordRentalWithCostCommand** | **CustomerProfileRecordRentalWithCostCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customerProfileSuspendCustomer**
> string customerProfileSuspendCustomer()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.customerProfileSuspendCustomer(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBikeByID**
> Bike getBikeByID()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getBikeByID(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**Bike**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The protocol instance with this ID |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBikeFleetByID**
> BikeFleet getBikeFleetByID()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getBikeFleetByID(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**BikeFleet**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The protocol instance with this ID |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBikeFleetList**
> BikeFleetList getBikeFleetList()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to 25)
let includeCount: boolean; //Include `totalItems` and `totalPages` in the response if set. This option is very expensive, so should be avoided when possible. (optional) (default to false)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getBikeFleetList(
    page,
    pageSize,
    includeCount,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 25|
| **includeCount** | [**boolean**] | Include &#x60;totalItems&#x60; and &#x60;totalPages&#x60; in the response if set. This option is very expensive, so should be avoided when possible. | (optional) defaults to false|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**BikeFleetList**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All accessible protocol instances of this type |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBikeList**
> BikeList getBikeList()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to 25)
let includeCount: boolean; //Include `totalItems` and `totalPages` in the response if set. This option is very expensive, so should be avoided when possible. (optional) (default to false)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getBikeList(
    page,
    pageSize,
    includeCount,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 25|
| **includeCount** | [**boolean**] | Include &#x60;totalItems&#x60; and &#x60;totalPages&#x60; in the response if set. This option is very expensive, so should be avoided when possible. | (optional) defaults to false|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**BikeList**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All accessible protocol instances of this type |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerProfileByID**
> CustomerProfile getCustomerProfileByID()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomerProfileByID(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**CustomerProfile**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The protocol instance with this ID |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerProfileList**
> CustomerProfileList getCustomerProfileList()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to 25)
let includeCount: boolean; //Include `totalItems` and `totalPages` in the response if set. This option is very expensive, so should be avoided when possible. (optional) (default to false)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomerProfileList(
    page,
    pageSize,
    includeCount,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 25|
| **includeCount** | [**boolean**] | Include &#x60;totalItems&#x60; and &#x60;totalPages&#x60; in the response if set. This option is very expensive, so should be avoided when possible. | (optional) defaults to false|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**CustomerProfileList**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All accessible protocol instances of this type |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOpenAPI**
> object getOpenAPI()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getOpenAPI();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The OpenAPI spec |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRentalContractByID**
> RentalContract getRentalContractByID()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getRentalContractByID(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**RentalContract**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The protocol instance with this ID |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRentalContractList**
> RentalContractList getRentalContractList()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to 25)
let includeCount: boolean; //Include `totalItems` and `totalPages` in the response if set. This option is very expensive, so should be avoided when possible. (optional) (default to false)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.getRentalContractList(
    page,
    pageSize,
    includeCount,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to 25|
| **includeCount** | [**boolean**] | Include &#x60;totalItems&#x60; and &#x60;totalPages&#x60; in the response if set. This option is very expensive, so should be avoided when possible. | (optional) defaults to false|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**RentalContractList**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All accessible protocol instances of this type |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentalContractCancelRental**
> string rentalContractCancelRental(rentalContractCancelRentalCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RentalContractCancelRentalCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let rentalContractCancelRentalCommand: RentalContractCancelRentalCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.rentalContractCancelRental(
    id,
    rentalContractCancelRentalCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rentalContractCancelRentalCommand** | **RentalContractCancelRentalCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentalContractCompleteRental**
> string rentalContractCompleteRental()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.rentalContractCompleteRental(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentalContractGetContractDetails**
> string rentalContractGetContractDetails()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.rentalContractGetContractDetails(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentalContractGetCurrentDuration**
> number rentalContractGetCurrentDuration()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.rentalContractGetCurrentDuration(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**number**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentalContractGetEstimatedCost**
> number rentalContractGetEstimatedCost()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.rentalContractGetEstimatedCost(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**number**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentalContractMarkBikeAsRented**
> string rentalContractMarkBikeAsRented()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.rentalContractMarkBikeAsRented(
    id,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rentalContractValidateBikeAvailability**
> boolean rentalContractValidateBikeAvailability(rentalContractValidateBikeAvailabilityCommand)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RentalContractValidateBikeAvailabilityCommand
} from 'bike-rental-api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; // (default to undefined)
let rentalContractValidateBikeAvailabilityCommand: RentalContractValidateBikeAvailabilityCommand; //
let xNPLAPI: string; //Optional parameter to require a specific API version (optional) (default to undefined)
let xNPLTAG: string; //Optional parameter to require a specific NPL Tag (optional) (default to undefined)

const { status, data } = await apiInstance.rentalContractValidateBikeAvailability(
    id,
    rentalContractValidateBikeAvailabilityCommand,
    xNPLAPI,
    xNPLTAG
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rentalContractValidateBikeAvailabilityCommand** | **RentalContractValidateBikeAvailabilityCommand**|  | |
| **id** | [**string**] |  | defaults to undefined|
| **xNPLAPI** | [**string**] | Optional parameter to require a specific API version | (optional) defaults to undefined|
| **xNPLTAG** | [**string**] | Optional parameter to require a specific NPL Tag | (optional) defaults to undefined|


### Return type

**boolean**

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

