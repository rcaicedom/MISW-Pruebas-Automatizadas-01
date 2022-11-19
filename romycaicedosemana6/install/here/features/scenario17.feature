Feature: Feature 17

@user1 @web
Scenario: Delete tag
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click Tags
  And I click public tag
  And I click edit tag
  And I click delete tag
  And I click confirm delete tag
  