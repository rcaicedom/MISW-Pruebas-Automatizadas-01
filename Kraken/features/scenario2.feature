Feature: 02
@user1 @web
Scenario: As a user I should create and publish post on site
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I wait for 2 seconds
  And I click sign up
  And I wait for 2 seconds 
  And I click posts
  And I wait for 2 seconds 
  And I click add new post
  And I wait for 3 seconds
  And I enter post title "Test title"
  And I wait for 2 seconds
  And I click post body
  And I wait for 1 seconds 
  And I enter post text "test dialog"
  And I wait for 2 seconds
  And I click publish post
  And I wait for 2 seconds
  And I click continue
  And I wait for 2 seconds
  And I click publish post right now
  And I wait for 2 seconds
  And I click the image to go the site