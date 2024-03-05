package org.tv.unitodo.helpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LocatorHelper {
    private WebDriver driver;
    public LocatorHelper(WebDriver driver) {
        this.driver = driver;
    }

    public WebElement elementBy(String type, String dataTestId) {
        return driver.findElement(By.xpath("//" + type + "[@data-testid=\"" + dataTestId + "\"]"));
    }

    public By by(String type, String dataTestId) {
        return By.xpath("//" + type + "[@data-testid=\"" + dataTestId + "\"]");
    }
}
