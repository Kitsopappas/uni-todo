//
//  IOSApp.swift
//  IOS
//
//  Created by Chrysa Tsioutsiouriga on 1/12/23.
//

import SwiftUI

@main
struct IOSApp: App {
	init() {
	}
	
	@StateObject var toDoItemsListViewModel: ToDoItemsListViewModel = ToDoItemsListViewModel()
	var body: some Scene {
		WindowGroup {
			NavigationView {
				TodoItemsListView(toDoItemsListViewModel: ToDoItemsListViewModel())
			}
			.environmentObject(toDoItemsListViewModel)
		}
	}
}
