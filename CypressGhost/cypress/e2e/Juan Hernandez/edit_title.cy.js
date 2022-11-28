import { faker } from "@faker-js/faker";
import {loginLatest} from "../../utils";

describe('Edit title floe', () => {
    it('successfully edit title', () => {
      const name = 'The new web ' + faker.internet.domainName();

      loginLatest();
      cy.screenshot('screenshot_semana_6/edit_title/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/settings");
      cy.screenshot('screenshot_semana_6/edit_title/redirect-settings');

      cy.wait(500)
      cy.contains('General').click();
      cy.screenshot('screenshot_semana_6/edit_title/click-general');

      cy.wait(500)
      cy.contains('Expand').first().click();
      cy.screenshot('screenshot_semana_6/edit_title/click-expand');

      cy.get('div').contains('The name of your site').get('input').first().clear();
      cy.get('div').contains('The name of your site').get('input').first().type(name);
      cy.screenshot('screenshot_semana_6/edit_title/change-input');

      cy.wait(500)
      cy.contains('Save').click();
      cy.screenshot('screenshot_semana_6/edit_title/click-save');
      cy.contains('Saved')
      cy.screenshot('screenshot_semana_6/edit_title/status-saved');
    });

    it('Unsuccessfully edit title by leaving the process', () => {
      const name = 'The new web ' + faker.internet.domainName();

      loginLatest();
      cy.screenshot('screenshot_semana_6/edit_title/login');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/settings");
      cy.screenshot('screenshot_semana_6/edit_title/redirect-settings');

      cy.wait(500)
      cy.contains('General').click();
      cy.screenshot('screenshot_semana_6/edit_title/click-general');

      cy.wait(500)
      cy.contains('Expand').first().click();
      cy.screenshot('screenshot_semana_6/edit_title/click-expand');

      cy.get('div').contains('The name of your site').get('input').first().clear();
      cy.get('div').contains('The name of your site').get('input').first().type(name);
      cy.screenshot('screenshot_semana_6/edit_title/change-input');

      cy.wait(1000)
      cy.visit("http://localhost:3001/ghost/#/settings");
      cy.screenshot('screenshot_semana_6/edit_title/redirect-settings');

      cy.wait(500);
      cy.once("uncaught:exception", () => false);
      cy.get("div .modal-content")
        .get("div .modal-footer")
        .contains("Leave")
        .click();
      cy.screenshot("screenshot_semana_6/edit_title/click-leave");
    });
})