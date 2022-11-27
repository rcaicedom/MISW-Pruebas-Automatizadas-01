import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/edit_profile/login');

      cy.wait(1000)
      cy.get('div .pe-all').first().click();
      cy.screenshot('screenshot_semana_6/edit_profile/search-option');

      cy.wait(500)
      cy.contains('Your profile').click();
      cy.screenshot('screenshot_semana_6/edit_profile/click-profile');
      
      cy.wait(500)
      cy.get('#user-slug').type("Automated user test modified");
      cy.screenshot('screenshot_semana_6/edit_profile/modified-user');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/edit_profile/click-save');
      cy.contains('Saved').click();
      cy.screenshot('screenshot_semana_6/edit_profile/saved-status');

    })
})