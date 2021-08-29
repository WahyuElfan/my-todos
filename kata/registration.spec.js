describe('login', function() {
    it('Visits page', function() {
        cy.visit('https://platform.kata.ai/login')

        cy.get('a').eq(1).click()

   });
});