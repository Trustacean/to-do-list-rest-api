package com.trustacean.restful_web_services.todos;

import java.util.ArrayList;
import java.time.LocalDate;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component
public class TodoService {
    private static List<Todo> todos = new ArrayList<Todo>();
    private static int todosCount = 0;

    static {
        todos.add(new Todo(++todosCount, "Trustacean", "Erming", LocalDate.now(), false));
        todos.add(new Todo(++todosCount, "Trustacean", "Mewing", LocalDate.now(), false));
        todos.add(new Todo(++todosCount, "Trustacean", "Skibidi Rizzler 10000 Aura", LocalDate.now(), false));
    }

    public List<Todo> findByUsername(String username) {
        Predicate<? super Todo> predicate = todo -> todo.getUsername().equals(username);
        return todos.stream().filter(predicate).toList();
    }

    public Todo addTodo(String username, String description, LocalDate targetDate, boolean done) {
        Todo todo = new Todo(++todosCount, username, description, targetDate, done);
        todos.add(todo);
        return todo;
    }

    public void deleteById(int id) {
        Predicate<? super Todo> predicate = todo -> todo.getId() == id;
        todos.removeIf(predicate);
    }

    public Todo findById(int id) {
        Predicate<? super Todo> predicate = todo -> todo.getId() == id;
        return todos.stream().filter(predicate).findFirst().orElse(null);
    }

    public void updateTodo(Todo todo) {
        deleteById(todo.getId());
        todos.add(todo);
    }
}