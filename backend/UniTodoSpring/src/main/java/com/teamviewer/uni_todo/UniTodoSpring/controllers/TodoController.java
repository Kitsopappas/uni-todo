package com.teamviewer.uni_todo.UniTodoSpring.controllers;

import com.teamviewer.uni_todo.UniTodoSpring.components.Mapper;
import com.teamviewer.uni_todo.UniTodoSpring.domains.TodoDomain;
import com.teamviewer.uni_todo.UniTodoSpring.dto.TodoDTO;
import com.teamviewer.uni_todo.UniTodoSpring.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
    private final TodoService service;
    private final Mapper mapper;

    @Autowired
    public TodoController(TodoService service, Mapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @GetMapping("/todo")
    public List<TodoDTO> getTodos() {
        return mapper.toDtoList(service.listAll());
    }

    @PostMapping("/todo")
    public TodoDomain create(@RequestBody TodoDTO todo) {
        return service.save(mapper.toTodoDomain(todo));
    }

    @PatchMapping("/todo")
    public TodoDomain update(@RequestBody TodoDTO todo) {
        return service.save(mapper.toTodoDomain(todo));
    }

    @DeleteMapping("/todo/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}
