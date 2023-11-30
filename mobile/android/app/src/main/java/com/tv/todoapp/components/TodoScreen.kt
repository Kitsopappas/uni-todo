package com.tv.todoapp.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.lifecycle.viewmodel.compose.viewModel
import com.tv.todoapp.dialogs.ToDoAlertDialog
import com.tv.todoapp.ui.theme.ToDoAppTheme
import com.tv.todoapp.viemodels.ToDoViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TodoScreen(
    viewModel: ToDoViewModel = viewModel()
) {
    val state by viewModel.uiState.collectAsState()
//    var text by remember { mutableStateOf("") }
//    val openAlertDialog = remember { mutableStateOf(false) }
    ToDoAppTheme{
    Scaffold(
        topBar = {
            TopAppBar(
                colors = TopAppBarDefaults.mediumTopAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.primary,
                ),
                title = {
                    Text("TeamViewer Demo App")
                },
            )
        },
        floatingActionButton = {
            FloatingActionButton(onClick = {
               viewModel.triggerDialog(true)
            }) {
                Icon(Icons.Default.Add, contentDescription = "Add")
            }
        }
    ) { innerPadding ->
        Column {
            ToDoList(
                modifier = Modifier
                    .padding(innerPadding),
                list = state.contentItems,
                onCloseTask = { item -> viewModel.removeItem(item) },
                onCheckedTask = { item, checked -> viewModel.updateItem(item, checked) })
        }
        if (state.openAddItemDialg) {
            ToDoAlertDialog(
                textFieldInput = state.newItemText,
                onInputChange = { viewModel.updateInput(it) },
                onDismissRequest = {  viewModel.triggerDialog(false) },
                onConfirmation = {
                    viewModel.triggerDialog(false)
                    viewModel.addToDoItem(state.newItemText)
                    state.newItemText = ""
                },
                dialogTitle = "Add a new ToDo item",
            )
        }
    }
    }
}
@Composable
@Preview
fun TodoScreenPreview() {
    TodoScreen()
}