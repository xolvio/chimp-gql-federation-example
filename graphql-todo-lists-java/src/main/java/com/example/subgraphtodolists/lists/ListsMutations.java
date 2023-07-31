package com.example.subgraphtodolists.lists;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import org.openapitools.client.apis.TodoListControllerApi;
import org.openapitools.client.models.ListResource;
import org.openapitools.client.models.RenameResource;
import org.openapitools.client.models.ToDoList;

import java.io.IOException;
import java.util.UUID;

@DgsComponent
public class ListsMutations {
    private final TodoListControllerApi api = new TodoListControllerApi();

    @DgsMutation
    public String RemoveList(String listId) throws IOException {
        api.delete(UUID.fromString(listId));
        return "List removed successfully";
    }

    @DgsMutation
    public ToDoList AddList(String listName) throws IOException {
        ListResource listResource = new ListResource(listName);
        return api.createList(listResource);
    }

    @DgsMutation
    public ToDoList ChangeListName(String listId, String newName) throws IOException {
        RenameResource renameResource = new RenameResource(newName, UUID.fromString(listId));
        return api.rename(renameResource);
    }
}
