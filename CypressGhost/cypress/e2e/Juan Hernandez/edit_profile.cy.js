import { faker } from "@faker-js/faker";
import { loginLatest } from "../../utils";

describe("Edit profile", () => {
  it("successfully edit", () => {
    loginLatest();
    const name = faker.name.fullName();
    cy.screenshot("screenshot_semana_6/edit_profile/login");

    cy.wait(1000);
    cy.get("div .pe-all").first().click();
    cy.screenshot("screenshot_semana_6/edit_profile/search-option");

    cy.wait(500);
    cy.contains("Your profile").click();
    cy.screenshot("screenshot_semana_6/edit_profile/click-profile");

    cy.wait(500);
    cy.get("#user-slug").type(name);
    cy.screenshot("screenshot_semana_6/edit_profile/modified-user");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/edit_profile/click-save");
    cy.contains("Saved").click();
    cy.screenshot("screenshot_semana_6/edit_profile/saved-status");
  });

  it("Unsuccessfully edit with bad email", () => {
    loginLatest();
    const name = faker.name.fullName();
    cy.screenshot("screenshot_semana_6/edit_profile/login");

    cy.wait(1000);
    cy.get("div .pe-all").first().click();
    cy.screenshot("screenshot_semana_6/edit_profile/search-option");

    cy.wait(500);
    cy.contains("Your profile").click();
    cy.screenshot("screenshot_semana_6/edit_profile/click-profile");

    cy.wait(500);
    cy.get("#user-slug").type(name);
    cy.screenshot("screenshot_semana_6/edit_profile/modified-user");

    cy.wait(500);
    cy.get("#user-email").clear();
    cy.get("#user-email").type(name);
    cy.screenshot("screenshot_semana_6/edit_profile/modified-user");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/edit_profile/click-save");

    cy.wait(500);
    cy.contains("Retry");
  });

  it("Unsuccessfully edit leaving process", () => {
    loginLatest();
    const name = faker.name.fullName();
    const email = faker.internet.email();
    cy.screenshot("screenshot_semana_6/edit_profile/login");

    cy.wait(1000);
    cy.get("div .pe-all").first().click();
    cy.screenshot("screenshot_semana_6/edit_profile/search-option");

    cy.wait(500);
    cy.contains("Your profile").click();
    cy.screenshot("screenshot_semana_6/edit_profile/click-profile");

    cy.wait(500);
    cy.get("#user-slug").clear();
    cy.get("#user-slug").type(name);
    cy.screenshot("screenshot_semana_6/edit_profile/modified-user");

    cy.wait(500);
    cy.get("#user-email").clear();
    cy.get("#user-email").type(email);

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/dashboard");

    cy.wait(500);
    cy.once("uncaught:exception", () => false);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Leave")
      .click();
    cy.screenshot("screenshot_semana_6/edit_profile/clicl-leave");
  });
});
