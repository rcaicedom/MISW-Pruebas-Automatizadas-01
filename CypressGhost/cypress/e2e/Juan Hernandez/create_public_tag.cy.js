import {loginLatest} from "../../utils";
import {faker} from '@faker-js/faker'


describe('The create public tag page', () => {
    it('successfully create', () => {
      const tagName = faker.name.jobArea();
      const colorTag = faker.color.rgb().replace("#","");

      loginLatest();
      cy.screenshot('screenshot_semana_6/create_public_tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags/new");
      cy.screenshot('screenshot_semana_6/create_public_tag/redirect-tags');

      cy.wait(1000)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/create_public_tag/click-new-tag');

      cy.wait(1000)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/create_public_tag/input-name');

      cy.wait(1000)
      cy.get('input[name=accent-color].gh-input').type(colorTag + '{enter}');
      cy.screenshot('screenshot_semana_6/create_public_tag/input-color');

      cy.wait(1000)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/create_public_tag/click-save');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags");
      cy.screenshot('screenshot_semana_6/create_public_tag/redirect-tags');

      cy.wait(1000)
      cy.get('ol').should('have.class', 'tags-list').contains(tagName);
      cy.screenshot('screenshot_semana_6/create_public_tag/review-new-tag');
    })

    it('Unsuccessfully create', () => {
      const tagName = faker.name.jobArea();
      const colorTag = faker.color.cmyk();

      loginLatest();
      cy.screenshot('screenshot_semana_6/create_public_tag/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/tags/new");
      cy.screenshot('screenshot_semana_6/create_public_tag/redirect-tags');

      cy.wait(1000)
      cy.contains('New tag').click();
      cy.screenshot('screenshot_semana_6/create_public_tag/click-new-tag');

      cy.wait(1000)
      cy.get('input[name=name]').type(tagName);
      cy.screenshot('screenshot_semana_6/create_public_tag/input-name');

      cy.wait(1000)
      cy.get('input[name=accent-color].gh-input').type(colorTag + '{enter}');
      cy.screenshot('screenshot_semana_6/create_public_tag/input-color');

      cy.wait(1000)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/intern-tag/click-save');

      cy.wait(1000)
      cy.contains('Retry');
    })
})