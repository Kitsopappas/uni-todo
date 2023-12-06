//
//  TodoItemsListView.swift
//  IOS
//
//  Created by Chrysa Tsioutsiouriga on 1/12/23.
//

import SwiftUI

struct TodoItemsListView: View {
	@ObservedObject var toDoItemsListViewModel: ToDoItemsListViewModel
	
	var body: some View {
		List {
			ForEach(toDoItemsListViewModel.toDoItems) { toDoItem in
				ToDoListItemView(toDoItem: toDoItem)
					.onTapGesture {
						withAnimation(.linear) {
							toDoItemsListViewModel.updateToDoItem(toDoItem: toDoItem)
						}
					}
			}
			.onDelete(perform: toDoItemsListViewModel.deleteToDoItem)
			.onMove(perform: toDoItemsListViewModel.moveToDoItem)
		}
		.navigationTitle("Todo list 📝")
		.toolbar {
			ToolbarItem(placement: .navigationBarLeading) {
				EditButton()
			}
			ToolbarItem(placement: .navigationBarTrailing) {
				NavigationLink("➕", destination: AddToDoItemView())
					.foregroundColor(.blue)
			}
		}
	}
	
}

#Preview {
	NavigationView {
		TodoItemsListView(toDoItemsListViewModel: ToDoItemsListViewModel())
	}
}

