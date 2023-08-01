package com.example.subgraphtemplatejavadgsshows.todoitems;

import com.example.subgraphtemplatejavadgsshows.DgsConstants;
import com.example.subgraphtemplatejavadgsshows.types.TodoItem;
import com.example.subgraphtemplatejavadgsshows.types.List;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment;
import com.netflix.graphql.dgs.DgsEntityFetcher;

import java.io.IOException;
import java.util.Map;

@DgsComponent
public class TodoItemsDataFetcher {
    private final TodoItemsService itemsService;
    private final TodoItemsMapper mapper;

    public TodoItemsDataFetcher(TodoItemsService itemsService, TodoItemsMapper mapper) {
        this.itemsService = itemsService;
        this.mapper = mapper;
    }

    @DgsEntityFetcher(name = DgsConstants.TODOITEM.TYPE_NAME)
    public TodoItem fetchTodoItem(Map<String, Object> values, DgsDataFetchingEnvironment dataFetchingEnvironment) throws IOException {
        return mapper.todoItemToDgsTodoItem(itemsService.fetchById((String) values.get("id")));
    }

    @DgsEntityFetcher(name = DgsConstants.LIST.TYPE_NAME)
    public List fetchList(Map<String, Object> values) {
        return new List((String) values.get("id"), java.util.List.of(), 0);
    }

    @DgsData(parentType = DgsConstants.LIST.TYPE_NAME)
    public java.util.List<TodoItem> todos(DgsDataFetchingEnvironment dataFetchingEnvironment) throws IOException {
        List list = dataFetchingEnvironment.getSource();
        return itemsService.fetchByListId(list.getId()).stream().map(mapper::todoItemToDgsTodoItem).toList();
    }

    @DgsData(parentType = DgsConstants.LIST.TYPE_NAME)
    public int incompleteCount(DgsDataFetchingEnvironment dataFetchingEnvironment) throws IOException {
        List list = dataFetchingEnvironment.getSource();
        return itemsService.fetchIncompleteCount(list.getId());
    }
}
