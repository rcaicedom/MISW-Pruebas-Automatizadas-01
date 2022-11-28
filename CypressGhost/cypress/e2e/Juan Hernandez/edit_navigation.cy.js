import { loginLatest } from "../../utils";

describe("The posts page", () => {
  const dataPoolRoutes = ["Index", "", "Home", "Search", "Users", "Blog"];

  it("successfully edit route", () => {
    loginLatest();
    cy.screenshot("screenshot_semana_6/navigation/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/settings");
    cy.screenshot("screenshot_semana_6/navigation/redirect-settings");

    cy.wait(500);
    cy.contains("Navigation").click();
    cy.screenshot("screenshot_semana_6/navigation/navigation-click");

    cy.wait(500);
    cy.get("#settings-navigation").get("input").first().clear();
    cy.get("#settings-navigation").get("input").first().type(dataPoolRoutes[0]);
    cy.screenshot("screenshot_semana_6/navigation/change-input");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/navigation/click-save");
    cy.contains("Saved");
    cy.screenshot("screenshot_semana_6/navigation/saved-status");
  });

  it("Unsuccessfully edit route with invalid argument", () => {
    loginLatest();
    cy.screenshot("screenshot_semana_6/navigation/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/settings");
    cy.screenshot("screenshot_semana_6/navigation/redirect-settings");

    cy.wait(500);
    cy.contains("Navigation").click();
    cy.screenshot("screenshot_semana_6/navigation/navigation-click");

    cy.wait(500);
    cy.get("#settings-navigation").get("input").first().clear();
    cy.screenshot("screenshot_semana_6/navigation/change-input");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/navigation/click-save");

    cy.wait(500);
    cy.contains("Retry");
  });

  it("Unsuccessfully edit route leaving process", () => {
    loginLatest();
    cy.screenshot("screenshot_semana_6/navigation/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/settings");
    cy.screenshot("screenshot_semana_6/navigation/redirect-settings");

    cy.wait(500);
    cy.contains("Navigation").click();
    cy.screenshot("screenshot_semana_6/navigation/navigation-click");

    cy.wait(500);
    cy.get("#settings-navigation").get("input").first().clear();
    cy.get("#settings-navigation").get("input").first().type(dataPoolRoutes[2]);
    cy.screenshot("screenshot_semana_6/navigation/change-input");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/navigation/click-save");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/settings");
    cy.screenshot("screenshot_semana_6/navigation/redirect-settings");

    cy.wait(500);
    cy.contains("Navigation").click();
    cy.screenshot("screenshot_semana_6/navigation/navigation-click");

    cy.wait(500);
    cy.get("#settings-navigation").get("input").first().clear();
    cy.get("#settings-navigation").get("input").first().type(dataPoolRoutes[3]);
    cy.screenshot("screenshot_semana_6/navigation/change-input");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/settings");
    cy.screenshot("screenshot_semana_6/navigation/redirect-settings");

    cy.wait(500);
    cy.once("uncaught:exception", () => false);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Leave")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/clicl-leave");
  });
});
