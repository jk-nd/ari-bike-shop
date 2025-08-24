# ModelError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorType** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**idType** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**error** | **string** |  | [optional] [default to undefined]
**origin** | [**ErrorOrigin**](ErrorOrigin.md) |  | [optional] [default to undefined]
**stackTrace** | **string** |  | [optional] [default to undefined]
**clientStackTrace** | [**Array&lt;ErrorClientStackTraceInner&gt;**](ErrorClientStackTraceInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ModelError } from 'bike-rental-api';

const instance: ModelError = {
    errorType,
    id,
    idType,
    message,
    error,
    origin,
    stackTrace,
    clientStackTrace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
