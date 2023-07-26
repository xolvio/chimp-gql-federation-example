package com.example.template

import org.openapitools.client.apis.TodoItemControllerApi
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class APiContainer {
    @Value("\${todoitemservice.url}")
    private lateinit var todoitemservice: String

    fun todoItem(): TodoItemControllerApi {

        print("todoitemservice: $todoitemservice")
        return TodoItemControllerApi(todoitemservice)
    }
}
