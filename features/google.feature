@run
Feature: Assert Google Web Pages

  Scenario: Google Home Page
    Given I am on web page with title 'Google'
    When I perform a google search with text 'mail.google.com'
    Then element with locator '#rso > div:nth-child(1) > div > div > div > div > div.r > a > h3' is displayed

  Scenario: Gmail Home Page
    Given I navigate to page with url 'https://www.google.com/gmail/about/#'
    When I scroll to element with locator '.dot.loaded'
    And I click on element with locator '.dot.loaded'
    Then element with locator 'section.scroll-target.flex-container.inbox-tabs-for-gmail.active.activated > div.inbox-tabs-for-gmail__image-box > div' is displayed
    And element with locator '.inbox-tabs-for-gmail__title' has text value of 'Meet your new inbox'