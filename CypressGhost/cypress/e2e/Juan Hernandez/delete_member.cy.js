import { loginLatest } from "../../utils";
describe("Delete member flow", () => {
  it("successfully delete", () => {
    cy.on("uncaught:exception", () => false);
    cy.on("fail", () => false);

    const member = {
      name: "Juan Camilo Hernández",
      email: "j.hernandez@uniandes.edu.co",
    };

    loginLatest();
    cy.screenshot("screenshot_semana_6/delete_member/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/delete_member/visit_member");

    cy.wait(500);
    cy.get("input[name=name]").type(member.name);
    cy.screenshot("screenshot_semana_6/delete_member/create-member-delete");

    cy.wait(500);
    cy.get("input[name=email]").type(member.email);
    cy.screenshot("screenshot_semana_6/delete_member/input-email-member");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-save");

    cy.wait(500);
    cy.visit("http://localhost:3001/ghost/#/members");
    cy.screenshot("screenshot_semana_6/delete_member/redirect-member");

    cy.wait(500);
    cy.get("a").contains(member.name).click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.contains("Actions").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-actions-member");

    cy.wait(500);
    cy.contains("Delete member").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Delete member")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/click-confirm-delete");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Leave")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/clicl-leave");

    cy.wait(500);
    cy.get("table").not(member.name);
    cy.screenshot("screenshot_semana_6/delete_member/confirm-deletion");
  });

  it("Do not accept delete member", () => {
    cy.on("uncaught:exception", () => false);
    cy.on("fail", () => false);

    const member = {
      name: "Juan Carlos Hernández",
      email: "carlos.hernandez@uniandes.edu.co",
    };

    loginLatest();
    cy.screenshot("screenshot_semana_6/delete_member/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/delete_member/visit_member");

    cy.wait(500);
    cy.get("input[name=name]").type(member.name);
    cy.screenshot("screenshot_semana_6/delete_member/create-member-delete");

    cy.wait(500);
    cy.get("input[name=email]").type(member.email);
    cy.screenshot("screenshot_semana_6/delete_member/input-email-member");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-save");

    cy.wait(500);
    cy.visit("http://localhost:3001/ghost/#/members");
    cy.screenshot("screenshot_semana_6/delete_member/redirect-member");

    cy.wait(500);
    cy.get("a").contains(member.name).click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.contains("Actions").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-actions-member");

    cy.wait(500);
    cy.contains("Delete member").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Cancel")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/clicl-leave");

    cy.wait(500);
    cy.visit("http://localhost:3001/ghost/#/members");
    cy.get("table").contains(member.name);
    cy.screenshot("screenshot_semana_6/delete_member/confirm-deletion");
  });

  it("Delete member click on stay modal", () => {
    cy.on("uncaught:exception", () => false);
    cy.on("fail", () => false);
    const member = {
      name: "Juan Carlos Hernández",
      email: "carlos.hernandez@uniandes.edu.co",
    };

    loginLatest();
    cy.screenshot("screenshot_semana_6/delete_member/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/delete_member/visit_member");

    cy.wait(500);
    cy.get("input[name=name]").type(member.name);
    cy.screenshot("screenshot_semana_6/delete_member/create-member-delete");

    cy.wait(500);
    cy.get("input[name=email]").type(member.email);
    cy.screenshot("screenshot_semana_6/delete_member/input-email-member");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-save");

    cy.wait(500);
    cy.visit("http://localhost:3001/ghost/#/members");
    cy.screenshot("screenshot_semana_6/delete_member/redirect-member");

    cy.wait(500);
    cy.get("a").contains(member.name).click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.contains("Actions").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-actions-member");

    cy.wait(500);
    cy.contains("Delete member").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Delete member")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/click-confirm-delete");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Stay")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/clicl-leave");
  });

  it("Try to delete member the same member twice", () => {
    cy.on("uncaught:exception", () => false);
    cy.on("fail", () => false);
    const member = {
      name: "Vanessa Hernández",
      email: "va.hernandez@uniandes.edu.co",
    };

    loginLatest();
    cy.screenshot("screenshot_semana_6/delete_member/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/delete_member/visit_member");

    cy.wait(500);
    cy.get("input[name=name]").type(member.name);
    cy.screenshot("screenshot_semana_6/delete_member/create-member-delete");

    cy.wait(500);
    cy.get("input[name=email]").type(member.email);
    cy.screenshot("screenshot_semana_6/delete_member/input-email-member");

    cy.wait(500);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-save");

    cy.wait(500);
    cy.visit("http://localhost:3001/ghost/#/members");
    cy.screenshot("screenshot_semana_6/delete_member/redirect-member");

    cy.wait(500);
    cy.get("a").contains(member.name).click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.contains("Actions").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-actions-member");

    cy.wait(500);
    cy.contains("Delete member").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Delete member")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/click-confirm-delete");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Stay")
      .click();
    cy.screenshot("screenshot_semana_6/delete_member/click-stay");

    cy.wait(500);
    cy.contains("Actions").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-actions-member");

    cy.wait(500);
    cy.contains("Delete member").click();
    cy.screenshot("screenshot_semana_6/delete_member/click-delete-member");

    cy.wait(500);
    cy.get("div .modal-content")
      .get("div .modal-footer")
      .contains("Delete member")
      .click();

    cy.wait(500);
    cy.contains("Attempted to handle event");
  });
});
