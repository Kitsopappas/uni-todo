package org.tv.unitodo.screens;

import org.openqa.selenium.WebDriver;

public class CreateTodoScreenObjectBuilder {
    private WebDriver driver;
    private String newTodo;

    public CreateTodoScreenObjectBuilder setDriver(WebDriver driver) {
        this.driver = driver;
        return this;
    }

    public CreateTodoScreenObjectBuilder setTodo(String newTodo) {
        this.newTodo = newTodo;
        return this;
    }

    public CreateTodoScreenObject build() {
        return new CreateTodoScreenObject(driver, newTodo);
    }
}
