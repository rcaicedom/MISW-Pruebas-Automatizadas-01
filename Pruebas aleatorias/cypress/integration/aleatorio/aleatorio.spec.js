import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import { dataDict } from "../common/DataPool";
import { elementDict } from "../common/ElementDictionary";
import * as steps from "../common/PageObjectIndex";

const { faker } = require("@faker-js/faker");

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin_romy"));
});

Given("I login into the admin page", () => {
  steps.setEmail(Cypress.env("admin_email_romy"));
  steps.setPassword(Cypress.env("admin_password_romy"));
  steps.clickLogin();
  cy.wait(2000);
});

When("I put wrong email on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(1), {
      force: true,
      parseSpecialCharSequences: false,
    });
});
When("I put ok email on the {string} element", (selector) => {
   elementDict[selector]().type(faker.internet.email(), {
      force: true,
      parseSpecialCharSequences: false,
    });
});


When("I put wrong long email on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(300), {
      force: true,
      parseSpecialCharSequences: false,
    });
});
When("I put long note on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(600), {
      force: true,
      parseSpecialCharSequences: false,
    });
});

When("I put extact note on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(500), {
      force: true,
      parseSpecialCharSequences: false,
    });
});

When("I put name on the {string} element", (selector) => {
   elementDict[selector]().type(faker.name.firstName(), {
      force: true,
      parseSpecialCharSequences: false,
    });
});
When("I put long name on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(300), {
      force: true,
      parseSpecialCharSequences: false,
    });
});
When("I put longexact name on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(191), {
      force: true,
      parseSpecialCharSequences: false,
    });
});
When("I click the {string} element", (selector) => {
  elementDict[selector]().click();
  cy.wait(2000);
});

Then("I see {string} on the screen", (text) => {
  expect(cy.contains(text)).to.exist;
});

// Tags

When("I go to the members page", () => {
  steps.clickMembers();
  cy.wait(2000);
});

When("I go to the post page", () => {
  steps.clickPost();
  cy.wait(2000);
});

When("I put wrong title on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(500), {
      force: true,
      parseSpecialCharSequences: false,
    });
});
When("I put wrong title 256 on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(256), {
      force: true,
      parseSpecialCharSequences: false,
    });
});

When("I put wrong title 255 on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(255), {
      force: true,
      parseSpecialCharSequences: false,
    });
});

When("I put ok title on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(100), {
      force: true,
      parseSpecialCharSequences: false,
    });
});

When("I put wrong short title on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.number(), {
      force: true,
      parseSpecialCharSequences: false,
    });
});


When("I put ok body on the {string} element", (selector) => {
   elementDict[selector]().type(faker.datatype.string(255), {
      force: true,
      parseSpecialCharSequences: false,
    });
});



