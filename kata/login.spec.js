describe('login', function() {
    it('Visits page', function() {
      cy.visit('https://beta-dashboard.mangkujagat.com/auth/login')
        
        // input username
        cy.get("[name=email]")
          .type("akucakep@getnada.com")
          .should('have.value', 'akucakep@getnada.com');
        
        // input password
        cy.get("[name=password]")
          .type("tes@12345")
          .should('have.value', 'tes@12345');


        cy.get('form').submit();


     });
});