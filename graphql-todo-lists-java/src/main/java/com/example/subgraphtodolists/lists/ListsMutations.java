package com.example.subgraphtodolists.lists;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import org.openapitools.client.models.ToDoList;

import java.io.IOException;

@DgsComponent
public class ListsMutations {
    private final ListsService listsService;

    public ListsMutations(ListsService listsService) {
        this.listsService = listsService;
    }

    @DgsMutation
    public String RemoveList(String listId) throws IOException {
        listsService.removeList(listId);
        return "List removed successfully";
    }

    @DgsMutation
    public ToDoList AddList(String listName) throws IOException {
        return listsService.addList(listName);
    }

    @DgsMutation
    public ToDoList ChangeListName(String listId, String newName) throws IOException {
        return listsService.changeListName(listId, newName);
    }
}
