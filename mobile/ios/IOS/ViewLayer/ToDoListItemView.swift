//
//  ToDoListItemView.swift
//  IOS
//
//  Created by Chrysa Tsioutsiouriga on 1/12/23.
//

import SwiftUI

struct ToDoListItemView: View {

	let toDoItem: TodoItem
	var body: some View {
		HStack {
			Text(toDoItem.name)
			Spacer()
			Button(action: {
			}, label: {
				Image(systemName: toDoItem.done ? "checkmark.square" : "square")
					.foregroundColor( toDoItem.done ? .green : .red)
			})
		}
		.padding(10)
	}
}

#Preview {
	ToDoListItemView(toDoItem: TodoItem(id: 0, name: "1st", createdAt: "123", updatedAt: "", deletedAt: "12"))
}
