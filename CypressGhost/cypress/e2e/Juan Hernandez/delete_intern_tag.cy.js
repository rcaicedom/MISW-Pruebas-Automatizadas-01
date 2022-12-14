import {loginLatest} from "../../utils";
import {faker} from '@faker-js/faker'

describe('The delete intern tag page', () => {
    it('successfully delete tag', () => {
      const tagName = '#' + faker.animal.dog();
      const color = faker.color.rgb().replace('#','');

      loginLatest();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_intern_tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-internal-tags');

      cy.wait(500)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-new-tags');

      cy.wait(500)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/delete_intern_tag/input-name');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type(color + '{enter}');
      cy.screenshot('screenshot_semana_6/delete_intern_tag/input-color');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-save');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_intern_tag/redirect-tags2');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-internal-tags2');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName).click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/obtain-tag');

      cy.wait(500)
      cy.contains('Delete tag').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-delete-tags');

      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').contains('Delete').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-delete-modal-tags');


      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').not(tagName);
      cy.screenshot('screenshot_semana_6/delete_intern_tag/review-delete-tags');
    });

    it('Do not accept delete tag', () => {
      const tagName = '#' + faker.animal.dog();
      const color = faker.color.rgb().replace('#','');

      loginLatest();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_intern_tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-internal-tags');

      cy.wait(500)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-new-tags');

      cy.wait(500)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/delete_intern_tag/input-name');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type(color + '{enter}');
      cy.screenshot('screenshot_semana_6/delete_intern_tag/input-color');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-save');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_intern_tag/redirect-tags2');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-internal-tags2');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName).click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/obtain-tag');

      cy.wait(500)
      cy.contains('Delete tag').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-delete-tags');

      cy.wait(500)
      cy.once('uncaught:exception', () => false);
      cy.get('div .modal-content').contains('Cancel').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-delete-modal-tags');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/delete_intern_tag/redirect-tags3');

      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/delete_intern_tag/click-internal-tags3');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName);
    });
})