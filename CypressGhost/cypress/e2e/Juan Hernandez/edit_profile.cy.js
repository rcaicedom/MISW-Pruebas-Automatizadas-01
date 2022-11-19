import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      cy.wait(1000)
      cy.get('div .pe-all').first().click();

      cy.wait(500)
      cy.contains('Your profile').click();
      
      cy.wait(500)
      cy.get('#user-slug').type("Automated user test modified");

      cy.wait(500)
      cy.contains('Save').click();
      cy.contains('Saved').click();

    })
})