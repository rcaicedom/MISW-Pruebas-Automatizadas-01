Feature: Scenario 11

@user1 @web

Scenario: Login member creation and success check sign out
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  When I enter email "r.caicedom@uniandes.edu.co"
  When I enter password "testpruebas"
  And I click sign up
  When I click staff
  When I click invite people
  And I enter member email "andres@gmail.com"
  And I click save member
  And I go back to staff