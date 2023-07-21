package com.example.todolists.controller

import com.example.todolists.model.ToDoList
import com.example.todolists.repository.ToDoListRepository
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.util.*

@RestController
@RequestMapping(produces = ["application/json"])
class TodoListController(val todoListRepository: ToDoListRepository) {
    @GetMapping("/api/lists")
    fun getLists(): Flux<ToDoList> {
        return todoListRepository.findAll()
    }

    @PostMapping("/api/lists")
    fun createList(@RequestBody resource: ListResource): Mono<ToDoList> {
        return todoListRepository.save(resource.toList())
    }

    @PostMapping("/api/list/rename")
    fun rename(@RequestBody resource: RenameResource): Mono<ToDoList> {
        return todoListRepository.findById(resource.id).map { it.copy(name = resource.text) }.flatMap { todoListRepository.save(it) }
    }

    @DeleteMapping("/api/list")
    fun delete(@RequestBody itemId: UUID): Mono<Void> {
        return todoListRepository.findById(itemId).flatMap {t: ToDoList -> todoListRepository.delete(t) }
    }
}