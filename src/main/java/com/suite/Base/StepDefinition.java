package com.suite.Base;

import com.suite.Utility.TestUtil;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	 TestBase  selenium = TestBase.getInstance();
	 
	 
	 
	 @Given("^I navigate to \"([^\"]*)\" on \"([^\"]*)\"$")
		public void i_navigate_to_on(String siteName, String browser) throws Throwable {
			selenium.openBrowser(browser);
			selenium.navigate(siteName);
			
		}

		@And("^I enter AreaSearch as \"([^\"]*)\"$")
		public void i_enter_AreaSearch_as(String data) throws Throwable {
			//selenium.click("AreaSearch_Selector");
		    selenium.input("AreaSearch_Selector",data);	
		    
			
		    
		}

		@When("^I enter MinPrice as \"([^\"]*)\"$")
		public void i_enter_MinPrice_as(String data) throws Throwable {
			TestUtil.SelectMinPrice(data);
			
			
		  	}
		@When("^I enter MaxPrice as \"([^\"]*)\"$")
		public void i_enter_MaxPrice_as(String data) throws Throwable {
			TestUtil.SelectMaxPrice(data);
			
		}

		@When("^I enter PropertyType as \"([^\"]*)\"$")
		public void i_enter_PropertyType_as(String data) throws Throwable {
			TestUtil.SelectPropertyType(data);
		}
		@When("^I enter BedRooms as \"([^\"]*)\"$")
		public void i_enter_BedRooms_as(String data) throws Throwable {
			TestUtil.SelectMinBed(data);
			
			
		}
		@When("^I click on \"([^\"]*)\"$")
		public void i_click_on(String identifier) throws Throwable {
			selenium.click("search_Selector");
		}
		@Then("^I should see search \"([^\"]*)\"$")
		public void i_should_see_search(String identifier) throws Throwable {
		       selenium.isElementPresent("returnResult_Selector");
		       return;
		}



	


}



