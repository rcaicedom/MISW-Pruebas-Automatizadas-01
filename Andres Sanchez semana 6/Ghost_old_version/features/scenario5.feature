Feature: 05
@user1 @web
Scenario: As a user I should save draft and publish page
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I take a screenshot old version "esc-01" "05"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I take a screenshot old version "esc-02" "05"
  And I wait for 2 seconds
  And I click sign up
  And I take a screenshot old version "esc-03" "05"
  And I wait for 2 seconds 
  And I click pages
  And I take a screenshot old version "esc-04" "05"
  And I wait for 2 seconds 
  And I click add new page
  And I take a screenshot old version "esc-05" "05"
  And I wait for 3 seconds
  And I enter page title "Test title"
  And I take a screenshot old version "esc-06" "05"
  And I wait for 2 seconds
  And I return to pages list
  And I take a screenshot old version "esc-07" "05"
  And I wait for 3 seconds 
  And I return to pages list
  And I take a screenshot old version "esc-08" "05"
  And I wait for 2 seconds 
  And Open all pages drop down
  And I take a screenshot old version "esc-09" "05"
  And I wait for 2 seconds
  And I click draft pages
  And I take a screenshot old version "esc-10" "05"
  And I wait for 2 seconds
  And I click page with title "Test title"
  And I take a screenshot old version "esc-11" "05"
  And I wait for 2 seconds
  And I click page body
  And I take a screenshot old version "esc-12" "05"
  And I wait for 2 seconds
  And I enter page text "Test text"
  And I take a screenshot old version "esc-13" "05"
  And I wait for 2 seconds
  And I click publish page
  And I take a screenshot old version "esc-14" "05"
  And I wait for 2 seconds
  And I click publish page right now
  And I take a screenshot old version "esc-15" "05"
  And I wait for 2 seconds
  And I return to pages list
  And I take a screenshot old version "esc-16" "05"
  And I wait for 2 seconds
  And Open all pages drop down
  And I take a screenshot old version "esc-17" "05"
  And I wait for 1 seconds
  And click published pages
  And I take a screenshot old version "esc-18" "05"
  
  