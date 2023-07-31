package com.example.subgraphtodolists.lists;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.example.subgraphtemplatejavadgsshows.types.List;
import org.openapitools.client.apis.TodoListControllerApi;

import java.io.IOException;
import java.util.stream.Collectors;

@DgsComponent
public class ListsQueries {
    @DgsQuery
    public java.util.List<List> Lists() throws IOException {
        TodoListControllerApi api = new TodoListControllerApi();
        var todoLists = api.getLists();
        return todoLists.stream()
            .map(it -> new List(it.getId().toString(), it.getName().toString()))
            .toList();
    }
}
