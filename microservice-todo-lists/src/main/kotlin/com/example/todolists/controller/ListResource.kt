package com.example.todolists.controller

import com.example.todolists.model.ToDoList
import java.time.LocalDateTime
import java.util.UUID

data class ListResource(val text: String) {
    fun toList(): ToDoList {
        return ToDoList(UUID.randomUUID(), text, LocalDateTime.now())
    }
}
