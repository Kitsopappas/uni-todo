package org.example.screens;

import org.example.helpers.ElemType;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class CreateTodoScreenObject extends ScreenObjectBase {
    private final String newTodo;

    public CreateTodoScreenObject(WebDriver driver, String newTodo) {
        super(driver);
        this.newTodo = newTodo;
    }

    public void typeOnInput() {
        WebElement inputElement = getCreateTodoInput();
        inputElement.sendKeys(newTodo);
    }

    public void pressOnCreateButton() {
        WebElement createTodoButton = getCreateTodoButton();
        createTodoButton.click();
    }

    public void waitForListToBeVisible() {
        WebDriverWait wait = getWebDriverWait(3);
        wait.until(ExpectedConditions.visibilityOfElementLocated(getMainList()));
    }

    public void waitForNewTodoToBeVisible() {
        WebDriverWait wait = getWebDriverWait(3);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[text()=\"" + newTodo + "\"]")));
    }

    private By getMainList() {
        return locator.by(ElemType.WILD_CARD, "ta-main-list-todo");
    }

    private WebElement getCreateTodoInput() {
        return locator.elementBy(ElemType.INPUT, "ta-main-input-todo");
    }

    public WebElement getCreateTodoButton() {
        return locator.elementBy(ElemType.BUTTON, "ta-main-button-todo");
    }
}
