package com.teamviewer.uni_todo.UniTodoSpring.services;

import com.teamviewer.uni_todo.UniTodoSpring.domains.TodoDomain;
import com.teamviewer.uni_todo.UniTodoSpring.repositories.TodoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Iterable<TodoDomain> listAll() {
        return todoRepository.findAll();
    }

    public TodoDomain save(TodoDomain todo) {
        if (todo.getId() == 0) {
            todo.setCreatedAt(LocalDateTime.now());
        }

        todo.setUpdatedAt(LocalDateTime.now());
        return todoRepository.save(todo);
    }

    public TodoDomain get(Integer id) {
        final Optional<TodoDomain> todo = todoRepository.findById(id);
        return todo.orElse(null);
    }

    public void delete(Integer id) {
        todoRepository.deleteById(id);
    }
}