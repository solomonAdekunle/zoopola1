Feature:SearchHomeForSale
      User should be able to search for house or flat to rent by enter
      Area or Postcode into the search box, enter minimum price  maximum price 
      Type of properties,  and Tpes of Bed rooms.
      
      Background:
             Given I navigate to "siteName" on "<browser>"
         
  @SearchSales  
  Scenario Outline:SearchHomeForRent
    Given I navigate to "siteName" on "<browser>"
    When I click on To Rent Tab     
   	 And I enter AreaSearch as "<area>"
   	 And I enter MinPricePCM as "<MinAmount>"
     And I enter MaxPricePCM as "<MaxAmount>"
     And I enter PropertyType as "<type>"
     And I enter BedRooms as "<Room>"
     And I click on "SearchButton"
   Then  I should see search "<returnResult>"
    Examples:
        | browser|  area				  	|  MinAmount|	MaxAmount | type		 	| Room	| returnResult 		 			 	  |
        | Mozilla|Croydon,London	  |		200			|	 300	 		|	flats  		|	2		  	| Croydon (London Borough)	|
        |				 |London Bridge 		|		300			|  400		 	|  houses 	|	5				| Croydon (London Borough		|
  			|				 |Victora,London 		| 	400		 	|  500 	 		|farms_land	|	3				|  Victoria									|
      
      