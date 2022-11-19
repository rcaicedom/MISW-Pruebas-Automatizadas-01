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
      cy.get('input[name=name]').type("#aut-int");

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type('00c853{enter}');

      cy.wait(500)
      cy.contains('Save').click();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      
      cy.wait(500)
      cy.contains('Internal tags').click();

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains('#aut-int');
    })
})