package com.example.subgraphtodolists.lists;

import org.openapitools.client.apis.TodoListControllerApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiConfiguration {

    @Bean
    public TodoListControllerApi todoListControllerApi() {
        return new TodoListControllerApi();
    }
}
