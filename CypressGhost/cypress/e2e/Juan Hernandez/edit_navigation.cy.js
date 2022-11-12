import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/settings");

      cy.wait(500)
      cy.contains('Navigation').click();

      cy.wait(500)
      cy.get('#settings-navigation').get('input').first().clear();
      cy.get('#settings-navigation').get('input').first().type('Index');

      cy.wait(500)
      cy.contains('Save').click();
      cy.contains('Saved')
    })
})