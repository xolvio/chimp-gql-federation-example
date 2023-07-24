package com.example.subgraphtemplatejavadgsshows.todoitems;

import com.example.subgraphtemplatejavadgsshows.APiContainer;
import com.example.subgraphtemplatejavadgsshows.types.TodoItem;
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment;
import com.netflix.graphql.dgs.DgsQueryExecutor;
import com.netflix.graphql.dgs.autoconfig.DgsAutoConfiguration;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

//@SpringBootTest(classes = {DgsAutoConfiguration.class, TodoItemsDataFetcher.class})
public class TodoItemsDataFetcherTests {

//    @Autowired
//    DgsQueryExecutor dgsQueryExecutor;
//
//    private TodoItemsDataFetcher todoItemsDataFetcher;
//    private APiContainer apiContainer;
//
//    @BeforeEach
//    void setup() {
//        apiContainer = Mockito.mock(APiContainer.class);
//        todoItemsDataFetcher = new TodoItemsDataFetcher(apiContainer);
//    }

    @Test
    void testFetchTodoItems() {
//        TodoItem todoItem = new TodoItem("1", "Test", false, "1", null);
//        when(apiContainer.fetchTodoItems()).thenReturn(Collections.singletonList(todoItem));
        //  dgsQueryExecutor.executeAndExtractJsonPath(
        //                " { shows { title releaseYear }}",
        //                "data.shows[*].title");


//
//        DgsDataFetchingEnvironment dfe = DgsDataFetchingEnvironmentBuilder.newBuilder().build();
//
//        List<TodoItem> result = todoItemsDataFetcher.fetchTodos(dfe);
//
//        assertEquals(1, result.size());
//        assertEquals(todoItem, result.get(0));
    }
}
