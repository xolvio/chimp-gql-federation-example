package com.example.todoitems.model

import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime
import java.util.UUID

@Document(collection = "items")
data class ToDoItem(val id: UUID, val text: String,  val listId: UUID, val checked: Boolean, val createdAt: LocalDateTime)
