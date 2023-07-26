package com.example.template

import org.openapitools.client.models.ToDoItem
import org.springframework.stereotype.Service
import kotlin.collections.List as KList


@Service
class TodoItemsService(val api: APiContainer) {
    fun fetchById(id: String): ToDoItem {
        return api.todoItem().getItems().first { it.id.toString() == id }
    }

    fun fetchByListId(listId: String): KList<ToDoItem> {
        return api.todoItem().getItems().filter { it.listId.toString() == listId }
    }

    fun fetchIncompleteCount(listId: String): Int {
        return api.todoItem().getItems().count { it.listId.toString() == listId && it.checked != true}
    }
}
