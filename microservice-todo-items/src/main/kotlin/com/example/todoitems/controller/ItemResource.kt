package com.example.todoitems.controller

import com.example.todoitems.model.ToDoItem
import java.time.LocalDateTime
import java.util.UUID

data class ItemResource(val text: String, val listId: UUID) {
    fun toItem(): ToDoItem {
        return ToDoItem(UUID.randomUUID(), text, listId, false, LocalDateTime.now())
    }
}
