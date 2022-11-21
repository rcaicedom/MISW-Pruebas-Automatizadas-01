import {testLogin} from "../../utils";

describe('The create public tag page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/create_public_tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags/new");
      cy.screenshot('screenshot_semana_6/create_public_tag/redirect-tags');

      cy.wait(500)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/create_public_tag/click-new-tag');

      cy.wait(500)
      cy.get('input[name=name]').type("Aut-pub");
      cy.screenshot('screenshot_semana_6/create_public_tag/input-name');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type('d50000{enter}');
      cy.screenshot('screenshot_semana_6/create_public_tag/input-color');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/create_public_tag/click-save');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/create_public_tag/redirect-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains('Aut-pub');
      cy.screenshot('screenshot_semana_6/create_public_tag/review-new-tag');
    })
})