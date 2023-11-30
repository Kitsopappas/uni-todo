package com.tv.todoapp.viemodels

import com.tv.todoapp.data.ToDoItem
import kotlinx.collections.immutable.ImmutableList
import kotlinx.collections.immutable.persistentListOf

data class ToDoState(
    var newItemText: String = "",
    var openAddItemDialg: Boolean = false,
    var contentItems: ImmutableList<ToDoItem> = persistentListOf()
)