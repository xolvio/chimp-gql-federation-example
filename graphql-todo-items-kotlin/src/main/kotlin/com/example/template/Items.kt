package com.example.template

import com.expediagroup.graphql.generator.annotations.GraphQLIgnore
import com.expediagroup.graphql.generator.federation.directives.ExtendsDirective
import com.expediagroup.graphql.generator.federation.directives.ExternalDirective
import com.expediagroup.graphql.generator.federation.directives.FieldSet
import com.expediagroup.graphql.generator.federation.directives.KeyDirective
import com.expediagroup.graphql.generator.federation.execution.FederatedTypeResolver
import com.expediagroup.graphql.generator.scalars.ID
import com.expediagroup.graphql.server.operations.Mutation
import graphql.schema.DataFetchingEnvironment
import org.openapitools.client.apis.TodoItemControllerApi
import org.openapitools.client.models.ItemResource
import org.openapitools.client.models.RenameResource
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*
import java.util.concurrent.CompletableFuture
import kotlin.collections.List as KList


@KeyDirective(fields = FieldSet("id"))
@ExtendsDirective
class List constructor(@ExternalDirective val id: ID, @GraphQLIgnore @Autowired val itemsService: TodoItemsService) {
    suspend fun todos(): KList<TodoItem> = itemsService.fetchByListId(id.toString()).map(TodoItemsMapper::map)
    suspend fun incompleteCount(): Int = itemsService.fetchIncompleteCount(id.toString())
}

@Component
class ListResolver(@Autowired val itemsService: TodoItemsService) : FederatedTypeResolver<List> {
    override val typeName: String
        get() = "List"

    override suspend fun resolve(env: DataFetchingEnvironment, representations: KList<Map<String, Any>>): KList<List?> = representations.map {
        List(ID(it["id"] as String), itemsService)
    }
}

@KeyDirective(fields = FieldSet("id"))
data class TodoItem(val id: ID, val text: String? = null, val checked: Boolean, val listId: String, val List: List? = null)


@Component
class TodoItemMutation: Mutation {
    private val api = TodoItemControllerApi()

    fun RemoveItem(itemId: ID): String {
        api.delete(UUID.fromString(itemId.toString()))
        return "Item removed successfully"
    }

    fun AddTodo(listId: ID, text: String): TodoItem {
        val itemResource = ItemResource(text, UUID.fromString(listId.toString()))
        return TodoItemsMapper.map(api.createItem(itemResource))
    }

    fun ToggleTodoCheck(itemId: ID, checked: Boolean): TodoItem {
        val item = if (checked) api.markChecked(UUID.fromString(itemId.toString())) else api.markUnchecked(UUID.fromString(itemId.toString()))
        return TodoItemsMapper.map(item)
    }

    fun RenameTodo(todoId: ID, newText: String): TodoItem {
        return TodoItemsMapper.map(api.rename(RenameResource(newText, UUID.fromString(todoId.toString()))))
    }
}
