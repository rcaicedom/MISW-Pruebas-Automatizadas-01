Feature: Feature 19

@user1 @web
Scenario: Edit setting nevigation and save
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click settings
  And I click navigation
  And I enter about "About us."
  And I click save navigation