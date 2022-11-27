Feature: 09
@user1 @web
Scenario: Create a page draft
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I wait for 2 seconds
  And I click sign up
  And I wait for 2 seconds 
  And I click pages
  And I wait for 2 seconds 
  And I click add new page
  And I wait for 3 seconds
  And I enter page title "Test title"
  And I wait for 2 seconds
  And I return to pages list
  And I wait for 3 seconds 
  And I return to pages list
  And I wait for 2 seconds 
  And Open all pages drop down
  And I wait for 2 seconds
  And I click draft pages
  And I wait for 2 seconds