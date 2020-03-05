describe('Login ', function () {
    beforeEach(function () {
        //Backend in test mode will delete the contents of the test database if a POST is sent to /api/testing/url
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const testUser = {
            username: 'keith',
            password: 'mypassword',
            name: 'Keith O'
        }
        cy.request('POST', 'http://localhost:3003/api/users/', testUser)

        cy.visit('http://localhost:3000')
    })
    it('front page can be opened', function () {
        cy.contains('Login')
    })
    
    it('user can login and post a blog', function(){
        cy.get('input:first')
            .type('keith')
        cy.get('input:last')
            .type('mypassword')
        cy.contains('login')
            .click()
        cy.contains('logout')

        cy.contains('new note')
            .click()

        cy.get('input:first')    
            .type('This title made by cypress')
        
        cy.get('input:last')
            .type('Author filled in by cypress')

        cy.contains('create')
            .click() 
        cy.contains('Blogs')
            .click()   
        
        cy.contains('This title made by cypress')
            
    })
})