package com.example.subgraphtemplatejavadgsshows

import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import org.openapitools.client.apis.TodoItemControllerApi
import org.springframework.stereotype.Service

@Service
class APiContainer {
    fun todoItem(): TodoItemControllerApi {
        return TodoItemControllerApi()
    }
    fun fetchTodoItems(): List<TodoItem> {
        val items = TodoItemControllerApi().getItems().map {
            TodoItem(it.id.toString(), it.text, it.checked ?: false, it.listId.toString(), null)
        }
        println("todoItems container: $items")
        return items
    }
}
