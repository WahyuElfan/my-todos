describe('login', () => {
    it('should able to login', () => {
        // cy.request({
        // url:'https://platform.kata.ai/api/login',
        // method:'POST',
        // body: {user:
        //     {email: "akumanis@getnada.com", password: "tes@12345"}
        // }

        cy.request({
            method:'POST',
            url:'https://platform.kata.ai/api/login', 
            body:{email: "akumanis@getnada.com", password: "tes@12345"},
            failOnStatusCode: false

        })
        // .then(res => localStorage.setItem('user',res.user.x-access-token));
        cy.visit('https://platform.kata.ai/')
    })
})