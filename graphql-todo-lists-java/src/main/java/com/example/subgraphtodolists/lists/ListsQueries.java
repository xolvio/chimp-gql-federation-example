package com.example.subgraphtodolists.lists;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.example.subgraphtemplatejavadgsshows.types.TodoList;
import org.openapitools.client.apis.TodoListControllerApi;

import java.io.IOException;
import java.util.List;

@DgsComponent
public class ListsQueries {
    @DgsQuery
    public List<TodoList> Lists() throws IOException {
        TodoListControllerApi api = new TodoListControllerApi();
        var todoLists = api.getLists();
        return todoLists.stream()
            .map(it -> new TodoList(it.getId().toString(), it.getName().toString()))
            .toList();
    }
}
