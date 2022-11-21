import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/edit_title/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/settings");
      cy.screenshot('screenshot_semana_6/edit_title/redirect-settings');


      cy.wait(500)
      cy.contains('General').click();
      cy.screenshot('screenshot_semana_6/edit_title/click-general');

      cy.wait(500)
      cy.contains('Expand').first().click();
      cy.screenshot('screenshot_semana_6/edit_title/click-expand');

      cy.get('div').contains('The name of your site').get('input').first().clear();
      cy.get('div').contains('The name of your site').get('input').first().type('My new ghost title');
      cy.screenshot('screenshot_semana_6/edit_title/change-input');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/edit_title/click-save');
      cy.contains('Saved')
      cy.screenshot('screenshot_semana_6/edit_title/status-saved');
    })
})