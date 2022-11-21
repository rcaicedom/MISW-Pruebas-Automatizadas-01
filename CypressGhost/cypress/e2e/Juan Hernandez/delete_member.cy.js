import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/delete_member/login');

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/members/new");
      cy.screenshot('screenshot_semana_6/delete_member/visit_member');
      
      cy.wait(500)
      cy.get('input[name=name]').type("Automated deleted");
      cy.screenshot('screenshot_semana_6/delete_member/create-member-delete');

      cy.wait(500)
      cy.get('input[name=email]').type("automated.deleted@uniandes.edu.co");
      cy.screenshot('screenshot_semana_6/delete_member/input-email-member');
      
      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/delete_member/click-save');

      cy.wait(500)
      cy.visit("http://localhost:2368/ghost/#/members");
      cy.screenshot('screenshot_semana_6/delete_member/redirect-member');

      cy.wait(500)
      cy.get('table').contains('Automated deleted').click();
      cy.screenshot('screenshot_semana_6/delete_member/click-delete-member');

      cy.wait(500)
      cy.contains('Actions').click();
      cy.screenshot('screenshot_semana_6/delete_member/click-actions-member');
      
      cy.wait(500)
      cy.contains('Delete member').click();
      cy.screenshot('screenshot_semana_6/delete_member/click-delete-member');

      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').get('div .modal-footer').contains('Delete member').click();
      cy.screenshot('screenshot_semana_6/delete_member/click-confirm-delete');


      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').get('div .modal-footer').contains('Leave').click();
      cy.screenshot('screenshot_semana_6/delete_member/clicl-leave');

      cy.wait(500)
      cy.get('table').not('Automated deleted');
      cy.screenshot('screenshot_semana_6/delete_member/confirm-deletion');
    })
})