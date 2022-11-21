import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();
      cy.screenshot('screenshot_semana_6/edit_public_tags/login');

      //first create the tag
      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/edit_public_tags/redirect-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').first().click();
      cy.screenshot('screenshot_semana_6/edit_public_tags/search-tag');

      cy.wait(500)
      cy.get('input[name=name]').clear();
      cy.get('input[name=name]').type("aut-public-modified");
      cy.screenshot('screenshot_semana_6/edit_public_tags/modified_input');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').clear();
      cy.get('input[name=accent-color].gh-input').type('00c853{enter}');
      cy.screenshot('screenshot_semana_6/edit_public_tags/click_color');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/edit_public_tags/click-save');
      cy.contains('Saved').click();
      cy.screenshot('screenshot_semana_6/edit_public_tags/click-saved');

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/edit_public_tags/redirect-settings');
      
      cy.wait(500)
      cy.contains('Public tags').click();
      cy.screenshot('screenshot_semana_6/edit_public_tags/redirect-public-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains('aut-public-modified');
      cy.screenshot('screenshot_semana_6/edit_public_tags/confirme-edit');
    })
})