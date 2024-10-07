package com.teamviewer.uni_todo.UniTodoSpring.dto;

import java.time.LocalDateTime;
import java.util.Date;

public class TodoDTO {
    private int id;
    private final String name;
    private final boolean done;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public TodoDTO(String name) {
        this.name = name;
        this.done = false;
    }

    public TodoDTO(int id, String name, boolean done, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.done = done;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isDone() {
        return done;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
