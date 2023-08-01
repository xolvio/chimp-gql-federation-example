package com.example.subgraphtemplatejavadgsshows.todoitems.mutations;

import com.example.subgraphtemplatejavadgsshows.todoitems.TodoItemsService;
import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import org.openapitools.client.models.ToDoItem;

import java.io.IOException;

@DgsComponent
public class TodoItemsMutations {
    private final TodoItemsService itemsService;

    public TodoItemsMutations(TodoItemsService itemsService) {
        this.itemsService = itemsService;
    }

    @DgsMutation
    public String RemoveItem(String itemId) throws IOException {
        itemsService.removeItem(itemId);
        return "Item removed successfully";
    }

    @DgsMutation
    public ToDoItem AddTodo(String listId, String text) throws IOException {
        return itemsService.addTodo(listId, text);
    }

    @DgsMutation
    public ToDoItem ToggleTodoCheck(String itemId, boolean checked) throws IOException {
        return itemsService.toggleTodoCheck(itemId, checked);
    }

    @DgsMutation
    public ToDoItem RenameTodo(String todoId, String newText) throws IOException {
        return itemsService.renameTodo(todoId, newText);
    }
}
