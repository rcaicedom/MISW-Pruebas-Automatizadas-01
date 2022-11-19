import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/settings");


      cy.wait(500)
      cy.contains('General').click();

      cy.wait(500)
      cy.contains('Expand').first().click();

      cy.get('div').contains('The name of your site').get('input').first().clear();
      cy.get('div').contains('The name of your site').get('input').first().type('My new ghost title');

      cy.wait(500)
      cy.contains('Save').click();
      cy.contains('Saved')
    })
})