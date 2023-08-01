package com.example.subgraphtemplatejavadgsshows;

import org.openapitools.client.apis.TodoItemControllerApi;
import org.springframework.stereotype.Service;

@Service
public class ApiContainer {
    public TodoItemControllerApi todoItem() {
        return new TodoItemControllerApi();
    }
}
