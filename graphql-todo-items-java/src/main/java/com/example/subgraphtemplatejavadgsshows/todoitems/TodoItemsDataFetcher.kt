package com.example.subgraphtemplatejavadgsshows.todoitems

import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsEntityFetcher
import kotlin.collections.List
import com.example.subgraphtemplatejavadgsshows.types.List as TodoList


@DgsComponent
class TodoItemsDataFetcher(val itemsService: TodoItemsService, val mapper: TodoItemsMapper) {
    @DgsEntityFetcher(name = "TodoItem")
    fun fetchTodoItem(values: Map<String, Any>, dataFetchingEnvironment: DgsDataFetchingEnvironment): TodoItem {
        return mapper.todoItemToDgsTodoItem(itemsService.fetchById(values["id"] as String))
    }

    @DgsEntityFetcher(name = "List")
    fun fetchList(values: Map<String, Any>): TodoList {
        return TodoList(values["id"] as String, listOf(), 0)
    }

    @DgsData(parentType = "List", field = "todos")
    fun fetchTodos(dataFetchingEnvironment: DgsDataFetchingEnvironment): List<TodoItem> {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return itemsService.fetchByListId(list.id).map(mapper::todoItemToDgsTodoItem)
    }

    @DgsData(parentType = "List", field = "incompleteCount")
    fun fetchIncompleteCount(dataFetchingEnvironment: DgsDataFetchingEnvironment): Int {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return itemsService.fetchIncompleteCount(list.id)
    }

}
