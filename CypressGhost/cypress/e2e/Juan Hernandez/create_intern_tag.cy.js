import {loginLatest} from "../../utils";
import {faker} from '@faker-js/faker'


describe('Create intern Tag', () => {
    it('successfully create', () => {
      let tagName = '#' + faker.name.firstName();
      let colorTag = faker.color.rgb().replace("#","");

      loginLatest();
      cy.screenshot('screenshot_semana_6/intern-tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/intern-tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/intern-tag/click-intern-tag');

      cy.wait(500)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/intern-tag/new-tag');

      cy.wait(500)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/intern-tag/input-name');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type(colorTag + '{enter}');
      cy.screenshot('screenshot_semana_6/intern-tag/input-color');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/intern-tag/click-save');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/intern-tag/redirect-tags-2');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/intern-tag/click-intern-tag-2');

      cy.wait(500)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName);
      cy.screenshot('screenshot_semana_6/intern-tag/verify-elements');
    })

    it('unsuccessfully create bad color input', () => {
      let tagName = '#' + faker.name.firstName();
      let colorTag = faker.color.cmyk();

      loginLatest();
      cy.screenshot('screenshot_semana_6/intern-tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/intern-tag/redirect-tags');
      
      cy.wait(500)
      cy.contains('Internal tags').click();
      cy.screenshot('screenshot_semana_6/intern-tag/click-intern-tag');

      cy.wait(500)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/intern-tag/new-tag');

      cy.wait(500)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/intern-tag/input-name');

      cy.wait(500)
      cy.get('input[name=accent-color].gh-input').type(colorTag + '{enter}');
      cy.screenshot('screenshot_semana_6/intern-tag/input-color');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/intern-tag/click-save');

      cy.wait(500)
      cy.contains('Retry');
    })

})