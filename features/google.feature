@run
Feature: Assert Google Home Page

  Scenario: Google Home Page
    Given I am on google page with title 'Google'
    When I perform a search with text 'this is a test'
    Then element with locator '.hdtb-mitem.hdtb-msel.hdtb-imb' is displayed