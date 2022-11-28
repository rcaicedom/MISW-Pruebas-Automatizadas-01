Feature: Forms with ramdom data pool

  I want to validate user input on the forms
    
  @focus
  Scenario: Login with wrong short format email and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put wrong email on the "member_email" element
    And I put name on the "member_name" element
    And I click the "save_member" element
    Then I see "Invalid Email." on the screen
    
@focus
  Scenario: Login with wrong long format email and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put wrong long email on the "member_email" element
    And I put name on the "member_name" element
    And I click the "save_member" element
    Then I see "Invalid Email." on the screen
    
@focus
  Scenario: Login with invalid long name and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put long name on the "member_name" element
    And I click the "save_member" element
    Then I see "Name cannot be longer than 191 characters." on the screen
    
@focus
  Scenario: Login with invalid long note and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I put long note on the "member_note" element
    And I click the "save_member" element
    Then I see "Note is too long." on the screen
    
@focus
  Scenario: Login with extact note and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I put extact note on the "member_note" element
    And I click the "save_member" element
    Then I see "Created" on the screen
    
@focus
  Scenario: Login with extact note and correct other info and edit info correctly
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I put extact note on the "member_note" element
    And I click the "save_member" element
    And I go to the members page
    And I click the "edit_member" element
    And I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I click the "save_member" element
    Then I see "Invalid Email." on the screen
    
@focus
  Scenario: Login with wrong note and correct other info and edit info correctly
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I put extact note on the "member_note" element
    And I click the "save_member" element
    And I go to the members page
    And I click the "edit_member" element
    And I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I put long note on the "member_note" element
    And I click the "save_member" element
    Then I see "Note is too long." on the screen
    
@focus
  Scenario: Login with wrong note and correct other info and edit info correctly
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I put extact note on the "member_note" element
    And I click the "save_member" element
    And I go to the members page
    And I click the "edit_member" element
    And I put wrong email on the "member_email" element
    And I put name on the "member_name" element
    And I click the "save_member" element
    Then I see "Invalid Email." on the screen
    
@focus
  Scenario: Login with wrong note and correct other info and edit info correctly
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put name on the "member_name" element
    And I put extact note on the "member_note" element
    And I click the "save_member" element
    And I go to the members page
    And I click the "edit_member" element
    And I put ok email on the "member_email" element
    And I put long name on the "member_name" element
    And I click the "save_member" element
    Then I see "Name cannot be longer than 191 characters." on the screen
 @focus
  Scenario: Login and post with long  format title and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the post page
    And I click the "new_post" element
    When I put wrong title on the "post_title" element
    And I put ok body on the "post_body" element
    And I click the "post_publish" element
    Then I see "Validation failed: Title cannot be longer than 255 characters." on the screen


@focus
  Scenario: Login and post with ok format title and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the post page
    And I click the "new_post" element
    When I put ok title on the "post_title" element
    And I put ok body on the "post_body" element
    And I click the "post_publish" element
    Then I see "Ready, set, publish." on the screen

@focus
  Scenario: Login and post with ok format title and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the post page
    And I click the "new_post" element
    When I put ok title on the "post_title" element
    And I put ok body on the "post_body" element
    And I click the "post_publish" element
    And I click the "post_continue" element
    And I click the "post_finalpublish" element
    Then I see "Boom. It’s out there" on the screen
    
@focus
  Scenario: Login and post with wrong short format title and no body info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the post page
    And I click the "new_post" element
    When I put wrong short title on the "post_title" element
    And I click the "post_publish" element
    And I click the "post_continue" element
    And I click the "post_finalpublish" element
    Then I see "Begin" on the screen

@focus
  Scenario: Login and post with long  format title and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the post page
    And I click the "new_post" element
    When I put wrong title 256 on the "post_title" element
    And I put ok body on the "post_body" element
    And I click the "post_publish" element
    Then I see "Validation failed: Title cannot be longer than 255 characters." on the screen
    
@focus
  Scenario: Login and post with exact  format title and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the post page
    And I click the "new_post" element
    When I put wrong title 255 on the "post_title" element
    And I put ok body on the "post_body" element
    And I click the "post_publish" element
    Then I see "Ready, set, publish." on the screen

@focus
  Scenario: Login with  long 191 name and correct other info
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the members page
    And I click the "new_member" element
    When I put ok email on the "member_email" element
    And I put longexact name on the "member_name" element
    And I click the "save_member" element
    Then I see "Saved" on the screen