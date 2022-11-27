export function testLogin() {
    cy.visit("http://localhost:3001/ghost/#/signin")

    cy.wait(1000)
    cy.screenshot()

    cy.get('input[name=identification]').type("jd.diazd1@uniandes.edu.co")

    // {enter} causes the form to submit
    cy.get('input[name=password]').type("@123Asd456{enter}")

    cy.url().should('contain', '/ghost/#/site')
}