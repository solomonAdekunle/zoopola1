package com.suite;


	import org.junit.runner.RunWith;

	import cucumber.api.java.it.Date;
	import cucumber.api.junit.Cucumber;

	// runner class
	

@RunWith(Cucumber.class)
@cucumber.api.CucumberOptions(features="C:\\Maven\\Zoopola\\src\\main\\resources\\com\\suite\\features\\",
tags= {""
		//+"@ForgottenDetails"
		//+ "@Register",
		//+ "@ChatBox",
		//+"@FooterLinks",
		//+"@UpperFooterlinks",
		+"@SearchSales",}, format={"html:output",})
//@cucumber.api.CucumberOptions(format={"html:output"})
//@Cucumber.Options(format={"html:output"})
	
	public class Runner {
	
		
		
		
		
	
}
