package com.guru.todo_list.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/todo-app")
public class TodoController {

    @GetMapping
    public String getTodoApp(){
        return "index.html";
    }
}
