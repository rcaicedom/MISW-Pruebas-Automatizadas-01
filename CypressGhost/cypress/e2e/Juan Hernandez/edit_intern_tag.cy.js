import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      //first create the tag
      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      
      cy.wait(500)
      cy.contains('Internal tags').click();

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').first().click();

      cy.wait(500)
      cy.get('input[name=name]').clear();
      cy.get('input[name=name]').type("#aut-internal-modified");

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').clear();
      cy.get('input[name=accent-color].gh-input').type('d50000{enter}');

      cy.wait(500)
      cy.contains('Save').click();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      
      cy.wait(500)
      cy.contains('Internal tags').click();

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains('#aut-internal-modified');

    })
})