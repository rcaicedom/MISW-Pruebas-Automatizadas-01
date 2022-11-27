Feature: Feature 15

@user1 @web
Scenario: Edit tag internal
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click Tags
  And I click internal tag
  And I click edit tag
  And I enter tagdesc "modificando tag"
  And I click save tag
  And I click Tags
  