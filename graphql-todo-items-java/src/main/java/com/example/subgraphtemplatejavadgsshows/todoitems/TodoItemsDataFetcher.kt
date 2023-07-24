package com.example.subgraphtemplatejavadgsshows.todoitems

import com.example.subgraphtemplatejavadgsshows.DgsConstants
import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsEntityFetcher
import kotlin.collections.List
import com.example.subgraphtemplatejavadgsshows.types.List as TodoList


@DgsComponent
class TodoItemsDataFetcher(val itemsService: TodoItemsService, val mapper: TodoItemsMapper) {
    @DgsEntityFetcher(name = DgsConstants.TODOITEM.TYPE_NAME)
    fun fetchTodoItem(values: Map<String, Any>, dataFetchingEnvironment: DgsDataFetchingEnvironment): TodoItem {
        return mapper.todoItemToDgsTodoItem(itemsService.fetchById(values["id"] as String))
    }

    @DgsEntityFetcher(name = DgsConstants.LIST.TYPE_NAME)
    fun List(values: Map<String, Any>): TodoList {
        return TodoList(values["id"] as String, listOf(), 0)
    }

    @DgsData(parentType = DgsConstants.LIST.TYPE_NAME)
    fun todos(dataFetchingEnvironment: DgsDataFetchingEnvironment): List<TodoItem> {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return itemsService.fetchByListId(list.id).map(mapper::todoItemToDgsTodoItem)
    }

    @DgsData(parentType = DgsConstants.LIST.TYPE_NAME)
    fun incompleteCount(dataFetchingEnvironment: DgsDataFetchingEnvironment): Int {
        val list = dataFetchingEnvironment.getSource<TodoList>()
        return itemsService.fetchIncompleteCount(list.id)
    }
}
