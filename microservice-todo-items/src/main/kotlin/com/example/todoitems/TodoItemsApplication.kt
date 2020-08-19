package com.example.todoitems

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TodoItemsApplication

fun main(args: Array<String>) {
	runApplication<TodoItemsApplication>(*args)
}
