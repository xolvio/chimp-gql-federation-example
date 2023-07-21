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
        print("get items\n")
        return toDoItemRepository.findAll()
    }

    @PostMapping("/api/items")
    fun createItem(@RequestBody resource: ItemResource): Mono<ToDoItem> {
        print("add item\n")
        return toDoItemRepository.save(resource.toItem())
    }

    @PostMapping("/api/item/check")
    fun markChecked(@RequestBody itemId: UUID): Mono<ToDoItem> {
        val item = toDoItemRepository.findById(itemId)
        // print itemId and item
        print("itemId: " + itemId + "\n" + "item: " + item + "\n")
        return toDoItemRepository.findById(itemId).map { it.copy(checked = true) }.flatMap { toDoItemRepository.save(it) }
    }

    @PostMapping("/api/item/uncheck")
    fun markUnchecked(@RequestBody itemId: UUID): Mono<ToDoItem> {
        val item = toDoItemRepository.findById(itemId)
        // print itemId and item
        print("itemId: " + itemId + "\n" + "item: " + item + "\n")
        return toDoItemRepository.findById(itemId).map { it.copy(checked = false) }.flatMap { toDoItemRepository.save(it) }
    }

    @PostMapping("/api/item/rename")
    fun rename(@RequestBody resource: RenameResource): Mono<ToDoItem> {
        print("rename")
        return toDoItemRepository.findById(resource.id).map { it.copy(text = resource.text) }.flatMap { toDoItemRepository.save(it) }
    }

    @DeleteMapping("/api/item")
    fun delete(@RequestBody itemId: UUID): Mono<Void> {
        print("delete")
        return toDoItemRepository.findById(itemId).flatMap {t: ToDoItem -> toDoItemRepository.delete(t) }
    }
}