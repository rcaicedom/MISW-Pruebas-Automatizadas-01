Feature: Feature 16

@user1 @web
Scenario: Edit tag public
  Given I navigate to page "http://localhost:2370/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click Tags
  And I click public tag
  And I click edit tag
  And I enter tagdesc "modificando tag2"
  And I click save tag
  And I click Tags
  