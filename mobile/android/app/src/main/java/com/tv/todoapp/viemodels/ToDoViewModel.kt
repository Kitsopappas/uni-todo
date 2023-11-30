package com.tv.todoapp.viemodels

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.tv.todoapp.data.ToDoItem
import com.tv.todoapp.repository.ToDoRepository
import kotlinx.collections.immutable.toPersistentList
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

class ToDoViewModel : ViewModel() {
    private val repository = ToDoRepository()

    private val _uiState = MutableStateFlow(ToDoState())
    val uiState = _uiState.asStateFlow()

    init {
        getToDoItems()
    }

    fun getToDoItems() {
        viewModelScope.launch {
            val items = repository.getToDoItems()
            _uiState.update { currentState ->
                currentState.copy(
                    contentItems = items.toPersistentList(),
                )
            }
        }
    }

    fun addToDoItem(itemToAddText: String) {
        viewModelScope.launch {
            var maxId = _uiState.value.contentItems.maxWith(Comparator.comparingInt { it.id }).id
            val formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")
            val current = LocalDateTime.now().format(formatter)
            val tmp = ToDoItem(
                maxId + 1,
                name = itemToAddText,
                done = false,
                createdAt = current,
                deletedAt = null,
                updatedAt = current
            )
            val item = repository.addToDoItem(tmp)
            _uiState.update { currentState ->
                currentState.copy(
                    contentItems = currentState.contentItems.toMutableList().apply { add(item) }
                        .toPersistentList(),
                )
            }
        }

    }

    fun removeItem(item: ToDoItem) {
        viewModelScope.launch {
            repository.deleteToDoItem(item.id)
            getToDoItems()
        }
    }

    fun updateItem(item: ToDoItem, checked: Boolean) {
        var itemToChange: ToDoItem? = null
        itemToChange = uiState.value.contentItems.firstOrNull {
            it.id == item.id
        }?.copy(done = checked)
        viewModelScope.launch {
            itemToChange?.let {
                val response = repository.updateToDoItem(it)
                if (response.isSuccessful) {
                    getToDoItems()
                }
            }

        }
    }

    fun triggerDialog(open: Boolean){
        _uiState.update { currentState ->
            currentState.copy(openAddItemDialg = open)
        }
    }

    fun updateInput(input: String){
        _uiState.update { currentState ->
            currentState.copy(newItemText = input)
        }
    }
}