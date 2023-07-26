# TodoListControllerApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createList**](TodoListControllerApi.md#createList) | **POST** /api/lists | 
[**delete**](TodoListControllerApi.md#delete) | **DELETE** /api/list | 
[**getLists**](TodoListControllerApi.md#getLists) | **GET** /api/lists | 
[**rename**](TodoListControllerApi.md#rename) | **POST** /api/list/rename | 


<a id="createList"></a>
# **createList**
> ToDoList createList(listResource)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoListControllerApi()
val listResource : ListResource =  // ListResource | 
try {
    val result : ToDoList = apiInstance.createList(listResource)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoListControllerApi#createList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoListControllerApi#createList")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listResource** | [**ListResource**](ListResource.md)|  |

### Return type

[**ToDoList**](ToDoList.md)

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

val apiInstance = TodoListControllerApi()
val body : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
    apiInstance.delete(body)
} catch (e: ClientException) {
    println("4xx response calling TodoListControllerApi#delete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoListControllerApi#delete")
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

<a id="getLists"></a>
# **getLists**
> kotlin.collections.List&lt;ToDoList&gt; getLists()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoListControllerApi()
try {
    val result : kotlin.collections.List<ToDoList> = apiInstance.getLists()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoListControllerApi#getLists")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoListControllerApi#getLists")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;ToDoList&gt;**](ToDoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="rename"></a>
# **rename**
> ToDoList rename(renameResource)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TodoListControllerApi()
val renameResource : RenameResource =  // RenameResource | 
try {
    val result : ToDoList = apiInstance.rename(renameResource)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodoListControllerApi#rename")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodoListControllerApi#rename")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameResource** | [**RenameResource**](RenameResource.md)|  |

### Return type

[**ToDoList**](ToDoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

