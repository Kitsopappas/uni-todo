package com.tv.todoapp.components

import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.tv.todoapp.data.ToDoItem
import androidx.compose.foundation.lazy.items
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun ToDoList(
    modifier: Modifier = Modifier,
    list: List<ToDoItem>,
    onCloseTask: (ToDoItem) -> Unit,
    onCheckedTask: (ToDoItem, Boolean) -> Unit,
) {
    LazyColumn(modifier = modifier) {
        items(
            items = list,
            key = { toDoItem -> toDoItem.id }) { toDoItem ->
            ToDoListItem(
                taskName = toDoItem.name,
                checked = toDoItem.done,
                onClose = { onCloseTask(toDoItem) },
                onCheckedChange = { checked -> onCheckedTask(toDoItem, checked) }
            )
        }
    }
}

@Composable
@Preview
fun ToDoListPreview() {
    val list = mutableListOf<ToDoItem>(
        ToDoItem(1, "item 1", true, "","", ""),
        ToDoItem(2, "item 2", false, "","", ""))
    ToDoList(list = list, onCloseTask =  {}, onCheckedTask = {_,_->})
}