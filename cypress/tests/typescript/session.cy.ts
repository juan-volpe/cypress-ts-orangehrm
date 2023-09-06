describe('OrangeHRM | Session', () => {
    
    beforeEach('Precondición: Usuario debe estar situado en la home page', () => {
        
        const username: string = 'Admin';
        const password: string = 'admin123';

        cy.session('Login', () => 
        {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            cy.url().should('contain', 'login');
        
            cy.get('[name="username"]').type(username).should('be.visible');        
            cy.get('[name="password"]').type(password).should('be.visible');        
            cy.get('[type="submit"]').click();                   
        });   
    });
    
    it('TC', () => {
        expect(true).equal(true);
    });
});