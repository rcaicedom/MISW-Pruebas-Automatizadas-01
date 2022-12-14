Feature: 05
@user1 @web
Scenario: As a user I should save draft and publish page
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
  And I click page with title "Test title"
  And I wait for 2 seconds
  And I click page body
  And I wait for 2 seconds
  And I enter page text "Test text"
  And I wait for 2 seconds
  And I click publish page
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click publish page right now
  And I wait for 2 seconds
  And I return to editor
  And I wait for 3 seconds
  And I return to pages list
  And I wait for 2 seconds
  And Open all pages drop down
  And I wait for 1 seconds
  And click published pages
  And I wait for 2 seconds