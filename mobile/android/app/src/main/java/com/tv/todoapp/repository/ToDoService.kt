package com.tv.todoapp.repository

import com.tv.todoapp.data.ToDoItem
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.GET
import retrofit2.http.PATCH
import retrofit2.http.POST
import retrofit2.http.Path

interface ToDoService {
    @GET("GetToDo")
    suspend fun getToDoItems(): List<ToDoItem>

    @POST("InsertToDo")
    suspend fun addToDoItem(@Body item:ToDoItem): ToDoItem

    @PATCH("UpdateToDo")
    suspend fun updateToDoItem(@Body item:ToDoItem): Response<Unit>

    @DELETE("DeleteToDo/{id}")
    suspend fun deleteToDoItem(@Path("id") id:Int)
}