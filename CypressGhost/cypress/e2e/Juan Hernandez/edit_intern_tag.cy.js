import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/edit_intern_tag/login');

      //first create the tag
      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/edit_intern_tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/edit_intern_tag/click-internal-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').first().click();
      cy.screenshot('screenshot_semana_6/edit_intern_tag/search-tags');

      cy.wait(500)
      cy.get('input[name=name]').clear();
      cy.get('input[name=name]').type("#aut-internal-modified");
      cy.screenshot('screenshot_semana_6/edit_intern_tag/input-name');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').clear();
      cy.get('input[name=accent-color].gh-input').type('d50000{enter}');
      cy.screenshot('screenshot_semana_6/edit_intern_tag/input-color');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/edit_intern_tag/click-save');

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/edit_intern_tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/edit_intern_tag/click-internal-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains('#aut-internal-modified');
      cy.screenshot('screenshot_semana_6/edit_intern_tag/search-tag');

    })
})