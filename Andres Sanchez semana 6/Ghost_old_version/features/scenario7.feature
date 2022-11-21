Feature: 07
@user1 @web
Scenario: Create 2 posts, order the list by the newest and validate that that the most recen post is there
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 3 seconds
  And I enter email "a.sanchez2001@uniandes.edu.co"
  And I take a screenshot old version "esc-01" "07"
  And I wait for 2 seconds
  And I enter password "Arsenal93."
  And I take a screenshot old version "esc-02" "07"
  And I wait for 2 seconds
  And I click sign up
  And I take a screenshot old version "esc-03" "07"
  And I wait for 2 seconds 
  And I click posts
  And I take a screenshot old version "esc-04" "07"
  And I wait for 2 seconds 
  And I click add new post
  And I take a screenshot old version "esc-05" "07"
  And I wait for 3 seconds
  And I enter post title "Test title1"
  And I take a screenshot old version "esc-06" "07"
  And I wait for 2 seconds
  And I click post body
  And I take a screenshot old version "esc-07" "07"
  And I wait for 1 seconds 
  And I enter post text "test dialog1"
  And I take a screenshot old version "esc-08" "07"
  And I wait for 2 seconds
  And I click publish post
  And I take a screenshot old version "esc-09" "07"
  And I wait for 2 seconds
  And I click publish post right now
  And I take a screenshot old version "esc-10" "07"
  And I wait for 2 seconds
  And I return to posts list
  And I take a screenshot old version "esc-11" "07"
  And I wait for 2 seconds
  And I click add new post
  And I take a screenshot old version "esc-12" "07"
  And I wait for 3 seconds
  And I enter post title "Test title"
  And I take a screenshot old version "esc-13" "07"
  And I wait for 2 seconds
  And I click post body
  And I take a screenshot old version "esc-14" "07"
  And I wait for 1 seconds 
  And I enter post text "test dialog"
  And I take a screenshot old version "esc-15" "07"
  And I wait for 2 seconds
  And I click publish post
  And I take a screenshot old version "esc-16" "07"
  And I wait for 2 seconds
  And I click publish post right now
  And I take a screenshot old version "esc-17" "07"
  And I wait for 2 seconds
  And I return to posts list
  And I take a screenshot old version "esc-18" "07"
  And I wait for 2 seconds
  And I click order dropdown
  And I take a screenshot old version "esc-19" "07"
  And I wait for 2 seconds
  And I click older first
  And I take a screenshot old version "esc-20" "07"