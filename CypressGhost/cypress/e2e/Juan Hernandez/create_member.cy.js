import {testLogin} from "../../utils";

describe('The posts page', () => {
    it('successfully create', () => {
      testLogin();

      cy.wait(1000)
      cy.visit("http://localhost:2368/ghost/#/members/new");
      
      var x = Math.floor(Math.random()*10000);
      cy.wait(500)
      cy.get('input[name=name]').type("Automated user" + x);

      cy.wait(500)
      cy.get('input[name=email]').type("automated." + x + "@uniandes.edu.co");
      
      cy.wait(500)
      cy.contains('Save').click();
      cy.contains('Saved').click();


      cy.wait(500)
      cy.visit("http://localhost:2368/ghost/#/members");
    })
})