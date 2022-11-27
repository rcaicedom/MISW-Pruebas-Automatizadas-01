Feature: Feature 12

@user1 @web
Scenario: Edit profile
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click profile
  And I click your profile
  And I enter username "asanchez"
  And I click save profile
  