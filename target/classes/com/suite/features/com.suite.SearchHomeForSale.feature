Feature: SearchHomeForSale
      User should be able to search for house to buy by enter
      Area or Psot code into the search box, enter minimum price  maximum price 
      Type of properties,  and Tpes of Bed rooms.
      
      
   @SearchSales   
 Scenario Outline: SearchHomeForSale
  Given I navigate to "siteName" on "<browser>"
  When  I enter AreaSearch as "<area>"
    And I enter MinPrice as "<MinAmount>"
    And I enter MaxPrice as "<MaxAmount>"
    And I enter PropertyType as "<type>"
    And I enter BedRooms as "<Room>"
    And I click on "SearchButton"
  Then  I should see search "<returnResult>"
  
  Examples:
        | browser|area					|  MinAmount	|	MaxAmount | type		 	| Room	  | returnResult 		 			  	|
        | Chrome | 	Croydon 		|		 10000		|	50000		 	|	flats  		|	2		  	| Croydon (London Borough)	|
        |				 | Croydon			|		180000		| 2000000  	|  houses 	|	5				| Croydon (London Borough		|
  			|			   |Victora,London| 	50000 		| 550000 	 	|farms_land	|	3				|  Victoria									|
      