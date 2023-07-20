package com.example.subgraphtemplatejavadgsshows

import com.example.subgraphtemplatejavadgsshows.types.List as TodoList
import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsEntityFetcher

@DgsComponent
class TodoItemsDataFetcher {

    private val todoItems = listOf(
            TodoItem("1", "First todo", true, "e7627f04-9220-4098-b9e4-8aae95fd3dae", null),
            TodoItem("2", "Second todo", false, "e7627f04-9220-4098-b9e4-8aae95fd3dae", null)
    )

    @DgsEntityFetcher(name = "TodoItem")
    fun fetchTodoItem(values: Map<String, Any>): TodoItem {
        val id = values["id"] as String
        return todoItems.first { it.id == id }
    }

    @DgsEntityFetcher(name = "List")
    fun fetchList(values: Map<String, Any>): TodoList {
        return TodoList(values["id"] as String, listOf(), 0)
    }

    @DgsData(parentType = "List", field = "todos")
    fun fetchTodos(dataFetchingEnvironment: DgsDataFetchingEnvironment): List<TodoItem> {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return todoItems.filter { it.listId == list.id }
    }

    @DgsData(parentType = "List", field = "incompleteCount")
    fun fetchIncompleteCount(dataFetchingEnvironment: DgsDataFetchingEnvironment): Int {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return todoItems.count { it.listId == list.id && !it.checked }
    }
}
