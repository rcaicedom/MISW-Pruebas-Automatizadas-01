Feature: Forms with apriori pseudorandom data pool

  I want to validate user input on the forms

  @focus
  Scenario: Edit profile user website with a long string (uncontrolled)
    Given I open Ghost admin page
    And I login into the admin page
    And I click on the edit profile option
    And I put "a very long any string" on the "profile_website_input" element
    And I click the "save_profile" element
    Then I see "Website is not a valid url" on the screen

  @focus
  Scenario: Edit profile user website with a long string (controlled)
    Given I open Ghost admin page
    And I login into the admin page
    And I click on the edit profile option
    And I put "a very long string" on the "profile_website_input" element
    And I click the "save_profile" element
    Then I see "Website is not a valid url" on the screen

  @focus
  Scenario: Edit profile user website with a correct string but wrong url
    Given I open Ghost admin page
    And I login into the admin page
    And I click on the edit profile option
    And I put "a string" on the "profile_website_input" element
    And I click the "save_profile" element
    Then I see "Website is not a valid url" on the screen

  @focus
  Scenario: Edit profile user location with a correct string with starting blankspace
    Given I open Ghost admin page
    And I login into the admin page
    And I click on the edit profile option
    And I clear the field "profile_location_input"
    And I put "a string with whitespace" on the "profile_location_input" element
    And I click the "save_profile" element
    Then I see "Saved" on the screen

  @focus
  Scenario: Edit profile user location with a correct string
    Given I open Ghost admin page
    And I login into the admin page
    And I click on the edit profile option
    And I clear the field "profile_location_input"
    And I put "a string" on the "profile_location_input" element
    And I click the "save_profile" element
    Then I see "Saved" on the screen

  @focus
  Scenario: Edit profile user location with a numerical string
    Given I open Ghost admin page
    And I login into the admin page
    And I click on the edit profile option
    And I clear the field "profile_location_input"
    And I put "a number" on the "profile_location_input" element
    And I click the "save_profile" element
    Then I don't see "Saved" on the screen