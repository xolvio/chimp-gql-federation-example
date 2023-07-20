package com.example.subgraphtodolists.lists

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.example.subgraphtemplatejavadgsshows.types.List as TodoList
import org.openapitools.client.apis.TodoListControllerApi

@DgsComponent
class ListsQueries {
    @DgsQuery
    fun Lists(): List<TodoList> {
        val api = TodoListControllerApi()
        val todoLists = api.getLists()
        return todoLists.map { TodoList(it.id.toString(), it.name.toString()) }
    }
}
