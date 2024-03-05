package org.tv.unitodo.screens;

import org.tv.unitodo.helpers.LocatorHelper;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class ScreenObjectBase {
    protected LocatorHelper locator;
    private final WebDriver driver;
    protected WebDriverWait wait;

    public ScreenObjectBase(WebDriver driver) {
        this.locator = new LocatorHelper(driver);
        this.driver = driver;
    }

    public WebDriverWait getWebDriverWait(long seconds) {
        return new WebDriverWait(driver, Duration.ofSeconds(seconds));
    }
}
