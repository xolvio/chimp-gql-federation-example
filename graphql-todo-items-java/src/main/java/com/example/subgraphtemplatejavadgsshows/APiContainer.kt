package com.example.subgraphtemplatejavadgsshows

import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import org.openapitools.client.apis.TodoItemControllerApi
import org.springframework.stereotype.Service

@Service
class APiContainer {
    fun todoItem(): TodoItemControllerApi {
        return TodoItemControllerApi()
    }
}
