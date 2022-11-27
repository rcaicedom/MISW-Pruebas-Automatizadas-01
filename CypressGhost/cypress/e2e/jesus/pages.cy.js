import {testLogin} from "../../utils";
import {faker} from "@faker-js/faker";

function testCreatePage() {
  const title = faker.lorem.word()

  cy.visit('http://localhost:3001/ghost/#/pages')

  cy.wait(1000).contains('New page').click()

  cy.url().should('contain', '/editor/page')

  cy.get('textarea.gh-editor-title').type(title)
  cy.get('div.koenig-editor__editor').type(faker.lorem.paragraphs(1))
  cy.screenshot()
  return title
}

describe('The pages page', () => {
  it('successfully create', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
  })

  it('successfully create draft, then publish', () => {
    testLogin();
    testCreatePage();

    cy.contains('Pages').click()

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains('Draft')
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click();

    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content').contains('Publish').click()
  })

  it('successfully create and delete', () => {
    testLogin();
    testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()

    cy.wait(2000)
    cy.contains('Pages').click()

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click();

    cy.wait(500).get('.post-settings').click();

    cy.wait(500).contains('Delete page').click()
    cy.wait(500).contains('Delete').click({force: true})

    cy.wait(500)
    cy.screenshot()
  })

  it('successfully create draft', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Pages').click()

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().get('.gh-content-entry-title').should(
        'contain', title
    )

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains('Draft')
  })

  it('successfully create and edit with invalid date', () => {
    testLogin();
    testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()

    cy.wait(2000)
    cy.contains('Pages').click()

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click();
    cy.wait(500).get('.post-settings').click();
    cy.wait(500).get('.gh-date-time-picker-date > input').clear()
    cy.wait(500).get('.gh-date-time-picker-date > input').type('1992-23-21', {force: true})
    cy.wait(500).get('.gh-date-time-picker-date > input').blur()
    cy.wait(500).get('.gh-date-time-picker-error').should('contain', 'Invalid date')
    cy.wait(500)
    cy.screenshot()
  })
})