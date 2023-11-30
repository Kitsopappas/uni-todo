package com.tv.todoapp.data

data class ToDoItem(
    val id: Int,
    var name: String,
    var done: Boolean,
    val createdAt: String,
    val updatedAt: String,
    val deletedAt: String?,
)