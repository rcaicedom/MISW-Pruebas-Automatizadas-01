import {testLogin} from "../../utils";

describe('The create member page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/create_member/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/members/new");
      cy.screenshot('screenshot_semana_6/create_member/create-member');
      
      var x = Math.floor(Math.random()*10000);
      cy.wait(500)
      cy.get('input[name=name]').type("Automated user" + x);
      cy.screenshot('screenshot_semana_6/create_member/input-user');

      cy.wait(500)
      cy.get('input[name=email]').type("automated." + x + "@uniandes.edu.co");
      cy.screenshot('screenshot_semana_6/create_member/input-email');
      
      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/create_member/click-save');
      cy.contains('Saved').click();
      cy.screenshot('screenshot_semana_6/create_member/saved-status');


      cy.wait(500)
      cy.visit("http://localhost:3001/ghost/#/members");
      cy.screenshot('screenshot_semana_6/create_member/visit-members');
    })
})