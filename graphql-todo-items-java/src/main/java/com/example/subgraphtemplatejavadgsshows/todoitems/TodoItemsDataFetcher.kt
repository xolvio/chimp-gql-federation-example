package com.example.subgraphtemplatejavadgsshows.todoitems

import com.example.subgraphtemplatejavadgsshows.MyContext
import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsEntityFetcher
import com.netflix.graphql.dgs.context.DgsContext
import org.openapitools.client.apis.TodoItemControllerApi
import kotlin.collections.List
import kotlin.collections.Map
import kotlin.collections.count
import kotlin.collections.filter
import kotlin.collections.first
import kotlin.collections.listOf
import kotlin.collections.map
import com.example.subgraphtemplatejavadgsshows.types.List as TodoList


@DgsComponent
class TodoItemsDataFetcher {
    
    @DgsEntityFetcher(name = "TodoItem")
    fun fetchTodoItem(values: Map<String, Any>, dataFetchingEnvironment: DgsDataFetchingEnvironment): TodoItem {
        val id = values["id"] as String
        return DgsContext.getCustomContext<MyContext>(dataFetchingEnvironment).fetchTodoItems().first { it.id == id }
    }

    @DgsEntityFetcher(name = "List")
    fun fetchList(values: Map<String, Any>): TodoList {
        return TodoList(values["id"] as String, listOf(), 0)
    }

    @DgsData(parentType = "List", field = "todos")
    fun fetchTodos(dataFetchingEnvironment: DgsDataFetchingEnvironment): List<TodoItem> {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return DgsContext.getCustomContext<MyContext>(dataFetchingEnvironment).fetchTodoItems().filter { it.listId == list.id }
    }

    @DgsData(parentType = "List", field = "incompleteCount")
    fun fetchIncompleteCount(dataFetchingEnvironment: DgsDataFetchingEnvironment): Int {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return DgsContext.getCustomContext<MyContext>(dataFetchingEnvironment).fetchTodoItems().count { it.listId == list.id && !it.checked }
    }

}
