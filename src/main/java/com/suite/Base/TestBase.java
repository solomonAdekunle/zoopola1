package com.suite.Base;

import java.io.File;
import java.io.FileInputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

public class TestBase {
	Properties OR = null;
	Properties CONFIG = null;
	static WebDriver d = null;
	WebDriver mozilla = null;
	WebDriver chrome = null;
	WebDriver ie = null;
	static TestBase w;

	// Constructor
	public TestBase() {
		/**
		 * Initialising the Config properties and OR properties
		 */

		if (OR == null) {
			try {
				// initialize OR
				OR = new Properties();
				FileInputStream fs = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\com\\Config\\OR.Properties");
				OR.load(fs);

				// initialize CONFIG to corresponding env
				CONFIG = new Properties();
				fs = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\com\\Config\\Config.Properties");
				CONFIG.load(fs);

				// System.out.println(OR.getProperty("loginusername"));
				// System.out.println(CONFIG.getProperty("loginURL"));
			} catch (Exception e) {
				System.out.println("Error on intializing properties files");
			}

		}

	}
	// opening the browser
		public void openBrowser(String browserType) {
			// log("Opening browser "+browserType);
			if (browserType.equals("Mozilla") && mozilla == null) {
				d = new FirefoxDriver();
				mozilla = d;
			} else if (browserType.equals("Mozilla") && mozilla != null) {
				d = mozilla;
			} else if (browserType.equals("Chrome") && chrome == null) {
				File file = new File("C:\\IEDriver\\chromedriver.exe");
				// File file= new File("C:\\Users\\solomon.adekunle\\OneDrive for
				// Business\\workspace\\BetVernons\\chromedriver.exe");
				System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
				ChromeOptions options = new ChromeOptions();
				options.addArguments("no-sandbox");
				d = new ChromeDriver();
				chrome = d;
			} else if (browserType.equals("Chrome") && chrome == null) {
				d = chrome;
			}

			else if (browserType.equals("IE")) {
				// set the IE server exe path and initialize
			}
			
	d.manage().window().maximize();
	// implicit wait
	d.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
}	
	// navigates to a URL
		public void navigate(String URL) {
			// log("Navigating to "+CONFIG.getProperty(URL));
			d.get(CONFIG.getProperty(URL));
		}
	public void click(String identifier) {
		try {
			if (identifier.endsWith("_xpath"))
				d.findElement(By.xpath(OR.getProperty(identifier))).click();
			else if (identifier.endsWith("_id"))
				d.findElement(By.id(OR.getProperty(identifier))).click();
			else if (identifier.endsWith("_name"))
				d.findElement(By.name(OR.getProperty(identifier))).click();
			else if ((identifier.endsWith("_Selector")))
				d.findElement(By.cssSelector(OR.getProperty(identifier))).click();
		} catch (NoSuchElementException e) {
			// Utility.takeScreenshot(identifier);
			Assert.fail("Element not found - " + identifier);

		}
	}
	public static void clickByXpath(String identifier ){
		try{
			d.findElement(By.xpath(identifier)).click();
		}catch(NoSuchElementException e){
			//Utility.takeScreenshot(identifier);
			Assert.fail("Element not found - "+identifier);
		}
	}

	public void clear(String identifier) {
		try {
			if (identifier.endsWith("_xpath"))
				d.findElement(By.xpath(OR.getProperty(identifier))).clear();
			else if (identifier.endsWith("_id"))
				d.findElement(By.id(OR.getProperty(identifier))).clear();
			else if (identifier.endsWith("_name"))
				d.findElement(By.name(OR.getProperty(identifier))).click();
		} catch (NoSuchElementException e) {
			// Utility.takeScreenshot(identifier);//take screenshot
			Assert.fail("Element not found - " + identifier);

		}
	}

	public void input(String identifier,String data) {
		try {
			if (identifier.endsWith("_xpath"))
				d.findElement(By.xpath(OR.getProperty(identifier))).sendKeys(data);
			else if (identifier.endsWith("_id"))
				d.findElement(By.id(OR.getProperty(identifier))).sendKeys(data);
			else if (identifier.endsWith("_name"))
				d.findElement(By.name(OR.getProperty(identifier))).sendKeys(data);
			else if(identifier.endsWith("_Selector"))
				d.findElement(By.cssSelector(OR.getProperty(identifier))).sendKeys(data);
		} catch (NoSuchElementException e) {
			Assert.fail("Element not found - " + identifier);
			// Utility.takeScreenshot(identifier);
		}
	}

	public boolean verifyTitle(String expectedTitleKey) {
		String expectedTitle = OR.getProperty(expectedTitleKey);
		String actualTitle = d.getTitle();
		// Utility.takeScreenshot(expectedTitleKey);
		if (expectedTitle.equals(actualTitle))
			return true;
		else
			return false;
	}

	public boolean isElementPresent(String identifier) {
		int size = 0;
		if (identifier.endsWith("_xpath"))
			size = d.findElements(By.xpath(OR.getProperty(identifier))).size();
		else if (identifier.endsWith("_id"))
			size = d.findElements(By.id(OR.getProperty(identifier))).size();
		else if (identifier.endsWith("_name"))
			size = d.findElements(By.name(OR.getProperty(identifier))).size();
		else if ((identifier.endsWith("_Selector")))
			size = d.findElements(By.cssSelector(OR.getProperty(identifier))).size();
		else // not in prop file
			size = d.findElements(By.xpath(identifier)).size();
		// Utility.takeScreenshot(identifier);
		if (size > 0)
			return true;
		else
			return false;
	}

	public String getText(String identifier) {
		String text = "";
		if (identifier.endsWith("_xpath"))
			text = d.findElement(By.xpath(OR.getProperty(identifier))).getText();
		else if (identifier.endsWith("_id"))
			text = d.findElement(By.id(OR.getProperty(identifier))).getText();
		else if (identifier.endsWith("_name"))
			text = d.findElement(By.name(OR.getProperty(identifier))).getText();
		// Utility.takeScreenshot(identifier);
		return text;

	}

	
	
	/********Singleton**********/
	public static TestBase getInstance(){
		if(w==null)
			w= new TestBase();
		
		return w;
	}

	/***************** Application specific functions *******************/

	public void doLogin() {
		navigate("siteName");
		input(CONFIG.getProperty("hpUsername_xpath"), "Username");
		input(CONFIG.getProperty("hpPassword_xpath"), "Password");
		click("hpSignin_xpath");

	}

	// Creating a Dynamatic Data Generator

	public String generateStringWithAllobedSplChars(int length, String allowdSplChrs) {
		String allowedChars = "abcdefghijklmnopqrstuvwxyz" + // alphabets
				"1234567890" + // numbers
				allowdSplChrs;
		return RandomStringUtils.random(length, allowedChars);
	}

	public String generateRandomAlphaNumeric(int length) {
		return RandomStringUtils.randomAlphanumeric(length);
	}

	public static String getRelativeUrl(String absoluteURL) throws MalformedURLException {
		URL url = new URL(absoluteURL);
		return url.getPath();
	}

}
