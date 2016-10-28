$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/suite/features/com.suite.HousePriceValuation.feature");
formatter.feature({
  "line": 1,
  "name": "HousePrice Valuation",
  "description": "       User should be able to check property valuation when they type\r\n       their area of their choice and they should be able to see the average price of \r\n       property of that area.",
  "id": "houseprice-valuation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 9,
      "value": "# Given I navigate to \"siteName\" on \"\u003cbrowser\u003e\""
    }
  ],
  "line": 13,
  "name": "ProprtyValuation",
  "description": "",
  "id": "houseprice-valuation;proprtyvaluation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to \"siteName\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on To HousePrice\u0026values",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter AreaSearch as \"\u003carea\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see search \"\u003creturnResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "houseprice-valuation;proprtyvaluation;",
  "rows": [
    {
      "cells": [
        "browser",
        "area",
        "returnResult"
      ],
      "line": 21,
      "id": "houseprice-valuation;proprtyvaluation;;1"
    },
    {
      "cells": [
        "Mozilla",
        "Croydon,(London Borough)",
        "Croydon (London Borough)"
      ],
      "line": 22,
      "id": "houseprice-valuation;proprtyvaluation;;2"
    },
    {
      "cells": [
        "Chrome",
        "London Bridge\tStreet,London SE1",
        "Croydon (London Borough"
      ],
      "line": 23,
      "id": "houseprice-valuation;proprtyvaluation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "ProprtyValuation",
  "description": "",
  "id": "houseprice-valuation;proprtyvaluation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to \"siteName\" on \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on To HousePrice\u0026values",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter AreaSearch as \"Croydon,(London Borough)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see search \"Croydon (London Borough)\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "Mozilla",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 9089481389,
  "status": "passed"
});
formatter.match({
  "location": "HousePriceValuationTest.i_click_on_To_Rent_Tab()"
});
formatter.result({
  "duration": 1119233679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon,(London Borough)",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 417552017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 2690991605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon (London Borough)",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 5415845251,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 23,
  "name": "ProprtyValuation",
  "description": "",
  "id": "houseprice-valuation;proprtyvaluation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to \"siteName\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on To HousePrice\u0026values",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter AreaSearch as \"London Bridge\tStreet,London SE1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see search \"Croydon (London Borough\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "Chrome",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 5807241972,
  "status": "passed"
});
formatter.match({
  "location": "HousePriceValuationTest.i_click_on_To_Rent_Tab()"
});
formatter.result({
  "duration": 72582656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London Bridge\tStreet,London SE1",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 968806945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 640681577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon (London Borough",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 5081697237,
  "status": "passed"
});
formatter.uri("main/resources/com/suite/features/com.suite.SearchHomeForRent.feature");
formatter.feature({
  "line": 1,
  "name": "SearchHomeForSale",
  "description": "    User should be able to search for house or flat to rent by enter\r\n    Area or Postcode into the search box, enter minimum price  maximum price \r\n    Type of properties,  and Tpes of Bed rooms.",
  "id": "searchhomeforsale",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "SearchHomeForRent",
  "description": "",
  "id": "searchhomeforsale;searchhomeforrent",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"siteName\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on To Rent Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter AreaSearch as \"\u003carea\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter MinPricePCM as \"\u003cMinAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter MaxPricePCM as \"\u003cMaxAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter PropertyType as \"\u003ctype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter BedRooms as \"\u003cRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see search \"\u003creturnResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "searchhomeforsale;searchhomeforrent;",
  "rows": [
    {
      "cells": [
        "browser",
        "area",
        "MinAmount",
        "MaxAmount",
        "type",
        "Room",
        "returnResult"
      ],
      "line": 21,
      "id": "searchhomeforsale;searchhomeforrent;;1"
    },
    {
      "cells": [
        "Mozilla",
        "Croydon,London",
        "200",
        "300",
        "flats",
        "2",
        "Croydon (London Borough)"
      ],
      "line": 22,
      "id": "searchhomeforsale;searchhomeforrent;;2"
    },
    {
      "cells": [
        "",
        "London Bridge",
        "300",
        "400",
        "houses",
        "5",
        "Croydon (London Borough"
      ],
      "line": 23,
      "id": "searchhomeforsale;searchhomeforrent;;3"
    },
    {
      "cells": [
        "",
        "Victora,London",
        "400",
        "500",
        "farms_land",
        "3",
        "Victoria"
      ],
      "line": 24,
      "id": "searchhomeforsale;searchhomeforrent;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"siteName\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "\u003cbrowser\u003e",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 1272043299,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "SearchHomeForRent",
  "description": "",
  "id": "searchhomeforsale;searchhomeforrent;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"siteName\" on \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on To Rent Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter AreaSearch as \"Croydon,London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter MinPricePCM as \"200\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter MaxPricePCM as \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter PropertyType as \"flats\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter BedRooms as \"2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see search \"Croydon (London Borough)\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "Mozilla",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 3424720347,
  "status": "passed"
});
formatter.match({
  "location": "SearchHomeForRentTest.i_click_on_To_Rent_Tab()"
});
formatter.result({
  "duration": 613646598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon,London",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 247950149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "SearchHomeForRentTest.i_enter_MinPrice_as(String)"
});
formatter.result({
  "duration": 604915194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 24
    }
  ],
  "location": "SearchHomeForRentTest.i_enter_MaxPricePCM_as(String)"
});
formatter.result({
  "duration": 317509294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flats",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_enter_PropertyType_as(String)"
});
formatter.result({
  "duration": 144481921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_BedRooms_as(String)"
});
formatter.result({
  "duration": 142259406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 18975335077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon (London Borough)",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 375757428,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"siteName\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "\u003cbrowser\u003e",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 2051120003,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "SearchHomeForRent",
  "description": "",
  "id": "searchhomeforsale;searchhomeforrent;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"siteName\" on \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on To Rent Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter AreaSearch as \"London Bridge\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter MinPricePCM as \"300\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter MaxPricePCM as \"400\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter PropertyType as \"houses\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter BedRooms as \"5\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see search \"Croydon (London Borough\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 1846096014,
  "status": "passed"
});
formatter.match({
  "location": "SearchHomeForRentTest.i_click_on_To_Rent_Tab()"
});
formatter.result({
  "duration": 595304534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London Bridge",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 451268656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 24
    }
  ],
  "location": "SearchHomeForRentTest.i_enter_MinPrice_as(String)"
});
formatter.result({
  "duration": 661965043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 24
    }
  ],
  "location": "SearchHomeForRentTest.i_enter_MaxPricePCM_as(String)"
});
formatter.result({
  "duration": 245910241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "houses",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_enter_PropertyType_as(String)"
});
formatter.result({
  "duration": 197610614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_BedRooms_as(String)"
});
formatter.result({
  "duration": 217082111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 19480430784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon (London Borough",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 525450309,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"siteName\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "\u003cbrowser\u003e",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 106162874,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "SearchHomeForRent",
  "description": "",
  "id": "searchhomeforsale;searchhomeforrent;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"siteName\" on \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on To Rent Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter AreaSearch as \"Victora,London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter MinPricePCM as \"400\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter MaxPricePCM as \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter PropertyType as \"farms_land\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter BedRooms as \"3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see search \"Victoria\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 3471295247,
  "status": "passed"
});
formatter.match({
  "location": "SearchHomeForRentTest.i_click_on_To_Rent_Tab()"
});
formatter.result({
  "duration": 3549931768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Victora,London",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 517629379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 24
    }
  ],
  "location": "SearchHomeForRentTest.i_enter_MinPrice_as(String)"
});
formatter.result({
  "duration": 581330953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 24
    }
  ],
  "location": "SearchHomeForRentTest.i_enter_MaxPricePCM_as(String)"
});
formatter.result({
  "duration": 294111081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "farms_land",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_enter_PropertyType_as(String)"
});
formatter.result({
  "duration": 287471331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_BedRooms_as(String)"
});
formatter.result({
  "duration": 200583662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 1840575006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Victoria",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 5281550039,
  "status": "passed"
});
formatter.uri("main/resources/com/suite/features/com.suite.SearchHomeForSale.feature");
formatter.feature({
  "line": 1,
  "name": "SearchHomeForSale",
  "description": "    User should be able to search for house to buy by enter\r\n    Area or Psot code into the search box, enter minimum price  maximum price \r\n    Type of properties,  and Tpes of Bed rooms.",
  "id": "searchhomeforsale",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "SearchHomeForSale",
  "description": "",
  "id": "searchhomeforsale;searchhomeforsale",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"siteName\" on \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter AreaSearch as \"\u003carea\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter MinPrice as \"\u003cMinAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter MaxPrice as \"\u003cMaxAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter PropertyType as \"\u003ctype\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter BedRooms as \"\u003cRoom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see search \"\u003creturnResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "searchhomeforsale;searchhomeforsale;",
  "rows": [
    {
      "cells": [
        "browser",
        "area",
        "MinAmount",
        "MaxAmount",
        "type",
        "Room",
        "returnResult"
      ],
      "line": 19,
      "id": "searchhomeforsale;searchhomeforsale;;1"
    },
    {
      "cells": [
        "Chrome",
        "Croydon",
        "10000",
        "50000",
        "flats",
        "2",
        "Croydon (London Borough)"
      ],
      "line": 20,
      "id": "searchhomeforsale;searchhomeforsale;;2"
    },
    {
      "cells": [
        "",
        "Croydon",
        "180000",
        "2000000",
        "houses",
        "5",
        "Croydon (London Borough"
      ],
      "line": 21,
      "id": "searchhomeforsale;searchhomeforsale;;3"
    },
    {
      "cells": [
        "",
        "Victora,London",
        "50000",
        "550000",
        "farms_land",
        "3",
        "Victoria"
      ],
      "line": 22,
      "id": "searchhomeforsale;searchhomeforsale;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "SearchHomeForSale",
  "description": "",
  "id": "searchhomeforsale;searchhomeforsale;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"siteName\" on \"Chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter AreaSearch as \"Croydon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter MinPrice as \"10000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter MaxPrice as \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter PropertyType as \"flats\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter BedRooms as \"2\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see search \"Croydon (London Borough)\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "Chrome",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 1797442717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 420647373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_MinPrice_as(String)"
});
formatter.result({
  "duration": 611697780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_MaxPrice_as(String)"
});
formatter.result({
  "duration": 183313725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "flats",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_enter_PropertyType_as(String)"
});
formatter.result({
  "duration": 166553125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_BedRooms_as(String)"
});
formatter.result({
  "duration": 164266889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 7753619767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon (London Borough)",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 235788108,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "SearchHomeForSale",
  "description": "",
  "id": "searchhomeforsale;searchhomeforsale;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"siteName\" on \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter AreaSearch as \"Croydon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter MinPrice as \"180000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter MaxPrice as \"2000000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter PropertyType as \"houses\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter BedRooms as \"5\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see search \"Croydon (London Borough\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 2518985896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 393189873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180000",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_MinPrice_as(String)"
});
formatter.result({
  "duration": 714204216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000000",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_MaxPrice_as(String)"
});
formatter.result({
  "duration": 248785357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "houses",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_enter_PropertyType_as(String)"
});
formatter.result({
  "duration": 306636628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_BedRooms_as(String)"
});
formatter.result({
  "duration": 160273032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 7597102390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Croydon (London Borough",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 698837766,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "SearchHomeForSale",
  "description": "",
  "id": "searchhomeforsale;searchhomeforsale;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SearchSales"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"siteName\" on \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter AreaSearch as \"Victora,London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter MinPrice as \"50000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter MaxPrice as \"550000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter PropertyType as \"farms_land\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter BedRooms as \"3\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on \"SearchButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see search \"Victoria\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "siteName",
      "offset": 15
    },
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "StepDefinition.i_navigate_to_on(String,String)"
});
formatter.result({
  "duration": 195021598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Victora,London",
      "offset": 23
    }
  ],
  "location": "StepDefinition.i_enter_AreaSearch_as(String)"
});
formatter.result({
  "duration": 3464290709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_MinPrice_as(String)"
});
formatter.result({
  "duration": 671240849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "550000",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_MaxPrice_as(String)"
});
formatter.result({
  "duration": 211919476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "farms_land",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_enter_PropertyType_as(String)"
});
formatter.result({
  "duration": 154039980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_enter_BedRooms_as(String)"
});
formatter.result({
  "duration": 270166327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SearchButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 2204111377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Victoria",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_should_see_search(String)"
});
formatter.result({
  "duration": 5329996353,
  "status": "passed"
});
});