Feature: Feature 14

@user1 @web
Scenario: Create public tag and list validate
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click Tags
  And I click public tag
  And I click new tag
  And I enter tagname "ejemplo2"
  And I enter tagdesc "ejemplo2"
  And I click save tag
  And I click Tags
  