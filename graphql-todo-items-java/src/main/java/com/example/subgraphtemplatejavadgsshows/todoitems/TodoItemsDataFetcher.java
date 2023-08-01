package com.example.subgraphtemplatejavadgsshows.todoitems;

import com.example.subgraphtemplatejavadgsshows.DgsConstants;
import com.example.subgraphtemplatejavadgsshows.types.TodoItem;
import com.example.subgraphtemplatejavadgsshows.types.TodoList;
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
        var mapped =  mapper.todoItemToDgsTodoItem(itemsService.fetchById((String) values.get("id")));
        System.out.println("mapped: in dgsentityfetcher todoitem " + mapped);
        return mapped;
    }

    @DgsEntityFetcher(name = DgsConstants.TODOLIST.TYPE_NAME)
    public TodoList fetchList(Map<String, Object> values) {

        var todoList = new TodoList((String) values.get("id"), java.util.List.of(), 0);
        System.out.println("todoList: in dgsentityfetcher todolist " + todoList);
        return todoList;
    }

    @DgsData(parentType = DgsConstants.TODOLIST.TYPE_NAME)
    public java.util.List<TodoItem> todos(DgsDataFetchingEnvironment dataFetchingEnvironment) throws IOException {
        System.out.println("getting todos for a list" + dataFetchingEnvironment.getSource().toString());
        TodoList list = dataFetchingEnvironment.getSource();
        var items = itemsService.fetchByListId(list.getId()).stream().map(mapper::todoItemToDgsTodoItem).toList();
        System.out.println("items in List todos: " + items);
        return items;
    }

    @DgsData(parentType = DgsConstants.TODOLIST.TYPE_NAME)
    public int incompleteCount(DgsDataFetchingEnvironment dataFetchingEnvironment) throws IOException {
        TodoList list = dataFetchingEnvironment.getSource();
        return itemsService.fetchIncompleteCount(list.getId());
    }

    @DgsData(parentType = DgsConstants.TODOITEM.TYPE_NAME)
    public TodoList list(DgsDataFetchingEnvironment dataFetchingEnvironment) throws IOException {
        TodoItem item = dataFetchingEnvironment.getSource();
        var list = new TodoList(item.getListId(), java.util.List.of(), 0);
        System.out.println("list in item list: " + list);
        return list;
    }
}
