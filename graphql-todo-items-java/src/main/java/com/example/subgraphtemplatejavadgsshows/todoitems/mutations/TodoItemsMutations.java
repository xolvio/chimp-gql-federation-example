package com.example.subgraphtemplatejavadgsshows.todoitems.mutations;

import com.example.subgraphtemplatejavadgsshows.todoitems.TodoItemsMapper;
import com.example.subgraphtemplatejavadgsshows.todoitems.TodoItemsService;
import com.example.subgraphtemplatejavadgsshows.types.TodoItem;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import org.openapitools.client.models.ToDoItem;

import java.io.IOException;

@DgsComponent
public class TodoItemsMutations {
    private final TodoItemsService itemsService;
    private final TodoItemsMapper mapper;


    public TodoItemsMutations(TodoItemsService itemsService,  TodoItemsMapper mapper) {
        this.itemsService = itemsService;
        this.mapper = mapper;
    }

    @DgsMutation
    public String RemoveItem(String itemId) throws IOException {
        itemsService.removeItem(itemId);
        return "Item removed successfully";
    }

    @DgsMutation
    public TodoItem AddTodo(String listId, String text) throws IOException {
        return mapper.todoItemToDgsTodoItem(itemsService.addTodo(listId, text));
    }

    @DgsMutation
    public TodoItem ToggleTodoCheck(String itemId, boolean checked) throws IOException {
        return mapper.todoItemToDgsTodoItem(itemsService.toggleTodoCheck(itemId, checked));
    }

    @DgsMutation
    public TodoItem RenameTodo(String todoId, String newText) throws IOException {
        return mapper.todoItemToDgsTodoItem(itemsService.renameTodo(todoId, newText));
    }
}
