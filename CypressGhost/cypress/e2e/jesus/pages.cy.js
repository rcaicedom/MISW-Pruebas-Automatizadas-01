import {testLogin} from "../../utils";
import {faker} from "@faker-js/faker";

function testCreatePage(title = faker.lorem.word(), description = faker.lorem.paragraphs(1)) {

  cy.visit('http://localhost:3001/ghost/#/pages')

  cy.wait(1000).contains('New page').click()

  cy.url().should('contain', '/editor/page')

  cy.get('textarea.gh-editor-title').type(title)
  cy.get('div.koenig-editor__editor').type(description)
  cy.screenshot()
  return title
}

describe('The pages page', () => {
  it('successfully create', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()

    cy.wait(1000).contains('Pages').click()
    cy.wait(1000).contains(title)
  })

  it('create page with invalid title', () => {
    testLogin();
    testCreatePage(faker.lorem.paragraphs(3, ' '));
    cy.get('body').click(0,0);
    cy.wait(500).get('.gh-publishmenu-trigger').should('not.exist')
  })

  it('create page with invalid title 256 characters', () => {
    testLogin();
    testCreatePage('possimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimupossimuspossimuspossimopossimuspossimopossssimuss');
    cy.get('body').click(0,0);
    cy.wait(500).get('.gh-publishmenu-trigger').should('not.exist')
  })

  it('create page with invalid title 256 numbers', () => {
    testLogin();
    testCreatePage(faker.random.numeric(256));
    cy.get('body').click(0,0);
    cy.wait(500).get('.gh-publishmenu-trigger').should('not.exist')
  })

  it('create page with title 254 numbers', () => {
    testLogin();
    testCreatePage(faker.random.numeric(254));
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).get('.gh-editor-header').contains('Published')
  })

  it('create page with invalid title 255 numbers', () => {
    testLogin();
    testCreatePage(faker.random.numeric(255));
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).get('.gh-editor-header').contains('Published')
  })

  it('create page with title 254 characters', () => {
    testLogin();
    testCreatePage('possimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimupossimuspossimuspossimopossimuspossimopossssimu');
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).get('.gh-editor-header').contains('Published')
  })

  it('create page with invalid title 255 characters', () => {
    testLogin();
    testCreatePage('possimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimuspossimupossimuspossimuspossimopossimuspossimopossssimus');
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).get('.gh-editor-header').contains('Published')
  })

  it('create page with title only numbers', () => {
    testLogin();
    testCreatePage(faker.random.numeric(20));
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).get('.gh-editor-header').contains('Published')
  })

  it('create page with description only numbers', () => {
    testLogin();
    testCreatePage(faker.lorem.word(), faker.random.numeric(80));
    cy.wait(500).get('.gh-publishmenu-trigger').contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()
    cy.wait(500).get('.gh-editor-header').contains('Published')
  })

  it('create page, edit with invalid excerpt and close modal', () => {
    testLogin();
    const title = testCreatePage();

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()

    cy.wait(3000).contains('Pages').click()
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click({force: true});

    cy.wait(500).get('.post-settings').click()
    cy.get('textarea.post-setting-custom-excerpt').type(faker.lorem.paragraphs(3, ' '))
    cy.wait(500).get('.close.settings-menu-header-action').click()


    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()
    cy.contains('Saving failed: Excerpt cannot be longer than 300 characters.')
  })

  it('create page, edit with invalid excerpt and show error', () => {
    testLogin();
    const title = testCreatePage();

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()

    cy.wait(3000).contains('Pages').click()
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click({force: true});

    cy.wait(500).get('.post-settings').click()
    cy.get('textarea.post-setting-custom-excerpt').type(faker.lorem.paragraphs(3, ' '))
    cy.get('textarea.post-setting-custom-excerpt').blur()
    cy.contains('Excerpt cannot be longer than 300 characters.')
  })

  it('create page, edit with invalid excerpt 301 characters', () => {
    testLogin();
    testCreatePage();

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()

    cy.wait(3000).contains('Pages').click()
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click();

    cy.wait(500).get('.post-settings').click()
    cy.get('textarea.post-setting-custom-excerpt').type('Pellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatnequePellentesquesitametvolutpatnequPellentesquesitamPellentesquesitamPellentesque')
    cy.get('textarea.post-setting-custom-excerpt').blur()
    cy.contains('Excerpt cannot be longer than 300 characters.')
  })

  it('create page, edit with excerpt 299 characters', () => {
    testLogin();
    testCreatePage();

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()

    cy.wait(3000).contains('Pages').click()
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click({force: true});

    cy.wait(500).get('.post-settings').click()
    cy.get('textarea.post-setting-custom-excerpt').type('Pellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatneque,necmaximusmagnaPellentesquesitametvolutpatnequePellentesquesitametvolutpatnequPellentesquesitamPellentesquesitamPellentesq')
    cy.get('textarea.post-setting-custom-excerpt').blur()
    cy.wait(500).get('.close.settings-menu-header-action').click()

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()
    cy.wait(500).get('.gh-editor-header').contains('Published')
  })

  it('successfully create draft, then publish', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Pages').click()

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains(title)
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains('Draft')

    //cy.wait(1000).contains(title)

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains('Draft')
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click();

    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()

    cy.wait(1000).contains('Pages').click()
    cy.wait(500).get('.gh-contentfilter-sort .ember-basic-dropdown-trigger').click()
    cy.wait(500).contains('Recently updated').click()
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains(title)
    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains('Published')
    // cy.wait(500).get('div.gh-post-bookmark-title').should('contain', title)
  })

  it('successfully create and delete', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Publish').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').contains('Publish').click()

    cy.wait(2000)
    cy.contains('Pages').click()
    cy.wait(1000).contains(title)

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().click();

    cy.wait(500).get('.post-settings').click();

    cy.wait(500).contains('Delete page').click()
    cy.wait(500).contains('Delete').click({force: true})

    cy.wait(500)
    cy.screenshot()
  })

  it('create page with invalid excerpt and show error', () => {
    testLogin();
    testCreatePage();
    cy.wait(500).get('.post-settings').click()
    cy.get('textarea.post-setting-custom-excerpt').type(faker.lorem.paragraphs(3, ' '))
    cy.get('textarea.post-setting-custom-excerpt').blur()
    cy.contains('Excerpt cannot be longer than 300 characters.')
  })

  it('create page with invalid excerpt and close modal', () => {
    testLogin();
    testCreatePage();

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()

    cy.wait(500).get('.post-settings').click()
    cy.get('textarea.post-setting-custom-excerpt').type(faker.lorem.paragraphs(3, ' '))
    cy.wait(500).get('.close.settings-menu-header-action').click()

    cy.get('.gh-publishmenu-trigger').click()
    cy.wait(1000).get('.ember-basic-dropdown-content .gh-publishmenu-button').click()
    cy.contains('Saving failed: Excerpt cannot be longer than 300 characters.')
  })

  it('successfully create draft', () => {
    testLogin();
    const title = testCreatePage();

    cy.contains('Pages').click()

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().get('.gh-content-entry-title').should(
        'contain', title
    )

    cy.wait(500).get('ol.gh-list > .gh-posts-list-item').first().contains(title)
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

  it('dynamic successfully create',  () => {
    testLogin();
    cy.fixture('pages.json')
        .then((list) => {
          list.forEach((page) => {
            testCreatePage(page['title'], page['description']);
          })
        })
  })
})