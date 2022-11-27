import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/navigation/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/settings");
      cy.screenshot('screenshot_semana_6/navigation/redirect-settings');

      cy.wait(500)
      cy.contains('Navigation').click();
      cy.screenshot('screenshot_semana_6/navigation/navigation-click');

      cy.wait(500)
      cy.get('#settings-navigation').get('input').first().clear();
      cy.get('#settings-navigation').get('input').first().type('Index');
      cy.screenshot('screenshot_semana_6/navigation/change-input');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/navigation/click-save');
      cy.contains('Saved')
      cy.screenshot('screenshot_semana_6/navigation/saved-status');
    })
})