# BikeFleetList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prev** | **string** |  | [optional] [default to undefined]
**next** | **string** |  | [optional] [default to undefined]
**items** | [**Array&lt;BikeFleet&gt;**](BikeFleet.md) |  | [default to undefined]
**page** | **number** |  | [optional] [default to undefined]
**totalItems** | **number** | Total number of accessible protocol instances. Only included if the &#x60;includeCount&#x60; query parameter was set. | [optional] [default to undefined]
**totalPages** | **number** | Total number of accessible pages. Only included if the &#x60;includeCount&#x60; query parameter was set. | [optional] [default to undefined]

## Example

```typescript
import { BikeFleetList } from 'bike-rental-api';

const instance: BikeFleetList = {
    prev,
    next,
    items,
    page,
    totalItems,
    totalPages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
