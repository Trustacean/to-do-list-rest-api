package com.trustacean.restful_web_services.todos;

import java.util.Date;

public class Todo {
    private int id;
    private String username;
    private String task;
    private Date targetDate;
    private boolean isCompleted;

    public Todo() {

    }

    public Todo(int id, String username, String task, Date targetDate, boolean isCompleted) {
        super();
        this.id = id;
        this.username = username;
        this.task = task;
        this.targetDate = targetDate;
        this.isCompleted = isCompleted;
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

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    @Override
    public String toString() {
        return String.format("Todo [id=%s, username=%s, task=%s, targetDate=%s, isCompleted=%s]", id, username, task,
                targetDate, isCompleted);
    }
}
