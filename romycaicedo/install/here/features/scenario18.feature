Feature: Feature 18

@user1 @web
Scenario: Edit setting general and save
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click settings
  And I click general settings
  And I click expand
  And I enter general title "Probando la app"
  And I click save general  