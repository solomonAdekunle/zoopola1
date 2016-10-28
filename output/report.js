$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com.suite.HousePriceValuation.feature");
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
  "duration": 8900033827,
  "status": "passed"
});
formatter.match({
  "location": "HousePriceValuationTest.i_click_on_To_Rent_Tab()"
});
formatter.result({
  "duration": 1411445978,
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
  "duration": 255709924,
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
  "duration": 1552560127,
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
  "duration": 5258895517,
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
  "duration": 5780038070,
  "status": "passed"
});
formatter.match({
  "location": "HousePriceValuationTest.i_click_on_To_Rent_Tab()"
});
formatter.result({
  "duration": 627096305,
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
  "duration": 643055910,
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
  "duration": 297994604,
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
  "duration": 5031227695,
  "status": "passed"
});
});