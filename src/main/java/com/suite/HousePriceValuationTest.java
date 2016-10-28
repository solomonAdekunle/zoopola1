package com.suite;

import com.suite.Base.TestBase;

import cucumber.api.java.en.When;

public class HousePriceValuationTest {
	 TestBase selenium= TestBase.getInstance();
	 
		 
	 @When("^I click on To HousePrice&values$")
	 public void i_click_on_To_Rent_Tab() throws Throwable {
		 selenium.click("housesPrice&Values__Selector");
	 }
	 
	

}
