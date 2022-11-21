Feature: 01
@user1 @web
Scenario: s a user I should create and publish post
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I take a screenshot new version "esc-01" "01"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I take a screenshot new version "esc-02" "01"
  And I wait for 2 seconds
  And I click sign up
  And I take a screenshot new version "esc-3" "01"
  And I wait for 2 seconds 
  And I click posts
  And I take a screenshot new version "esc-04" "01"
  And I wait for 2 seconds 
  And I click add new post
  And I take a screenshot new version "esc-05" "01"
  And I wait for 3 seconds
  And I enter post title "Test title"
  And I take a screenshot new version "esc-06" "01"
  And I wait for 2 seconds
  And I click post body
  And I take a screenshot new version "esc-07" "01"
  And I wait for 1 seconds 
  And I enter post text "test dialog"
  And I take a screenshot new version "esc-08" "01"
  And I wait for 2 seconds
  And I click publish post
  And I wait for 2 seconds
  And I take a screenshot new version "esc-09" "01"
  And I click continue
  And I wait for 2 seconds
  And I click publish post right now
  And I take a screenshot new version "esc-10" "01"
  And I wait for 2 seconds
  And I return to editor
  And I wait for 2 seconds
  And I return to posts list
  And I take a screenshot new version "esc-11" "01"
  And I wait for 2 seconds
  And Open all posts drop down
  And I take a screenshot new version "esc-12" "01"
  And I wait for 1 seconds
  And click published posts
  And I take a screenshot new version "esc-13" "01"
  