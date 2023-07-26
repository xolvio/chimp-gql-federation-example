# TodoItemControllerApi

All URIs are relative to *http://localhost:8091*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createItem**](TodoItemControllerApi.md#createItem) | **POST** /api/items | 
[**delete**](TodoItemControllerApi.md#delete) | **DELETE** /api/item | 
[**getItems**](TodoItemControllerApi.md#getItems) | **GET** /api/items | 
[**markChecked**](TodoItemControllerApi.md#markChecked) | **POST** /api/item/check | 
[**markUnchecked**](TodoItemControllerApi.md#markUnchecked) | **POST** /api/item/uncheck | 
[**rename**](TodoItemControllerApi.md#rename) | **POST** /api/item/rename | 


<a id="createItem"></a>
# **createItem**
> ToDoItem createItem(itemResource)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoItemControllerApi()
val itemResource : ItemResource =  // ItemResource | 
try {
    val result : ToDoItem = apiInstance.createItem(itemResource)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoItemControllerApi#createItem")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoItemControllerApi#createItem")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemResource** | [**ItemResource**](ItemResource.md)|  |

### Return type

[**ToDoItem**](ToDoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="delete"></a>
# **delete**
> delete(body)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoItemControllerApi()
val body : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.delete(body)
} catch (e: ClientException) {
    println("4xx response calling TodoItemControllerApi#delete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoItemControllerApi#delete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **java.util.UUID**|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a id="getItems"></a>
# **getItems**
> kotlin.collections.List&lt;ToDoItem&gt; getItems()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoItemControllerApi()
try {
    val result : kotlin.collections.List<ToDoItem> = apiInstance.getItems()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoItemControllerApi#getItems")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoItemControllerApi#getItems")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;ToDoItem&gt;**](ToDoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="markChecked"></a>
# **markChecked**
> ToDoItem markChecked(body)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoItemControllerApi()
val body : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : ToDoItem = apiInstance.markChecked(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoItemControllerApi#markChecked")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoItemControllerApi#markChecked")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **java.util.UUID**|  |

### Return type

[**ToDoItem**](ToDoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="markUnchecked"></a>
# **markUnchecked**
> ToDoItem markUnchecked(body)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoItemControllerApi()
val body : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    val result : ToDoItem = apiInstance.markUnchecked(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoItemControllerApi#markUnchecked")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoItemControllerApi#markUnchecked")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **java.util.UUID**|  |

### Return type

[**ToDoItem**](ToDoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="rename"></a>
# **rename**
> ToDoItem rename(renameResource)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoItemControllerApi()
val renameResource : RenameResource =  // RenameResource | 
try {
    val result : ToDoItem = apiInstance.rename(renameResource)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoItemControllerApi#rename")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoItemControllerApi#rename")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameResource** | [**RenameResource**](RenameResource.md)|  |

### Return type

[**ToDoItem**](ToDoItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

