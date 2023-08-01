package com.example.subgraphtodolists;

import com.example.subgraphtodolists.lists.ListsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DynamicTest;
import org.junit.jupiter.api.TestFactory;
import org.mockito.Mockito;
import org.openapitools.client.models.ToDoList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;
import com.example.subgraphtemplatejavadgsshows.types.TodoList;


@SpringBootTest
public class ResolveReferencesTest {

    @Autowired
    ResolveReferencesTestHelper helper;
    @MockBean
    ListsService listsService;

    // Mock ListsService to return a list of lists for listsService.fetchLists(), with one list with id "1" and name "Test"
    @BeforeEach
    void setUp() throws IOException {


        // this is an example how to mock things to work with the automatically generated test,
        // if the 3rd party repository brings in something that's not exactly a string, but GraphQL treats it as string
        // the automated tool passes "1" as the id.
        Mockito.when(listsService.fetchListsById(Mockito.anyString())).thenAnswer(invocation -> {
            Object[] args = invocation.getArguments();
            String argId = (String) args[0];

            ToDoList toDoListMock = Mockito.mock(ToDoList.class, Mockito.RETURNS_DEEP_STUBS);
            Mockito.when(toDoListMock.getId().toString()).thenReturn(argId);
            Mockito.when(toDoListMock.getName()).thenReturn("");

            return toDoListMock;
        });
    }

    @TestFactory
    public Stream<DynamicTest> generateDynamicTests() {
        return helper.invoke();
    }

}
