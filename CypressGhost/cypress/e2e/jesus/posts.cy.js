import {testLogin} from "../../utils";
import { faker } from '@faker-js/faker';

function testCreatePost(publish = true, title = faker.lorem.word(), description = faker.lorem.paragraphs(1)) {
  cy.visit('http://localhost:3001/ghost/#/posts')

  cy.wait(1000).contains('New post').click()

  cy.url().should('contain', '/editor/post')


  if (title) {
    cy.get('textarea.gh-editor-title').type(title)
  }

  if (description) {
    cy.get('div.koenig-editor__editor').type(description)
  }

  if (publish) {
    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    // Verify published status
    cy.wait(100).get('.gh-editor-header').contains('Published')
  }
  cy.wait(1000)
  cy.screenshot()
  return title
}

describe('The posts page', () => {
  it('successfully create', () => {
    testLogin();
    const title = testCreatePost();

    cy.wait(1000).contains(title)
  })

  it('successfully create, edit and change publication date', () => {
    testLogin();
    const title = testCreatePost();

    cy.contains('Posts').click()

    cy.wait(1000).contains(title)

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click({force: true});

    cy.wait(1000).get('textarea.gh-editor-title').clear()
    cy.wait(500).get('textarea.gh-editor-title').type(faker.lorem.word())


    cy.wait(500).get('div.koenig-editor__editor').type(faker.lorem.paragraphs(1), {force: true})

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()
    cy.wait(500).get('.post-settings').click()
    cy.wait(500).get('.gh-date-time-picker-date > input').clear()
    cy.wait(500).get('.gh-date-time-picker-date > input').type('1992-23-21')
    cy.wait(500).get('.gh-date-time-picker-date > input').blur()
    cy.wait(500).get('.gh-date-time-picker-error').should('contain', 'Invalid date')

    cy.wait(1000)
    cy.screenshot()
  })

  it('create post with blank title', () => {
    testLogin();
    testCreatePost(true, null);

    cy.get('.gh-editor-title').should('have.value', '(Untitled)')
  })

  it('create post with invalid title', () => {
    testLogin();
    testCreatePost(false, faker.lorem.paragraphs(3, ' '));
    cy.get('body').click(0,0);
    cy.wait(500).get('.gh-publishmenu-trigger').should('not.exist')
  })

  it('create post with invalid title 256 characters', () => {
    testLogin();
    const title = 'Pellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatnequePellentesquesitametvolutpatneque'
    testCreatePost(false, title, null);
    cy.get('body').click(0,0);
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).contains('Update failed: Title cannot be longer than 255 characters.')
  })

  it('create post with title 255 characters', () => {
    testLogin();
    const title = 'Pellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatnequePellentesquesitametvolutpatnequ'
    testCreatePost(true, title);
  })

  it('create post with title 255 characters', () => {
    testLogin();
    const title = 'Pellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatnequePellentesquesitametvolutpatneq'
    testCreatePost(true, title);
  })

  it('create post with invalid Excerpt', () => {
    testLogin();
    testCreatePost(true);
    cy.wait(500).get('.post-settings').click()
    cy.wait(500).get('.post-setting-custom-excerpt').type(faker.lorem.paragraphs(3))
    cy.get('.close.settings-menu-header-action').click()
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(500).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).contains('Update failed: Excerpt cannot be longer than 300 characters.')
  })

  it('create post with blank description', () => {
    testLogin();
    testCreatePost(true, faker.lorem.word(), null);
  })

  it('create draft post', () => {
    testLogin();
    const title = testCreatePost(false);

    cy.contains('Posts').click()

    cy.url().should('contain', '/posts')

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().get(".gh-content-entry-title").should(
        'contain', title
    )

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains('Draft')
  })

  it('create two post and verify sort', () => {
    testLogin();
    testCreatePost();
    // last post created
    const title = testCreatePost();

    cy.contains('Posts').click()

    cy.wait(1000).get('ol.gh-list > .gh-posts-list-item').first().get('.gh-content-entry-title').should(
        'contain', title
    )
  })

  it('dynamic successfully create',  () => {
    testLogin();
    cy.fixture('posts.json')
        .then((list) => {
          list.forEach((post) => {
            testCreatePost(post['title'], post['description']);
          })
        })
  })
})