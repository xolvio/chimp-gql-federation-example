package com.example.todoitems.repository

import com.example.todoitems.model.ToDoItem
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import java.util.UUID

interface ToDoItemRepository: ReactiveMongoRepository<ToDoItem, UUID>