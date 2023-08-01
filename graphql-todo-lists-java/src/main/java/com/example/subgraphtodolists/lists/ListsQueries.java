package com.example.subgraphtodolists.lists;

import com.example.subgraphtemplatejavadgsshows.DgsConstants;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsEntityFetcher;
import com.netflix.graphql.dgs.DgsQuery;
import com.example.subgraphtemplatejavadgsshows.types.TodoList;

import java.io.IOException;
import java.util.List;
import java.util.Map;

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

    @DgsEntityFetcher(name = DgsConstants.TODOLIST.TYPE_NAME)
    public TodoList todoList(Map<String, Object> values) throws IOException {
        var todoList = listsService.fetchListsById((String) values.get("id"));
        return new TodoList(todoList.getId().toString(), todoList.getName().toString());
    }



}
