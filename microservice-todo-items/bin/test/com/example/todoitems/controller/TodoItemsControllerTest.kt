package com.example.todoitems.controller

import org.amshove.kluent.shouldEqual
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.http.MediaType


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoItemsControllerTest {

    @Autowired
    private lateinit var client: WebTestClient

    @Test
    fun `should create a todo item`() {
        val item = mapOf("text" to "some text")
        val result = client.post().uri("/api/items")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .syncBody(item)
                .exchange()
                .expectStatus().isOk
                .expectBody(Map::class.java)
                .returnResult()
                .responseBody!!

        result["text"] as String shouldEqual "some text"
    }
}