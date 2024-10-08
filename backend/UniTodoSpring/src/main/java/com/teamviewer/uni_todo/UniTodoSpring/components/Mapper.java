package com.teamviewer.uni_todo.UniTodoSpring.components;

import com.teamviewer.uni_todo.UniTodoSpring.domains.TodoDomain;
import com.teamviewer.uni_todo.UniTodoSpring.dto.TodoDTO;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Component
public class Mapper {
    public TodoDTO toDto(TodoDomain todo) {
        return new TodoDTO(todo.getId(), todo.getName(), todo.isDone(), todo.getCreatedAt(), todo.getUpdatedAt());
    }

    public List<TodoDTO> toDtoList(Iterable<TodoDomain> todos) {
        return StreamSupport.stream(todos.spliterator(), false)
                .map(this::toDto) // Replace with the appropriate mapping logic
                .collect(Collectors.toList());
    }

    public TodoDomain toTodoDomain(TodoDTO todoDTO) {
        if (todoDTO.getId() > 0) {
            return new TodoDomain(todoDTO.getId(), todoDTO.getName(), todoDTO.isDone());
        }
        return new TodoDomain(todoDTO.getName(), todoDTO.isDone());
    }
}
