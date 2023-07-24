package com.example.subgraphtemplatejavadgsshows.todoitems

import com.example.subgraphtemplatejavadgsshows.APiContainer
import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import org.openapitools.client.apis.TodoItemControllerApi
import org.openapitools.client.models.ToDoItem
import org.springframework.stereotype.Service


@Service
class TodoItemsService(val api: APiContainer) {
    fun fetchById(id: String): ToDoItem {
        return api.todoItem().getItems().first { it.id.toString() == id }
    }

    fun fetchByListId(listId: String): List<ToDoItem> {
        return api.todoItem().getItems().filter { it.listId.toString() == listId }
    }

    fun fetchIncompleteCount(listId: String): Int {
        return api.todoItem().getItems().count { it.listId.toString() == listId && it.checked != true}
    }
}
