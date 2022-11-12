Feature: Feature 20

@user1 @web
Scenario: Login member creation and success check sign out
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click members
  And I click on a member
  And I click on member config
  And I click delete member
  And I click delete member confirm
  And I go back to members
 
  