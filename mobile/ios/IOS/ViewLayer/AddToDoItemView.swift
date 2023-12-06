//
//  AddToDoItemView.swift
//  IOS
//
//  Created by Chrysa Tsioutsiouriga on 4/12/23.
//

import SwiftUI

struct AddToDoItemView: View {
	
	@Environment(\.dismiss) var dismiss
	@EnvironmentObject var toDoItemsListViewModel: ToDoItemsListViewModel
	@State var textFieldText: String = ""
	var body: some View {
		
		ScrollView {
			VStack {
				TextField("Type somethinh here.. ", text: $textFieldText)
					.padding(.horizontal)
					.frame(height: 55)
					.background(Color(.systemGray6))
					.cornerRadius(10)
				
				Button(action: { onSave()
				}, label: {
					Text("Save".uppercased())
						.padding(.vertical)
						.foregroundStyle(.white)
						.frame(height: 55)
						.frame(maxWidth: .infinity)
						.background(Color.accentColor)
						.cornerRadius(10)
				})
			}
			.padding(10)
		}
		.navigationTitle("Add an item 🖋️")
	}
	
	func onSave() {
		toDoItemsListViewModel.newToDoItem(name: textFieldText)
		self.dismiss()
	}
}

#Preview {
	NavigationView {
		AddToDoItemView()
	}
	.environmentObject(ToDoItemsListViewModel())
}
