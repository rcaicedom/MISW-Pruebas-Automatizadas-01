Feature: 05
@user1 @web
Scenario: Crear Draft post, validarlo en la lista
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I take a screenshot new version "esc-01" "06"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I take a screenshot new version "esc-02" "06"
  And I wait for 2 seconds
  And I click sign up
  And I take a screenshot new version "esc-03" "06"
  And I wait for 2 seconds 
  And I click posts
  And I take a screenshot new version "esc-04" "06"
  And I wait for 2 seconds 
  And I click add new post
  And I take a screenshot new version "esc-05" "06"
  And I wait for 3 seconds
  And I enter post title "Test title"
  And I take a screenshot new version "esc-06" "06"
  And I wait for 2 seconds
  And I return to posts list
  And I take a screenshot new version "esc-07" "06"
  And I wait for 3 seconds 
  And I return to posts list
  And I wait for 2 seconds 
  And Open all posts drop down
  And I take a screenshot new version "esc-08" "06"
  And I wait for 2 seconds
  And I click draft posts
  And I take a screenshot new version "esc-09" "06"