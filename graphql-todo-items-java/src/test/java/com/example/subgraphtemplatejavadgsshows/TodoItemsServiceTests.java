package com.example.subgraphtemplatejavadgsshows;

import com.example.subgraphtemplatejavadgsshows.APiContainer;
import com.example.subgraphtemplatejavadgsshows.todoitems.TodoItemsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.openapitools.client.apis.TodoItemControllerApi;
import org.openapitools.client.models.ToDoItem;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class TodoItemsServiceTests {
    private APiContainer apiContainer;
    private TodoItemControllerApi todoItemControllerApi;
    private TodoItemsService todoItemsService;

    @BeforeEach
    public void setup() {
        apiContainer = Mockito.mock(APiContainer.class);
        todoItemControllerApi = Mockito.mock(TodoItemControllerApi.class);
        Mockito.when(apiContainer.todoItem()).thenReturn(todoItemControllerApi);
        todoItemsService = new TodoItemsService(apiContainer);
    }

    private UUID mockUUID(String character) {
        return UUID.fromString(mockUUIDString(character));
    }

    private String mockUUIDString(String str) {
        String lastChar = str.substring(str.length() - 1);
        int remainingLength = 32 - str.length(); // UUID has 32 characters excluding hyphens
        String padding = lastChar.repeat(Math.max(0, remainingLength)); // Ensure repeat count is not negative
        String paddedStr = str + padding;
        // Convert non-hexadecimal characters to hexadecimal
        paddedStr = paddedStr.chars()
            .mapToObj(c -> Integer.toHexString(c % 16))
            .collect(Collectors.joining());
        return paddedStr.substring(0, 8) + "-" + paddedStr.substring(8, 12) + "-" + paddedStr.substring(12, 16) + "-" + paddedStr.substring(16, 20) + "-" + paddedStr.substring(20, 32);
    }

    @Test
    public void testFetchById() throws IOException {
        // Arrange
        APiContainer apiContainer = Mockito.mock(APiContainer.class);
        TodoItemControllerApi todoItemControllerApi = Mockito.mock(TodoItemControllerApi.class);
        Mockito.when(apiContainer.todoItem()).thenReturn(todoItemControllerApi);
        TodoItemsService todoItemsService = new TodoItemsService(apiContainer);
        ToDoItem item1 = new ToDoItem(mockUUID("1"), "Item 1", null, null, null);
        ToDoItem item2 = new ToDoItem(mockUUID("2"), "Item 2", null, null, null);
        ToDoItem item3 = new ToDoItem(mockUUID("3"), "Item 3", null, null, null);
        Mockito.when(todoItemControllerApi.getItems()).thenReturn(Arrays.asList(item1, item2, item3));

        // Act
        ToDoItem result = todoItemsService.fetchById(mockUUIDString("2"));

        // Assert
        assertEquals(mockUUIDString("2"), result.getId().toString());
    }
    @Test
    public void testFetchByListId() throws IOException {
        // Arrange
        APiContainer apiContainer = Mockito.mock(APiContainer.class);
        TodoItemControllerApi todoItemControllerApi = Mockito.mock(TodoItemControllerApi.class);
        Mockito.when(apiContainer.todoItem()).thenReturn(todoItemControllerApi);
        TodoItemsService todoItemsService = new TodoItemsService(apiContainer);
        ToDoItem item1 = new ToDoItem(mockUUID("1"), "Item 1", mockUUID("list1"), null, null);
        ToDoItem item2 = new ToDoItem(mockUUID("2"), "Item 2", mockUUID("list2"), null, null);
        ToDoItem item3 = new ToDoItem(mockUUID("3"), "Item 3", mockUUID("list1"), null, null);
        Mockito.when(todoItemControllerApi.getItems()).thenReturn(Arrays.asList(item1, item2, item3));

        // Act
        List<ToDoItem> result = todoItemsService.fetchByListId(mockUUIDString("list1"));

        // Assert
        assertEquals(2, result.size());
        assertTrue(result.stream().allMatch(item -> item.getListId().toString().equals(mockUUIDString("list1"))));
    }

    @Test
    public void testFetchIncompleteCount() throws IOException {
        // Arrange
        ToDoItem item1 = new ToDoItem(mockUUID("1"), "Item 1", mockUUID("list1"), false, null);
        ToDoItem item2 = new ToDoItem(mockUUID("2"), "Item 2", mockUUID("list1"), true, null);
        ToDoItem item3 = new ToDoItem(mockUUID("3"), "Item 3", mockUUID("list1"), false, null);
        Mockito.when(todoItemControllerApi.getItems()).thenReturn(Arrays.asList(item1, item2, item3));

        // Act
        int result = todoItemsService.fetchIncompleteCount(mockUUIDString("list1"));

        // Assert
        assertEquals(2, result);
    }

}