package com.tv.todoapp.repository

import com.tv.todoapp.data.ToDoItem
import retrofit2.Response

class ToDoRepository {
    private val toDoService = RetrofitInstance.toDoService
    suspend fun getToDoItems(): List<ToDoItem> {
        return toDoService.getToDoItems()
    }

    suspend fun addToDoItem(item:ToDoItem): ToDoItem {
        return toDoService.addToDoItem(item)
    }

    suspend fun updateToDoItem(item:ToDoItem): Response<Unit> {
       return toDoService.updateToDoItem(item)
    }

    suspend fun deleteToDoItem(id:Int)  {
        toDoService.deleteToDoItem(id)
    }
}