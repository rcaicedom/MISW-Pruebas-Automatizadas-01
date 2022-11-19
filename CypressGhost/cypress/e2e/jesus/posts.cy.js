import {testLogin} from "../../utils";
import { faker } from '@faker-js/faker';

function testCreatePost(publish = true) {
  const title = faker.lorem.word()

  cy.visit('http://localhost:2368/ghost/#/posts')

  cy.wait(1000).contains('New post').click()

  cy.url().should('contain', '/editor/post')


  cy.get('textarea.gh-editor-title').type(title)


  cy.get('div.koenig-editor__editor').type(faker.lorem.paragraphs(1))

  if (publish) {
    cy.contains('Publish').click()

    cy.contains('Continue, final review →').click()

    cy.contains('Publish post, right now').click()

    cy.get('div.gh-post-bookmark-title').should('contain', title)
  }

  return title
}

describe('The posts page', () => {
  it('successfully create', () => {
    testLogin();
    testCreatePost();
  })

  it('successfully create, edit and change publication date', () => {
    testLogin();
    testCreatePost();

    cy.visit('http://localhost:2368/ghost/#/posts')

    cy.wait(500).get('ol.posts-list > .gh-posts-list-item').first().click();

    cy.wait(500).get('textarea.gh-editor-title').clear()
    cy.wait(500).get('textarea.gh-editor-title').type(faker.lorem.word())


    cy.wait(500).get('div.koenig-editor__editor').type(faker.lorem.paragraphs(1), {force: true})

    cy.contains('Publish').click()

    cy.wait(500).contains('Right now').click()
    cy.wait(500).contains('Schedule for later').click()
    cy.wait(500).get('.gh-date-time-picker-date > input').clear()
    cy.wait(500).get('.gh-date-time-picker-date > input').type('1992-23-21')
    cy.wait(500).get('.gh-date-time-picker-date > input').blur()
    cy.wait(500).get('.gh-date-time-picker-error').should('contain', 'Invalid date')
  })

  it('create draft post', () => {
    testLogin();
    const title = testCreatePost(false);

    cy.contains('Posts').click()

    cy.url().should('contain', '/posts')

    cy.wait(500).get('ol.posts-list > .gh-posts-list-item').first().get(".gh-content-entry-title").should(
        'contain', title
    )

    cy.wait(500).get('ol.posts-list > .gh-posts-list-item').first().contains('Draft')
  })

  it('create two post and verify sort', () => {
    testLogin();
    testCreatePost();
    // last post created
    const title = testCreatePost();

    cy.visit('http://localhost:2368/ghost/#/posts')
    cy.wait(500).get('.gh-contentfilter').contains('Newest first').click()
    cy.wait(500).get('.ember-power-select-options').contains('Recently updated').click()

    cy.wait(1000).get('ol.posts-list > .gh-posts-list-item').first().get('.gh-content-entry-title').should(
        'contain', title
    )
  })
})