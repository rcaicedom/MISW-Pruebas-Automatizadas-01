Feature: Feature 13

@user1 @web
Scenario: Create internal tag and list validate
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I enter email "r.caicedom@uniandes.edu.co"
  And I enter password "testpruebas"
  And I click sign up
  And I click Tags
  And I click internal tag
  And I click new tag
  And I enter tagname "#ejemplo"
  And I enter tagdesc "ejemplo"
  And I click save tag
  And I click Tags
  