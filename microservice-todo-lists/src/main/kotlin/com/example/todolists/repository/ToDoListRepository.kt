package com.example.todolists.repository

import com.example.todolists.model.ToDoList
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import java.util.UUID

interface ToDoListRepository: ReactiveMongoRepository<ToDoList, UUID>