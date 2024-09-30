package com.trustacean.restful_web_services.todos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class TodoDaoService {
    private static List<Todo> todos = new ArrayList<Todo>();
    private static int todosCount = 0;

    static {
        todos.add(new Todo(++todosCount, "Trustacean", "Erming", new Date(), false));
        todos.add(new Todo(++todosCount, "Trustacean", "Mewing", new Date(), false));
        todos.add(new Todo(++todosCount, "Trustacean", "Skibidi Rizzler 10000 Aura", new Date(), false));
    }

    public List<Todo> findAll(String username) {
        List<Todo> userTodos = new ArrayList<Todo>();
        for (Todo todo : todos) {
            if (todo.getUsername().equals(username)) {
                userTodos.add(todo);
            }
        }
        return userTodos;
    }
}
