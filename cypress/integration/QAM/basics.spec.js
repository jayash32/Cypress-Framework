describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('jayash32@gmail.com')
        cy.get('input[type="password"]').type('jayash32')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})