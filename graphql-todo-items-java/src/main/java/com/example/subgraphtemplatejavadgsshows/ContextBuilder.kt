package com.example.subgraphtemplatejavadgsshows

import com.example.subgraphtemplatejavadgsshows.types.TodoItem
import com.netflix.graphql.dgs.context.DgsCustomContextBuilder
import org.openapitools.client.apis.TodoItemControllerApi
import org.springframework.stereotype.Component


@Component
class ContextBuilder : DgsCustomContextBuilder<MyContext?> {
    override fun build(): MyContext {
        return MyContext()
    }
}


class MyContext {
    val customState = "Custom state!"

    fun fetchTodoItems(): List<TodoItem> {
        val items = TodoItemControllerApi().getItems().map {
            TodoItem(it.id.toString(), it.text, it.checked ?: false, it.listId.toString(), null)
        }
        println("todoItems: $items")
        return items
    }
}
