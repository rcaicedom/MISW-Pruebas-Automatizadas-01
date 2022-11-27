Feature: Feature 20

@user1 @web
Scenario: Login member creation and success check sign out
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click staff
  And I click delete member
  And I go back to staff
 
  