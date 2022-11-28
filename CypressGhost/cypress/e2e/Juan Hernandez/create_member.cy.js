import { loginLatest } from "../../utils";
import { faker } from "@faker-js/faker";

describe("The create member page", () => {
  it("successfully create", () => {
    let memberName = faker.name.firstName() + faker.name.lastName();

    loginLatest();
    cy.screenshot("screenshot_semana_6/create_member/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/create_member/create-member");

    cy.wait(1000);
    cy.get("input[name=name]").type(memberName);
    cy.screenshot("screenshot_semana_6/create_member/input-user");

    cy.wait(1000);
    cy.get("input[name=email]").type(memberName + "@uniandes.edu.co");
    cy.screenshot("screenshot_semana_6/create_member/input-email");

    cy.wait(1000);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/create_member/click-save");
    cy.contains("Saved").click();
    cy.screenshot("screenshot_semana_6/create_member/saved-status");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members");
    cy.screenshot("screenshot_semana_6/create_member/visit-members");

    cy.wait(1000);
    cy.get("section").contains(memberName);
    cy.screenshot("screenshot_semana_6/create_member/verify-elements");
  });

  it("Unsuccessfully create with form validator error", () => {
    let memberName = faker.name.firstName() + faker.name.lastName();

    loginLatest();
    cy.screenshot("screenshot_semana_6/create_member/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/create_member/create-member");

    cy.wait(1000);
    cy.get("input[name=name]").type(memberName);
    cy.screenshot("screenshot_semana_6/create_member/input-user");

    cy.wait(1000);
    cy.get("input[name=email]").type(memberName);
    cy.screenshot("screenshot_semana_6/create_member/input-email");

    cy.wait(1000);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/create_member/click-save");

    cy.wait(1000);
    cy.contains("Retry");
  });

  it("unsuccessfully create member with duplicated data", () => {
    cy.on("uncaught:exception", () => false);
    cy.on("fail", () => false);
    let memberName = faker.name.firstName() + faker.name.lastName();

    loginLatest();
    cy.screenshot("screenshot_semana_6/create_member/login");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/create_member/create-member");

    cy.wait(1000);
    cy.get("input[name=name]").type(memberName);
    cy.screenshot("screenshot_semana_6/create_member/input-user");

    cy.wait(1000);
    cy.get("input[name=email]").type(memberName + "@uniandes.edu.co");
    cy.screenshot("screenshot_semana_6/create_member/input-email");

    cy.wait(1000);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/create_member/click-save");

    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/create_member/create-member");

    cy.wait(1000);
    cy.get("input[name=name]").type(memberName);
    cy.screenshot("screenshot_semana_6/create_member/input-user");

    cy.wait(1000);
    cy.get("input[name=email]").type(memberName + "@uniandes.edu.co");
    cy.screenshot("screenshot_semana_6/create_member/input-email");

    cy.wait(1000);
    cy.contains("Save").click();
    cy.screenshot("screenshot_semana_6/create_member/click-save");

    cy.wait(1000);
    cy.contains("Retry");
  });

  it("unseccessfully create memeber because leave proccess", () => {
    const member = {
      name: "Juan Camilo Hernández",
      email: "jc.hernandezp1@uniandes.edu.co",
    };

    loginLatest();
    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/members/new");
    cy.screenshot("screenshot_semana_6/create_member/create-member");

    cy.wait(1000);
    cy.get("input[name=name]").type(member.name);
    cy.screenshot("screenshot_semana_6/create_member/input-user");

    cy.wait(1000);
    cy.get("input[name=email]").type(member.email);
    cy.screenshot("screenshot_semana_6/create_member/input-email");

    cy.wait(1000);
    cy.once("uncaught:exception", () => false);
    cy.visit("http://localhost:3001/ghost/#/members");

    cy.wait(1000);
    cy.get("section").not(member.name);
    cy.screenshot("screenshot_semana_6/create_member/not-member");
  });
});
