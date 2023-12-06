//
//  TodoItemDataModel.swift
//  IOS
//
//  Created by Chrysa Tsioutsiouriga on 4/12/23.
//

import Foundation

struct TodoItem: Identifiable, Codable {
	var id: Int
	var name: String
	var done: Bool = false
	var createdAt: String
	var updatedAt: String
	var deletedAt: String?
}

class TodoItemDataRequest: NSObject, URLSessionDelegate {
	
	func fetchDataFromAPI(completion: @escaping(Result<[TodoItem], Error>) -> Void ) {
		
		if let url = URL(string: "https://localhost:7046/GetTodo") {
			let request = NSMutableURLRequest(url: url)
			
			let configuration = URLSessionConfiguration.default
			let session = Foundation.URLSession(configuration: configuration, delegate: self, delegateQueue:OperationQueue.main)
			
			let task = session.dataTask(with: request as URLRequest) {
				(data: Data!, response: URLResponse!, error: Error!) -> Void in
				
				guard let jsonData = data else {
					completion(.failure(error!))
					return
				}

				do {
					let decoder = JSONDecoder()
					let todoItemData = try decoder.decode([TodoItem].self, from: jsonData)
					completion(.success(todoItemData))

				} catch {
					print("Error decoding JSON: \(error)")
					completion(.failure(error))
				}
			}
			task.resume()
		}
	}

	func urlSession(_ session: URLSession, didReceive challenge: URLAuthenticationChallenge, completionHandler: (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {
		completionHandler(URLSession.AuthChallengeDisposition.useCredential, URLCredential(trust: challenge.protectionSpace.serverTrust ?? self as! SecTrust))
	}

	func addToDoItem(id: Int, name: String) {
		let url = URL(string: "https://localhost:7046/InsertTodo")!
		var request = URLRequest(url: url)
		request.httpMethod = "POST"

		 // Create the JSON data from the dictionary
		 let jsonBody: [String: Any] = [
			 "id": id,
			 "name": name,
			 "done": false,
			 "createdAt": "2023-12-05T12:30:33.277Z",
			 "updatedAt": "2023-12-05T12:30:33.277Z",
			 "deletedAt": "2023-12-05T12:30:33.277Z"
		 ]
		let configuration = URLSessionConfiguration.default
		let session = Foundation.URLSession(configuration: configuration, delegate: self, delegateQueue:OperationQueue.main)

		
		do {
			let jsonData = try JSONSerialization.data(withJSONObject: jsonBody, options: [])
			request.httpBody = jsonData
		} catch {
			print("Error encoding JSON: \(error.localizedDescription)")
			return
		}
		
		request.setValue("application/json", forHTTPHeaderField: "Content-Type")
	
		let task = session.dataTask(with: request) { data, response, error in
			
			if let error = error {
				print("Error: \(error.localizedDescription)")
				return
		}

		if let httpResponse = response as? HTTPURLResponse {
			print("Status code: \(httpResponse.statusCode)")

			if let data = data {
				// Process the response data as needed
				let responseString = String(data: data, encoding: .utf8)
					print("Response: \(responseString ?? "")")
				}
			}
		}

		task.resume()
	}
	
	func updateToDoItem(state: Bool) {
		let url = URL(string: "https://localhost:7046/UpdateTodo")!
		var request = URLRequest(url: url)
		request.httpMethod = "PATCH"

		let configuration = URLSessionConfiguration.default
		let session = Foundation.URLSession(configuration: configuration, delegate: self, delegateQueue:OperationQueue.main)

		
		let updateData: [String: Any] = [
				"done": state
			]

		do {
			request.httpBody = try JSONSerialization.data(withJSONObject: updateData)
		} catch {
			print("Error encoding JSON: \(error.localizedDescription)")
			return
		}

		request.setValue("application/json", forHTTPHeaderField: "Content-Type")

		let task = session.dataTask(with: request) { data, response, error in
			if let error = error {
				print("Error: \(error.localizedDescription)")
				return
			}

			if let httpResponse = response as? HTTPURLResponse {
				print("Status code: \(httpResponse.statusCode)")

				if let data = data {
					// Process the response data as needed
					let responseString = String(data: data, encoding: .utf8)
					print("Response: \(responseString ?? "")")
				}
			}
		}

		task.resume()
	}
	
	func deleteToDoItem(id: Int) {
		let url = URL(string: "https://localhost:7046/DeleteTodo/\(id)")!
		var request = URLRequest(url: url)
		request.httpMethod = "DELETE"

		let configuration = URLSessionConfiguration.default
		let session = Foundation.URLSession(configuration: configuration, delegate: self, delegateQueue:OperationQueue.main)


		request.setValue("application/json", forHTTPHeaderField: "Content-Type")
	
		let task = session.dataTask(with: request) { data, response, error in
			
			if let error = error {
				print("Error: \(error.localizedDescription)")
				return
		}

		if let httpResponse = response as? HTTPURLResponse {
			print("Status code: \(httpResponse.statusCode)")

			if let data = data {
				// Process the response data as needed
				let responseString = String(data: data, encoding: .utf8)
					print("Response: \(responseString ?? "")")
				}
			}
		}

		task.resume()
	}
}
