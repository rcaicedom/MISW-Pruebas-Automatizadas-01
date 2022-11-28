import { loginLatest } from "../../utils";
import { faker } from "@faker-js/faker";

describe("The posts page", () => {
  it("successfully edit intern tag", () => {
    const tagName = "#" + faker.company.name();
    const tagNameModified = "#" + faker.company.name();
    const tagColor = faker.color.rgb().replace("#", "");
    const tagColorModified = faker.color.rgb().replace("#", "");

    loginLatest();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/login");

    //first create the tag
    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags");

    cy.wait(500);
    cy.contains("Internal tags").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-internal-tags");

    cy.wait(500);
    cy.contains("New tag").click();
    cy.screenshot("screenshot_semana_6/intern-tag/new-tag");

    cy.wait(500);
    cy.get("input[name=name]").type(tagName);
    cy.screenshot("screenshot_semana_6/intern-tag/input-name");

    cy.wait(500);
    cy.get("input[name=accent-color].gh-input").type(tagColor + "{enter}");
    cy.screenshot("screenshot_semana_6/intern-tag/input-color");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/intern-tag/click-save");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags2");

    cy.wait(500);
    cy.contains("Internal tags").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-internal-tags2");

    //Second modify the tag
    cy.wait(500);
    cy.get("ol").contains(tagName).click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/search-tags");

    cy.wait(500);
    cy.get("input[name=name]").clear();
    cy.get("input[name=name]").type(tagNameModified);
    cy.screenshot("screenshot_semana_6/edit_intern_tag/input-name");

    cy.wait(500);
    cy.get("input[name=accent-color].gh-input").clear();
    cy.get("input[name=accent-color].gh-input").type(
      tagColorModified + "{enter}"
    );
    cy.screenshot("screenshot_semana_6/edit_intern_tag/input-color");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-save");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags");

    cy.wait(500);
    cy.contains("Internal tags").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-internal-tags");

    cy.wait(500);
    cy.get("ol").should("have.class", "tags-list").contains(tagNameModified);
    cy.screenshot("screenshot_semana_6/edit_intern_tag/search-tag");
  });

  it("Unsuccessfully edit intern tag", () => {
    const tagName = "#" + faker.company.name();
    const tagNameModified = "#" + faker.company.name();
    const tagColor = faker.color.rgb().replace("#", "");
    const tagColorModified = faker.color.cmyk();

    loginLatest();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/login");

    //first create the tag
    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags");

    cy.wait(500);
    cy.contains("Internal tags").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-internal-tags");

    cy.wait(500);
    cy.contains("New tag").click();
    cy.screenshot("screenshot_semana_6/intern-tag/new-tag");

    cy.wait(500);
    cy.get("input[name=name]").type(tagName);
    cy.screenshot("screenshot_semana_6/intern-tag/input-name");

    cy.wait(500);
    cy.get("input[name=accent-color].gh-input").type(tagColor + "{enter}");
    cy.screenshot("screenshot_semana_6/intern-tag/input-color");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/intern-tag/click-save");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags2");

    cy.wait(500);
    cy.contains("Internal tags").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-internal-tags2");

    //Second modify the tag
    cy.wait(500);
    cy.get("ol").contains(tagName).click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/search-tags");

    cy.wait(500);
    cy.get("input[name=name]").clear();
    cy.get("input[name=name]").type(tagNameModified);
    cy.screenshot("screenshot_semana_6/edit_intern_tag/input-name");

    cy.wait(500);
    cy.get("input[name=accent-color].gh-input").clear();
    cy.get("input[name=accent-color].gh-input").type(
      tagColorModified + "{enter}"
    );
    cy.screenshot("screenshot_semana_6/edit_intern_tag/input-color");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-save");

    cy.wait(500);
    cy.contains("Retry");
  });

  it("Unsuccessfully edit public tag leaving the process", () => {
    const tagName = "#" + faker.company.name();
    const tagNameModified = "#" + faker.company.name();
    const tagColor = faker.color.rgb().replace("#", "");
    const tagColorModified = faker.color.cmyk();

    loginLatest();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/login");

    //first create the tag
    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags");

    cy.wait(500);
    cy.contains("Internal tags").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-internal-tags");

    cy.wait(500);
    cy.contains("New tag").click();
    cy.screenshot("screenshot_semana_6/intern-tag/new-tag");

    cy.wait(500);
    cy.get("input[name=name]").type(tagName);
    cy.screenshot("screenshot_semana_6/intern-tag/input-name");

    cy.wait(500);
    cy.get("input[name=accent-color].gh-input").type(tagColor + "{enter}");
    cy.screenshot("screenshot_semana_6/intern-tag/input-color");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/intern-tag/click-save");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags2");

    cy.wait(500);
    cy.contains("Internal tags").click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/click-internal-tags2");

    //Second modify the tag
    cy.wait(500);
    cy.get("ol").contains(tagName).click();
    cy.screenshot("screenshot_semana_6/edit_intern_tag/search-tags");

    cy.wait(500);
    cy.get("input[name=name]").clear();
    cy.get("input[name=name]").type(tagNameModified);
    cy.screenshot("screenshot_semana_6/edit_intern_tag/input-name");

    cy.wait(500);
    cy.get("input[name=accent-color].gh-input").clear();
    cy.get("input[name=accent-color].gh-input").type(
      tagColorModified + "{enter}"
    );
    cy.screenshot("screenshot_semana_6/edit_intern_tag/input-color");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/tags");
    cy.screenshot("screenshot_semana_6/edit_intern_tag/redirect-tags2");

    cy.wait(500);
    cy.once("uncaught:exception", () => false);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Leave")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/clicl-leave");
  });
});
