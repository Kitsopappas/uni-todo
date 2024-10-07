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
    @Autowired
    private TodoService service;
    @Autowired
    private Mapper mapper;

    @GetMapping("/todo")
    public List<TodoDTO> getAuthors() {
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
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
