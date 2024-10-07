package com.teamviewer.uni_todo.UniTodoSpring.repositories;

import com.teamviewer.uni_todo.UniTodoSpring.domains.TodoDomain;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<TodoDomain, Long> {
}
