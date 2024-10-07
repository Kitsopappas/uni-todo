package com.teamviewer.uni_todo.UniTodoSpring.domains;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "todoentity")
public class TodoDomain {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="Id")
    private int id;

    @Column(name="Name")
    private String name;

    @Column(name="Done")
    private boolean done;

    @Column(name="CreatedAt", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name="UpdatedAt", nullable = false, updatable = false)
    private LocalDateTime updatedAt;

    @Column(name="DeletedAt")
    private LocalDateTime deletedAt;


    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    public TodoDomain(String name, boolean done) {
        this.name = name;
        this.done = done;
    }

    public TodoDomain(int id, String name, boolean done) {
        this.id = id;
        this.name = name;
        this.done = done;
    }

    public TodoDomain() {

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

    public LocalDateTime getDeletedAt() {
        return deletedAt;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
