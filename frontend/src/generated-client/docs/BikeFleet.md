# BikeFleet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**parties** | [**BikeFleetParties**](BikeFleetParties.md) |  | [default to undefined]
**actions** | [**BikeFleetActions**](BikeFleetActions.md) |  | [default to undefined]
**state** | [**BikeFleetStates**](BikeFleetStates.md) |  | [default to undefined]
**registeredBikes** | **Array&lt;string&gt;** |  | [default to undefined]
**totalRevenue** | **number** |  | [default to undefined]
**totalRentals** | **number** |  | [default to undefined]
**fleetId** | **string** |  | [default to undefined]
**locationName** | **string** |  | [default to undefined]
**maxCapacity** | **number** |  | [default to undefined]

## Example

```typescript
import { BikeFleet } from 'bike-rental-api';

const instance: BikeFleet = {
    id,
    parties,
    actions,
    state,
    registeredBikes,
    totalRevenue,
    totalRentals,
    fleetId,
    locationName,
    maxCapacity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
