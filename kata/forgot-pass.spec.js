describe('login', function() {
    it('Visits page', function() {
      cy.visit('https://platform.kata.ai/login')

      cy.get("[data-testid=Forgot-Password-Link]").click();

      cy.get("[name=username]")
        .type("akucakep@getnada.com")
        .should('have.value', 'akucakep@getnada.com');
      cy.get('form').submit()

        //back login
      cy.get('a').eq(0).click()

    });
});