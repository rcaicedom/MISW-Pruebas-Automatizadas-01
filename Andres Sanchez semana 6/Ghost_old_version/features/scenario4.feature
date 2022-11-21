Feature: 04
@user1 @web
Scenario: As a user I should publish a new page
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I take a screenshot old version "esc-01" "04"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I take a screenshot old version "esc-02" "04"
  And I wait for 2 seconds
  And I click sign up
  And I take a screenshot old version "esc-03" "04"
  And I wait for 2 seconds 
  And I click pages
  And I take a screenshot old version "esc-04" "04"
  And I wait for 2 seconds 
  And I click add new page
  And I take a screenshot old version "esc-05" "04"
  And I wait for 3 seconds
  And I enter page title "Test title"
  And I take a screenshot old version "esc-06" "04"
  And I wait for 2 seconds
  And I click page body
  And I take a screenshot old version "esc-07" "04"
  And I wait for 1 seconds 
  And I enter page text "test dialog"
  And I take a screenshot old version "esc-08" "04"
  And I wait for 2 seconds
  And I click publish page
  And I take a screenshot old version "esc-09" "04"
  And I wait for 2 seconds
  And I click publish page right now
  And I take a screenshot old version "esc-10" "04"
  And I wait for 2 seconds
  And I return to pages list
  And I take a screenshot old version "esc-11" "04"
  And I wait for 2 seconds
  And Open all pages drop down
  And I take a screenshot old version "esc-12" "04"
  And I wait for 1 seconds
  And click published pages
  And I take a screenshot old version "esc-13" "04"