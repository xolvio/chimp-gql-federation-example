package com.example.subgraphtemplatejavadgsshows.todoitems;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import org.openapitools.client.apis.TodoItemControllerApi;
import org.openapitools.client.models.ItemResource;
import org.openapitools.client.models.RenameResource;
import org.openapitools.client.models.ToDoItem;

import java.io.IOException;
import java.util.UUID;

@DgsComponent
public class TodoItemsMutations {
    private final TodoItemControllerApi api = new TodoItemControllerApi();

    @DgsMutation
    public String RemoveItem(String itemId) throws IOException {
        api.delete(UUID.fromString(itemId));
        return "Item removed successfully";
    }

    @DgsMutation
    public ToDoItem AddTodo(String listId, String text) throws IOException {
        ItemResource itemResource = new ItemResource(text, UUID.fromString(listId));
        return api.createItem(itemResource);
    }

    @DgsMutation
    public ToDoItem ToggleTodoCheck(String itemId, boolean checked) throws IOException {
        return checked ? api.markChecked(UUID.fromString(itemId)) : api.markUnchecked(UUID.fromString(itemId));
    }

    @DgsMutation
    public ToDoItem RenameTodo(String todoId, String newText) throws IOException {
        var renameResource = new RenameResource(newText, UUID.fromString(todoId));
        return api.rename(renameResource);
    }
}
