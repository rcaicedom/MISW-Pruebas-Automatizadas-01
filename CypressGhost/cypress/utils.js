export function testLogin() {
    cy.visit("http://localhost:2368/ghost/#/signin")

    cy.get('input[name=identification]').type("jd.diazd1@uniandes.edu.co")

    // {enter} causes the form to submit
    cy.get('input[name=password]').type("@123Asd456{enter}")
}