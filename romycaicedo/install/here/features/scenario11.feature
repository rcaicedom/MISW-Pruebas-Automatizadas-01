Feature: Scenario 11

@user1 @web

Scenario: Login member creation and success check sign out
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  When I enter email "r.caicedom@uniandes.edu.co"
  When I enter password "testpruebas"
  And I click sign up
  When I click members
  When I click add new member
  And I enter member name "Andres"
  And I enter member email "andres@gmail.com"
  And I click save member
  And I go back to members