package com.trustacean.restful_web_services.todos;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Todo {
    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String description;
    private LocalDate targetDate;
    private boolean isDone;

    public Todo() {

    }

    public Todo(int id, String username, String task, LocalDate targetDate, boolean isCompleted) {
        super();
        this.id = id;
        this.username = username;
        this.description = task;
        this.targetDate = targetDate;
        this.isDone = isCompleted;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String task) {
        this.description = task;
    }

    public LocalDate getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean isCompleted) {
        this.isDone = isCompleted;
    }

    @Override
    public String toString() {
        return String.format("Todo [id=%s, username=%s, task=%s, targetDate=%s, isCompleted=%s]", id, username,
                description,
                targetDate, isDone);
    }
}
