import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      
      cy.wait(500)
      cy.contains('Internal tags').click();

      cy.wait(500)
      cy.contains('New tag').click();

      cy.wait(500)
      cy.get('input[name=name]').type("aut-public-delete");

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type('00c853{enter}');

      cy.wait(500)
      cy.contains('Save').click();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      
      cy.wait(500)
      cy.contains('Public tags').click();

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains('aut-public-delete').click();

      cy.wait(500)
      cy.contains('Delete tag').click();

      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').contains('Delete').click();

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').not('aut-public-delete');
    })
})