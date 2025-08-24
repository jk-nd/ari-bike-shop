# RentalContract


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**parties** | [**RentalContractParties**](RentalContractParties.md) |  | [default to undefined]
**actions** | [**RentalContractActions**](RentalContractActions.md) |  | [default to undefined]
**state** | [**RentalContractStates**](RentalContractStates.md) |  | [default to undefined]
**startTime** | **string** |  | [default to undefined]
**endTime** | **string** |  | [default to undefined]
**totalCost** | **number** |  | [default to undefined]
**paymentStatus** | **string** |  | [default to undefined]
**contractId** | **string** |  | [default to undefined]
**bikeId** | **string** |  | [default to undefined]
**customerId** | **string** |  | [default to undefined]
**hourlyRate** | **number** |  | [default to undefined]

## Example

```typescript
import { RentalContract } from 'bike-rental-api';

const instance: RentalContract = {
    id,
    parties,
    actions,
    state,
    startTime,
    endTime,
    totalCost,
    paymentStatus,
    contractId,
    bikeId,
    customerId,
    hourlyRate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
