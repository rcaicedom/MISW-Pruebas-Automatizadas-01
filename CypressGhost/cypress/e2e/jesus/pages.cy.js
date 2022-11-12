import {testLogin} from "../../utils";
import {faker} from "@faker-js/faker";

function testCreatePage() {
  const title = faker.lorem.word()

  cy.visit('http://localhost:2368/ghost/#/pages')

  cy.wait(1000).contains('New page').click()

  cy.url().should('contain', '/editor/page')

  cy.get('textarea.gh-editor-title').type(title)
  cy.get('div.koenig-editor__editor').type(faker.lorem.paragraphs(1))
  return title
}

describe('The pages page', () => {
  it('successfully create', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).contains('Continue, final review →').click()
    cy.wait(1000).contains('Publish page, right now').click()

    cy.wait(500).get('div.gh-post-bookmark-title').should('contain', title)
  })

  it('successfully create draft, then publish', () => {
    testLogin();
    testCreatePage();

    cy.contains('Pages').click()

    cy.wait(500).get('ol.pages-list > .gh-posts-list-item').first().click();

    cy.get('.gh-editor-post-status').should('contain', 'Draft')

    cy.contains('Publish').click()
    cy.wait(1000).contains('Continue, final review →').click()
    cy.wait(1000).contains('Publish page, right now').click()
  })

  it('successfully create and delete', () => {
    testLogin();
    testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).contains('Continue, final review →').click()
    cy.wait(1000).contains('Publish page, right now').click()

    cy.visit('http://localhost:2368/ghost/#/pages')

    cy.wait(500).get('.gh-contentfilter').contains('Newest first').click()
    cy.wait(500).get('.ember-power-select-options').contains('Recently updated').click()

    cy.wait(500).get('ol.pages-list > .gh-posts-list-item').first().click();

    cy.wait(500).get('.settings-menu-toggle').click();

    cy.wait(500).contains('Delete page').click()
    cy.wait(500).contains('Delete').click({force: true})
  })

  it('successfully create draft', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Pages').click()

    cy.wait(500).get('.gh-contentfilter').contains('Newest first').click()
    cy.wait(500).get('.ember-power-select-options').contains('Recently updated').click()

    cy.wait(500).get('ol.pages-list > .gh-posts-list-item').first().get('.gh-content-entry-title').should(
        'contain', title
    )

    cy.wait(500).get('ol.pages-list > .gh-posts-list-item').first().contains('Draft')
  })

  it('successfully create and edit with invalid date', () => {
    testLogin();
    testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).contains('Continue, final review →').click()
    cy.wait(1000).contains('Publish page, right now').click()

    cy.visit('http://localhost:2368/ghost/#/pages')

    cy.wait(500).get('.gh-contentfilter').contains('Newest first').click()
    cy.wait(500).get('.ember-power-select-options').contains('Recently updated').click()

    cy.wait(500).get('ol.pages-list > .gh-posts-list-item').first().click();
    cy.wait(500).get('.settings-menu-toggle').click();
    cy.wait(500).get('.gh-date-time-picker-date > input').clear()
    cy.wait(500).get('.gh-date-time-picker-date > input').type('1992-23-21', {force: true})
    cy.wait(500).get('.gh-date-time-picker-date > input').blur()
    cy.wait(500).get('.gh-date-time-picker-error').should('contain', 'Invalid date')
  })
})