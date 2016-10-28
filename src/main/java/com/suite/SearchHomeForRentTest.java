package com.suite;

import com.suite.Base.TestBase;
import com.suite.Utility.TestUtil;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchHomeForRentTest {
	 TestBase selenium= TestBase.getInstance();
	 
	 
	 
	 @When("^I click on To Rent Tab$")
	 public void i_click_on_To_Rent_Tab() throws Throwable {
		 selenium.click("rentTab_Selector");
	 }


		@When("^I enter MinPricePCM as \"([^\"]*)\"$")
		public void i_enter_MinPrice_as(String data) throws Throwable {
			TestUtil.SelectMinPCM(data);
			
			
		  	}
		@When("^I enter MaxPricePCM as \"([^\"]*)\"$")
		public void i_enter_MaxPricePCM_as(String data) throws Throwable {
			TestUtil.SelectMaxPCM(data);
			
		}

}