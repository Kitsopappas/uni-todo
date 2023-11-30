package com.tv.todoapp.dialogs

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun ToDoAlertDialog(
    onDismissRequest: () -> Unit,
    onConfirmation: () -> Unit,
    dialogTitle: String,
    textFieldInput: String,
    onInputChange: (text: String) -> Unit,
) {
    AlertDialog(
        title = {
            Text(text = dialogTitle)
        },
        text = {

            TextField(
                value = textFieldInput,
                onValueChange = { onInputChange(it) },
                modifier = Modifier
                    .fillMaxWidth()
            )
        },
        onDismissRequest = {
            onDismissRequest()
        },
        confirmButton = {
            TextButton(
                onClick = {
                    onConfirmation()
                }
            ) {
                Text("Add")
            }
        },
        dismissButton = {
            TextButton(
                onClick = {
                    onDismissRequest()
                }
            ) {
                Text("Dismiss")
            }
        }
    )
}

@Composable
@Preview
fun ToDoDialogPreview() {
    ToDoAlertDialog({}, {}, "Todo add dialog", "input", {})
}