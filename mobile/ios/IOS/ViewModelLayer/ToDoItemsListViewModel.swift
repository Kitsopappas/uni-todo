//
//  ToDoItemsListViewModel.swift
//  IOS
//
//  Created by Chrysa Tsioutsiouriga on 4/12/23.
//

import Foundation

public class ToDoItemsListViewModel: ObservableObject {
	var dataReceivedCallback: (([TodoItem]) -> Void)?
	let todoItemDataRequest = TodoItemDataRequest()
	@Published var toDoItems: [TodoItem] = []
	
	init() {
		getData()
	}
	
	func getData() {
		todoItemDataRequest.fetchDataFromAPI { [weak self] result in
			switch result {
				case .failure(let error):
					print(error)
				case .success(let toDoItemsData):
					self?.toDoItems = toDoItemsData
					self?.dataReceivedCallback?(toDoItemsData)
			}
		}
	}
	
	func deleteToDoItem(indexSet: IndexSet) {
		for index in indexSet{
			todoItemDataRequest.deleteToDoItem(id: toDoItems[index].id)
			toDoItems.remove(atOffsets: indexSet)
		}
	}
	
	func moveToDoItem(from: IndexSet, to: Int) {
		toDoItems.move(fromOffsets: from, toOffset: to)
	}
	
	func updateToDoItem(toDoItem: TodoItem) {
		if let index  = toDoItems.first(where: { $0.id == toDoItem.id }) {
		}
		todoItemDataRequest.updateToDoItem( state: !toDoItem.done )
	}
	
	func newToDoItem(name: String) {
		todoItemDataRequest.addToDoItem(id: toDoItems.count + 1, name: name)
		getData()
	}

}
