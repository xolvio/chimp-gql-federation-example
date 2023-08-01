package com.example.subgraphtodolists.lists;

import org.openapitools.client.apis.TodoListControllerApi;
import org.openapitools.client.models.ListResource;
import org.openapitools.client.models.RenameResource;
import org.openapitools.client.models.ToDoList;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class ListsService {

    private final TodoListControllerApi api;

    public ListsService(TodoListControllerApi api) {
        this.api = api;
    }

    public List<ToDoList> fetchLists() throws IOException {
        return api.getLists();
    }

    public void removeList(String listId) throws IOException {
        api.delete(UUID.fromString(listId));
    }

    public ToDoList addList(String listName) throws IOException {
        ListResource listResource = new ListResource(listName);
        return api.createList(listResource);
    }

    public ToDoList changeListName(String listId, String newName) throws IOException {
        RenameResource renameResource = new RenameResource(newName, UUID.fromString(listId));
        return api.rename(renameResource);
    }

    public ToDoList fetchListsById(String id) throws IOException {
        return this.fetchLists().stream()
            .filter(it -> it.getId().toString().equals(id))
            .findFirst()
            .orElseThrow();
    }
}
