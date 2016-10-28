Feature: HousePrice Valuation
         User should be able to check property valuation when they type
         their area of their choice and they should be able to see the average price of 
         property of that area.
         
         
         
 Background:
        # Given I navigate to "siteName" on "<browser>"
             
             
 @SearchSales  
Scenario Outline:ProprtyValuation
 Given I navigate to "siteName" on "<browser>"
  When   I click on To HousePrice&values
    And  I enter AreaSearch as "<area>" 
    And  I click on "SearchButton"
  Then 	I should see search "<returnResult>"
   
      Examples:
        | browser |  	area				    								| returnResult 		 			 	  |
        | Mozilla | Croydon,(London Borough)  				| Croydon (London Borough)	|
        |	Chrome  |  London Bridge	Street,London SE1	| Croydon (London Borough		|
        
  			