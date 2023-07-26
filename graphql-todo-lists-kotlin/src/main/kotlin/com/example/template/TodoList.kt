package com.example.template

import com.expediagroup.graphql.server.operations.Mutation
import com.expediagroup.graphql.server.operations.Query
import com.expediagroup.graphql.generator.federation.directives.FieldSet
import com.expediagroup.graphql.generator.federation.directives.KeyDirective
import com.expediagroup.graphql.generator.scalars.ID
import org.springframework.stereotype.Component
import java.util.*
import kotlin.collections.List as KList
import org.openapitools.client.apis.TodoListControllerApi
import org.openapitools.client.models.ListResource
import org.openapitools.client.models.RenameResource
import org.openapitools.client.models.ToDoList


@KeyDirective(fields = FieldSet("id"))
data class List(val id: ID, val name: String)


data class ListFilterQueryInput(
    val partialName: String? = null
)

@Component
class ListQuery : Query {
    fun Lists(): KList<List> {
        val api = TodoListControllerApi()
        val todoLists = api.getLists()
        return todoLists.map { List(ID(it.id.toString()), it.name.toString()) }
    }
}

@Component
class ListMutation : Mutation {
    private val api = TodoListControllerApi()

    fun RemoveList(listId: ID): String {
        print("removing list kotlin")
        api.delete(UUID.fromString(listId.toString()))
        return "List removed"
    }

    fun AddList(listName: String): List {
        print("adding list kotlin")
        val listResource = ListResource(listName)
        val createdList = api.createList(listResource)
        return List(ID(createdList.id.toString()), createdList.name.toString())
    }

    fun ChangeListName(listId: ID, newName: String): List {
        val renameResource = RenameResource(newName, UUID.fromString(listId.toString()))
        val renamedList = api.rename(renameResource)
        return List(ID(renamedList.id.toString()), renamedList.name.toString())
    }
}
