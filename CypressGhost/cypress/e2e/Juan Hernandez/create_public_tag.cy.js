import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags/new");

      cy.wait(500)
      cy.contains('New tag').click();

      cy.wait(500)
      cy.get('input[name=name]').type("Aut-pub");

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type('d50000{enter}');

      cy.wait(500)
      cy.contains('Save').click();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains('Aut-pub');
    })
})