import {testLogin} from "../utils";

describe('The posts page', () => {
  it('successfully create', () => {
    testLogin();

    // we should be redirected to /dashboard
    cy.visit('http://localhost:2368/ghost/#/posts')

    cy.wait(500).contains('New post').click()

    cy.url().should('contain', '/editor/post')

    cy.get('textarea.gh-editor-title') // 2.
        .type('My First Post') // 3.


    cy.get('div.koenig-editor__editor') // 2.
        .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel interdum quam, vitae consequat sem. Vivamus malesuada dictum enim a porta. Ut ultrices ante sed nisl mollis, eu dapibus dui venenatis. Maecenas pretium purus non posuere elementum. Quisque iaculis, ex pharetra porttitor lacinia, velit est lobortis ligula, sit amet accumsan metus turpis ut risus.') // 3.

    cy.contains('Publish').click()

    cy.contains('Continue, final review →').click()

    cy.contains('Publish post, right now').click()

    cy.get('div.gh-post-bookmark-title').should('contain', 'My First Post')
  })
})