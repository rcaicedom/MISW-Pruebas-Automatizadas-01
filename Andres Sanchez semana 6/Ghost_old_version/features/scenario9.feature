Feature: 09
@user1 @web
Scenario: Create a page draft
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I take a screenshot old version "esc-01" "09"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I take a screenshot old version "esc-02" "09"
  And I wait for 2 seconds
  And I click sign up
  And I take a screenshot old version "esc-03" "09"
  And I wait for 2 seconds 
  And I click pages
  And I take a screenshot old version "esc-04" "09"
  And I wait for 2 seconds 
  And I click add new page
  And I take a screenshot old version "esc-05" "09"
  And I wait for 3 seconds
  And I enter page title "Test title"
  And I take a screenshot old version "esc-06" "09"
  And I wait for 2 seconds
  And I return to pages list
  And I take a screenshot old version "esc-07" "09"
  And I wait for 3 seconds 
  And I return to pages list
  And I take a screenshot old version "esc-08" "09"
  And I wait for 2 seconds 
  And Open all pages drop down
  And I take a screenshot old version "esc-09" "09"
  And I wait for 2 seconds
  And I click draft pages
  And I take a screenshot old version "esc-10" "09"