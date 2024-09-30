package com.trustacean.restful_web_services.todos;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoResources {
    private TodoDaoService service;

    public TodoResources(TodoDaoService service) {
        this.service = service;
    }

    @GetMapping("{username}/todos")
    public List<Todo> retrieveAllTodos(@PathVariable String username) {
        return service.findAll(username);
    }
}
