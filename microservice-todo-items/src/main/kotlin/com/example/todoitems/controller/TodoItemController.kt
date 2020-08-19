package com.example.todoitems.controller

import com.example.todoitems.model.ToDoItem
import com.example.todoitems.repository.ToDoItemRepository
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.util.*

@RestController
@RequestMapping(produces = ["application/json"])
class TodoItemController(val toDoItemRepository: ToDoItemRepository) {
    @GetMapping("/api/items")
    fun getItems(): Flux<ToDoItem> {
        return toDoItemRepository.findAll()
    }

    @PostMapping("/api/items")
    fun createItem(@RequestBody resource: ItemResource): Mono<ToDoItem> {
        return toDoItemRepository.save(resource.toItem())
    }

    @PostMapping("/api/item/check")
    fun markChecked(@RequestBody itemId: UUID): Mono<ToDoItem> {
        return toDoItemRepository.findById(itemId).map { it.copy(checked = true) }.flatMap { toDoItemRepository.save(it) }
    }

    @PostMapping("/api/item/uncheck")
    fun markUnchecked(@RequestBody itemId: UUID): Mono<ToDoItem> {
        return toDoItemRepository.findById(itemId).map { it.copy(checked = false) }.flatMap { toDoItemRepository.save(it) }
    }

    @PostMapping("/api/item/rename")
    fun rename(@RequestBody resource: RenameResource): Mono<ToDoItem> {
        return toDoItemRepository.findById(resource.id).map { it.copy(text = resource.text) }.flatMap { toDoItemRepository.save(it) }
    }

    @DeleteMapping("/api/item")
    fun delete(@RequestBody itemId: UUID): Mono<Void> {
        return toDoItemRepository.findById(itemId).flatMap {t: ToDoItem -> toDoItemRepository.delete(t) }
    }
}