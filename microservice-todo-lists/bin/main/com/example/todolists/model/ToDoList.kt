package com.example.todolists.model

import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDateTime
import java.util.UUID

@Document(collection = "lists")
data class ToDoList(val id: UUID, val name: String, val createdAt: LocalDateTime)
