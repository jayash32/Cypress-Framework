import Login from '../pageObjects/login'

describe('Login', function(){
    const login = new Login()

    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type('jayash32@gmail.com')
        login.password().type('jayash32')
        login.signInButton().should('be.visible').click()
    })
})