package org.tv.unitodo;

import org.tv.unitodo.screens.CreateTodoScreenObject;
import org.tv.unitodo.screens.CreateTodoScreenObjectBuilder;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.Random;

public class CreateNewTodoTest {
    private WebDriver driver;

    private CreateTodoScreenObject todoScreenObject;

    @BeforeClass
    public void setUp() {
        driver = new ChromeDriver();
    }

    @BeforeMethod
    public void init() {
        driver.get("http://localhost:3000");
        String newTodo = "TODO " + randomSalt();
        CreateTodoScreenObjectBuilder builder = new CreateTodoScreenObjectBuilder();
        todoScreenObject = builder.setDriver(driver).setTodo(newTodo).build();
    }

    @Test
    public void testCreationOfTodo() {
        todoScreenObject.waitForListToBeVisible();
        todoScreenObject.typeOnInput();
        todoScreenObject.pressOnCreateButton();
        todoScreenObject.waitForNewTodoToBeVisible();
    }

    @AfterClass
    public void terminateTests() {
        driver.close();
    }

    private String randomSalt() {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        while (salt.length() < 18) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        return salt.toString();

    }
}
