package com.example.subgraphtemplatejavadgsshows.todoitems;

import java.io.IOException;
import java.util.List;

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

}
