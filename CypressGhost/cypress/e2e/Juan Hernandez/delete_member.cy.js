import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/members/new");
      
      cy.wait(500)
      cy.get('input[name=name]').type("Automated deleted");

      cy.wait(500)
      cy.get('input[name=email]').type("automated.deleted@uniandes.edu.co");
      
      cy.wait(500)
      cy.contains('Save').click();

      cy.wait(500)
      cy.visit("http://localhost:2368/ghost/#/members");

      cy.wait(500)
      cy.get('table').contains('Automated deleted').click();

      cy.wait(500)
      cy.contains('Actions').click();
      
      cy.wait(500)
      cy.contains('Delete member').click();

      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').get('div .modal-footer').contains('Delete member').click();


      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').get('div .modal-footer').contains('Leave').click();

      cy.wait(500)
      cy.get('table').not('Automated deleted');
    })
})