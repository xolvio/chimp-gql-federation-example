package com.example.subgraphtodolists.lists

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import org.openapitools.client.apis.TodoListControllerApi
import org.openapitools.client.models.ListResource
import org.openapitools.client.models.RenameResource
import org.openapitools.client.models.ToDoList
import java.util.UUID

@DgsComponent
class ListsMutations {
    private val api = TodoListControllerApi()

    @DgsMutation
    fun RemoveList(listId: String): String {
        api.delete(UUID.fromString(listId))
        return "List removed successfullyy"
    }

    @DgsMutation
    fun AddList(listName: String): ToDoList {
        val listResource = ListResource(listName)
        return api.createList(listResource)
    }

    @DgsMutation
    fun ChangeListName(listId: String, newName: String): ToDoList {
        val renameResource = RenameResource(newName, UUID.fromString(listId))
        return api.rename(renameResource)
    }
}