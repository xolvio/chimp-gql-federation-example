package com.example.subgraphtemplatejavadgsshows.todoitems

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import org.openapitools.client.apis.TodoItemControllerApi
import org.openapitools.client.models.ItemResource
import org.openapitools.client.models.RenameResource
import org.openapitools.client.models.ToDoItem
import java.util.UUID

@DgsComponent
class TodoItemsMutations {
    private val api = TodoItemControllerApi()

    @DgsMutation
    fun RemoveItem(itemId: String): String {
        api.delete(UUID.fromString(itemId))
        return "Item removed successfully"
    }

    @DgsMutation
    fun AddTodo(listId: String, text: String): ToDoItem {
        val itemResource = ItemResource(text, UUID.fromString(listId))
        return api.createItem(itemResource)
    }

    @DgsMutation
    fun ToggleTodoCheck(itemId: String, checked: Boolean): ToDoItem {
        return if (checked) api.markChecked(UUID.fromString(itemId)) else api.markUnchecked(UUID.fromString(itemId))
    }

    @DgsMutation
    fun RenameTodo(todoId: String, newText: String): ToDoItem {
        val renameResource = RenameResource(newText, UUID.fromString(todoId))
        return api.rename(renameResource)
    }
}
