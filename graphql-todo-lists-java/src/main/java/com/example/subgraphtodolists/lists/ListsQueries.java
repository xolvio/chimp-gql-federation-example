package com.example.subgraphtodolists.lists;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.example.subgraphtemplatejavadgsshows.types.TodoList;

import java.io.IOException;
import java.util.List;

@DgsComponent
public class ListsQueries {
    private final ListsService listsService;

    public ListsQueries(ListsService listsService) {
        this.listsService = listsService;
    }

    @DgsQuery
    public List<TodoList> Lists() throws IOException {
        var todoLists = listsService.fetchLists();
        return todoLists.stream()
            .map(it -> new TodoList(it.getId().toString(), it.getName().toString()))
            .toList();
    }
}
