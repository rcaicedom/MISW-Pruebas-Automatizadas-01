Feature: 02
@user1 @web
Scenario: As a user I should create and publish post on site
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I take a screenshot old version "esc-01" "02"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I take a screenshot old version "esc-02" "02"
  And I wait for 2 seconds
  And I click sign up
  And I take a screenshot old version "esc-03" "02"
  And I wait for 2 seconds 
  And I click posts
  And I take a screenshot old version "esc-04" "02"
  And I wait for 2 seconds 
  And I click add new post
  And I take a screenshot old version "esc-05" "02"
  And I wait for 3 seconds
  And I enter post title "Test title"
  And I take a screenshot old version "esc-06" "02"
  And I wait for 2 seconds
  And I click post body
  And I take a screenshot old version "esc-07" "02"
  And I wait for 1 seconds 
  And I enter post text "test dialog"
  And I take a screenshot old version "esc-08" "02"
  And I wait for 2 seconds
  And I click publish post
  And I take a screenshot old version "esc-09" "02"
  And I wait for 2 seconds
  And I click publish post right now
  And I take a screenshot old version "esc-10" "02"
  And I wait for 2 seconds
  And I click the image to go the site
  And I take a screenshot old version "esc-11" "02"