package com.example.subgraphtemplatejavadgsshows.todoitems;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.openapitools.client.models.ItemResource;
import org.openapitools.client.models.RenameResource;
import org.springframework.stereotype.Service;

import com.example.subgraphtemplatejavadgsshows.ApiContainer;
import org.openapitools.client.models.ToDoItem;

@Service
public class TodoItemsService {

    private final ApiContainer api;

    public TodoItemsService(ApiContainer api) {
        this.api = api;
    }

    public ToDoItem fetchById(String id) throws IOException {
        return api.todoItem().getItems().stream()
            .filter(item -> item.getId().toString().equals(id))
            .findFirst()
            .orElse(null);
    }

    public List<ToDoItem> fetchByListId(String listId) throws IOException {
        return api.todoItem().getItems().stream()
            .filter(item -> item.getListId().toString().equals(listId))
            .toList();
    }

    public int fetchIncompleteCount(String listId) throws IOException {
        return (int) api.todoItem().getItems().stream()
            .filter(item -> item.getListId().toString().equals(listId) && !item.getChecked())
            .count();
    }

    public void removeItem(String itemId) throws IOException {
        api.todoItem().delete(UUID.fromString(itemId));
    }

    public ToDoItem addTodo(String listId, String text) throws IOException {
        ItemResource itemResource = new ItemResource(text, UUID.fromString(listId));
        return api.todoItem().createItem(itemResource);
    }

    public ToDoItem toggleTodoCheck(String itemId, boolean checked) throws IOException {
        return checked ? api.todoItem().markChecked(UUID.fromString(itemId)) : api.todoItem().markUnchecked(UUID.fromString(itemId));
    }

    public ToDoItem renameTodo(String todoId, String newText) throws IOException {
        var renameResource = new RenameResource(newText, UUID.fromString(todoId));
        return api.todoItem().rename(renameResource);
    }

}
