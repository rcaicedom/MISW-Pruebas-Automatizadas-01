import {loginLatest} from "../../utils";
import {faker} from '@faker-js/faker'

describe('Delete public tag flow', () => {
    it('successfully create', () => {
      const tagName = faker.animal.cat();
      const color = faker.color.rgb().replace('#','');

      loginLatest();
      cy.screenshot('screenshot_semana_6/delete_public_tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_public_tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-internal-tags');

      cy.wait(500)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-new-tags');

      cy.wait(500)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/delete_public_tag/input-delete-tags');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type(color + '{enter}');
      cy.screenshot('screenshot_semana_6/delete_public_tag/input-color-tags');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-save-tags');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_public_tag/redirect-tags2');
      
      cy.wait(500)
      cy.contains('Public tags').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-public-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName).click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/search-tags');

      cy.wait(500)
      cy.contains('Delete tag').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-delete-tags');

      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').contains('Delete').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/delete-click-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').not(tagName);
      cy.screenshot('screenshot_semana_6/delete_public_tag/confirm-deletion-tags');
    });

    it('Do not accept delete tag', () => {
      const tagName = faker.animal.cat();
      const color = faker.color.rgb().replace('#','');

      loginLatest();
      cy.screenshot('screenshot_semana_6/delete_public_tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_public_tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-internal-tags');

      cy.wait(500)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-new-tags');

      cy.wait(500)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/delete_public_tag/input-delete-tags');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type(color + '{enter}');
      cy.screenshot('screenshot_semana_6/delete_public_tag/input-color-tags');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-save-tags');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_public_tag/redirect-tags2');
      
      cy.wait(500)
      cy.contains('Public tags').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-public-tags');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName).click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/search-tags');

      cy.wait(500)
      cy.contains('Delete tag').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/click-delete-tags');

      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').contains('Cancel').click();
      cy.screenshot('screenshot_semana_6/delete_public_tag/delete-click-tags');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_intern_tag/redirect-tags3');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName);
    })
})